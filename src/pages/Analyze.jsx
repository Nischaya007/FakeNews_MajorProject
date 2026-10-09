import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { 
  FileText, 
  Image as ImageIcon, 
  Upload, 
  Trash2, 
  RefreshCw, 
  ArrowRight, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Zap,
  Info
} from "lucide-react";
import LoadingPipeline from "../components/LoadingPipeline";
import { analyzeNews } from "../services/api";
import { SAMPLE_PRESETS } from "../data/mockData";

export default function Analyze() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Form State
  const [headline, setHeadline] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [imageInfo, setImageInfo] = useState({ name: "", size: "" });
  const [presetId, setPresetId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Validation & Loading
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Check if loaded via URL query ?sample=...
  useEffect(() => {
    const sampleQuery = searchParams.get("sample");
    if (sampleQuery) {
      loadSample(sampleQuery);
    }
  }, [searchParams]);

  // Handler to load a pre-configured sample
  const loadSample = (id) => {
    const sample = SAMPLE_PRESETS.find((p) => p.id === id);
    if (sample) {
      setHeadline(sample.headline);
      setContent(sample.content);
      setImagePreviewUrl(sample.imageUrl);
      setImageFile(null); // using mock URL
      setImageInfo({ name: sample.imageName, size: sample.imageSize });
      setPresetId(sample.id);
      setError("");
    }
  };

  // Drag & drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processImageFile(e.target.files[0]);
    }
  };

  const processImageFile = (file) => {
    // Validate file type
    if (!file.type.match(/^image\/(jpeg|jpg|png|webp)$/)) {
      setError("Please upload a valid JPG, JPEG, PNG, or WebP image.");
      return;
    }

    // Validate size (under 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("Image size exceeds 10MB limit.");
      return;
    }

    setImageFile(file);
    setImageInfo({
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
    });
    setPresetId(null); // Custom upload resets preset match
    setError("");

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreviewUrl("");
    setImageInfo({ name: "", size: "" });
    setPresetId(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleTriggerAnalysis = async (e) => {
    e.preventDefault();
    setError("");

    if (!headline.trim()) {
      setError("Please enter the news headline.");
      return;
    }

    if (!content.trim()) {
      setError("Please enter the news article content.");
      return;
    }

    if (content.trim().length < 20) {
      setError("Article content should be at least 20 characters for meaningful NLP evaluation.");
      return;
    }

    setIsLoading(true);

    try {
      const result = await analyzeNews({
        headline,
        content,
        imageFile,
        imagePreviewUrl,
        presetId
      });

      // Navigate to Result page passing result object in router state
      navigate("/result", { state: { result } });
    } catch (err) {
      console.error(err);
      setError("An error occurred during AI analysis. Please try again.");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container section-padding">
        <LoadingPipeline hasImage={Boolean(imagePreviewUrl || imageFile)} />
      </div>
    );
  }

  return (
    <div className="section-padding animate-fade-in">
      <div className="container">
        {/* Page Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "32px" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)", fontWeight: "700", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "6px" }}>
              <Sparkles size={14} />
              <span>Multimodal Verification Console</span>
            </div>
            <h1 style={{ fontSize: "2.2rem", fontWeight: "800" }}>
              Analyze News Article
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginTop: "4px" }}>
              Input article text and upload corresponding media to run joint NLP & Vision inference.
            </p>
          </div>

          {/* Quick Demo Load Presets */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#ffffff", padding: "6px 8px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-xs)" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: "600", color: "var(--text-muted)", paddingLeft: "6px" }}>
              Quick Presets:
            </span>
            <button
              type="button"
              className="btn btn-sm"
              style={{ backgroundColor: "var(--fake-red-light)", color: "var(--fake-red)", border: "1px solid var(--fake-red-border)" }}
              onClick={() => loadSample("sample-fake-1")}
              title="Load sample fake news about suppressed free energy"
            >
              <Zap size={13} /> Sample Fake
            </button>
            <button
              type="button"
              className="btn btn-sm"
              style={{ backgroundColor: "var(--real-green-light)", color: "var(--real-green)", border: "1px solid var(--real-green-border)" }}
              onClick={() => loadSample("sample-real-1")}
              title="Load sample real news about NASA Webb telescope"
            >
              <CheckCircle2 size={13} /> Sample Real
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div style={{
            background: "var(--fake-red-light)",
            border: "1px solid var(--fake-red-border)",
            borderRadius: "var(--radius-md)",
            padding: "14px 18px",
            color: "var(--fake-red)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "24px",
            fontSize: "0.92rem",
            fontWeight: "500"
          }}>
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* 2-Column Main Analysis Form */}
        <form onSubmit={handleTriggerAnalysis}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "32px",
            marginBottom: "36px"
          }}>
            {/* Left Column: Textual News Content */}
            <div className="card" style={{ padding: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", borderBottom: "1px solid var(--border-light)", paddingBottom: "14px" }}>
                <div style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--primary-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary)"
                }}>
                  <FileText size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700" }}>1. Textual Content (BERT NLP)</h3>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Tokenized across headline and body paragraphs</p>
                </div>
              </div>

              {/* News Headline */}
              <div className="form-group">
                <label className="form-label" htmlFor="news-headline">
                  <span>News Headline</span>
                  <span className="hint">{headline.length}/200 chars</span>
                </label>
                <input
                  id="news-headline"
                  type="text"
                  className="form-input"
                  placeholder="Enter news headline..."
                  value={headline}
                  maxLength={200}
                  onChange={(e) => setHeadline(e.target.value)}
                  required
                />
              </div>

              {/* News Content */}
              <div className="form-group" style={{ marginBottom: "0" }}>
                <label className="form-label" htmlFor="news-content">
                  <span>News Article Content</span>
                  <span className="hint">{content.length} characters</span>
                </label>
                <textarea
                  id="news-content"
                  className="form-textarea"
                  style={{ minHeight: "220px" }}
                  placeholder="Paste the news article content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Right Column: Visual News Media */}
            <div className="card" style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", borderBottom: "1px solid var(--border-light)", paddingBottom: "14px" }}>
                <div style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--accent-blue-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-blue)"
                }}>
                  <ImageIcon size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700" }}>2. Visual Media (Vision ViT)</h3>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Extracts visual features, provenance & artifacts</p>
                </div>
              </div>

              {/* Upload Drop Area or Preview */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/png, image/jpeg, image/jpg, image/webp"
                onChange={handleFileChange}
              />

              {!imagePreviewUrl ? (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  style={{
                    flex: 1,
                    minHeight: "260px",
                    border: `2px dashed ${isDragging ? "var(--primary)" : "var(--border-strong)"}`,
                    borderRadius: "var(--radius-lg)",
                    background: isDragging ? "var(--primary-light)" : "var(--bg-card-subtle)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all var(--transition-fast)"
                  }}
                >
                  <div style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    border: "1px solid var(--border-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                    marginBottom: "14px",
                    boxShadow: "var(--shadow-xs)"
                  }}>
                    <Upload size={24} />
                  </div>

                  <span style={{ fontWeight: "700", color: "var(--text-primary)", fontSize: "1rem" }}>
                    Drop your news image here
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: "6px 0 14px" }}>
                    or
                  </span>

                  <span className="btn btn-secondary btn-sm" style={{ pointerEvents: "none" }}>
                    Browse Image
                  </span>

                  <span style={{ fontSize: "0.75rem", color: "var(--text-light)", marginTop: "14px" }}>
                    Supported: JPG, JPEG, PNG, WebP (Max 10MB)
                  </span>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Image Preview Container */}
                  <div style={{
                    position: "relative",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    border: "1px solid var(--border-light)",
                    backgroundColor: "#0f172a",
                    maxHeight: "220px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <img
                      src={imagePreviewUrl}
                      alt="News media preview"
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover"
                      }}
                    />
                  </div>

                  {/* Image Info & Actions */}
                  <div style={{
                    marginTop: "14px",
                    padding: "12px 14px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-card-subtle)",
                    border: "1px solid var(--border-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                    <div style={{ overflow: "hidden", paddingRight: "10px" }}>
                      <div style={{ fontWeight: "600", fontSize: "0.85rem", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                        {imageInfo.name || "article_image.jpg"}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        {imageInfo.size || "1.5 MB"} &bull; Ready for Vision Model
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        style={{ padding: "6px 10px" }}
                        onClick={() => fileInputRef.current && fileInputRef.current.click()}
                        title="Change image"
                      >
                        <RefreshCw size={14} />
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        style={{ padding: "6px 10px", color: "var(--fake-red)" }}
                        onClick={handleRemoveImage}
                        title="Remove image"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Execution Bar */}
          <div style={{
            background: "#ffffff",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-light)",
            padding: "20px 28px",
            boxShadow: "var(--shadow-md)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "var(--primary-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary)"
              }}>
                <Zap size={20} />
              </div>
              <div>
                <div style={{ fontWeight: "700", color: "var(--text-primary)", fontSize: "0.98rem" }}>
                  Ready to analyze text + image
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  Cross-attention feature fusion across BERT (NLP) & ViT (Vision)
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ minWidth: "220px" }}
            >
              <span>Analyze News</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
