import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Image as ImageIcon, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  BarChart3, 
  ShieldAlert, 
  Zap, 
  BrainCircuit,
  Database,
  ArrowUpRight
} from "lucide-react";
import PipelineVisual from "../components/PipelineVisual";
import { SAMPLE_PRESETS } from "../data/mockData";

export default function Home() {
  const navigate = useNavigate();

  const handleLaunchSample = (sampleId) => {
    navigate(`/analyze?sample=${sampleId}`);
  };

  return (
    <div className="animate-fade-in">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        borderBottom: "1px solid var(--border-light)",
        paddingTop: "68px",
        paddingBottom: "76px"
      }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "56px",
            alignItems: "center"
          }}>
            {/* Left Hero Content */}
            <div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--primary-light)",
                color: "var(--primary)",
                padding: "6px 14px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.82rem",
                fontWeight: "700",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: "20px"
              }}>
                <Sparkles size={14} />
                <span>Multimodal Artificial Intelligence</span>
              </div>

              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 3.6rem)",
                fontWeight: "800",
                letterSpacing: "-0.035em",
                lineHeight: "1.12",
                color: "var(--text-primary)",
                marginBottom: "20px"
              }}>
                Is this news <span style={{
                  background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>real?</span>
              </h1>

              <p style={{
                fontSize: "1.18rem",
                color: "var(--text-secondary)",
                lineHeight: "1.6",
                maxWidth: "540px",
                marginBottom: "36px"
              }}>
                Analyze the text and image behind a news story using multimodal AI.
                By joining NLP representations with computer vision embeddings, FakeNews AI detects cross-modal discrepancies with high precision.
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <Link to="/analyze" className="btn btn-primary btn-lg">
                  <span>Analyze News</span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/research" className="btn btn-secondary btn-lg">
                  <BarChart3 size={18} color="var(--primary)" />
                  <span>Explore Research</span>
                </Link>
              </div>

              {/* Academic Badge */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "36px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-light)",
                fontSize: "0.85rem",
                color: "var(--text-muted)"
              }}>
                <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>Dual-Model Architecture:</span>
                <span>BERT (Text)</span>
                <span>+</span>
                <span>ViT (Vision)</span>
                <span>+</span>
                <span style={{ color: "var(--secondary)", fontWeight: "600" }}>Cross-Modal Attention</span>
              </div>
            </div>

            {/* Right Hero Visual Component */}
            <div>
              <PipelineVisual prediction="FAKE" />

              {/* Quick Preset Launcher Box */}
              <div style={{
                marginTop: "20px",
                background: "#ffffff",
                border: "1px solid var(--border-light)",
                borderRadius: "var(--radius-lg)",
                padding: "16px 20px",
                boxShadow: "var(--shadow-sm)"
              }}>
                <div style={{ fontSize: "0.82rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span>Quick Test Presets for Demo:</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--primary)", fontWeight: "600" }}>1-Click Load</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <button
                    onClick={() => handleLaunchSample("sample-fake-1")}
                    style={{
                      background: "var(--fake-red-light)",
                      border: "1px solid var(--fake-red-border)",
                      borderRadius: "var(--radius-md)",
                      padding: "10px 12px",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--fake-red)", fontWeight: "700", fontSize: "0.8rem" }}>
                      <AlertTriangle size={14} />
                      <span>Sample Fake News</span>
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", marginTop: "3px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                      Free Energy Device Hoax
                    </div>
                  </button>

                  <button
                    onClick={() => handleLaunchSample("sample-real-1")}
                    style={{
                      background: "var(--real-green-light)",
                      border: "1px solid var(--real-green-border)",
                      borderRadius: "var(--radius-md)",
                      padding: "10px 12px",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--real-green)", fontWeight: "700", fontSize: "0.8rem" }}>
                      <CheckCircle2 size={14} />
                      <span>Sample Real News</span>
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", marginTop: "3px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                      NASA Webb Telescope
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          QUICK STATISTICS SECTION
          ========================================================================= */}
      <section style={{ padding: "48px 0", background: "#ffffff", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}>
            {/* Stat 1 */}
            <div className="card card-hoverable" style={{ padding: "24px" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.88rem", fontWeight: "600", marginBottom: "8px" }}>
                Articles Analyzed
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                1,250+
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--primary)", marginTop: "4px", fontWeight: "600" }}>
                &bull; Live Dataset Corpus
              </div>
            </div>

            {/* Stat 2 */}
            <div className="card card-hoverable" style={{ padding: "24px" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.88rem", fontWeight: "600", marginBottom: "8px" }}>
                Detection Accuracy
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--real-green)", fontFamily: "var(--font-heading)" }}>
                89.7%
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                +5.5% vs. Text-Only BERT
              </div>
            </div>

            {/* Stat 3 */}
            <div className="card card-hoverable" style={{ padding: "24px" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.88rem", fontWeight: "600", marginBottom: "8px" }}>
                Multimodal Model
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
                Active
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                BERT + ViT Dual Encoders
              </div>
            </div>

            {/* Stat 4 */}
            <div className="card card-hoverable" style={{ padding: "24px" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.88rem", fontWeight: "600", marginBottom: "8px" }}>
                AI Analysis
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                Real-time
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                &lt; 300ms Feature Inference
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW FAKENEWS AI WORKS (4 STEPS)
          ========================================================================= */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 52px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: "700", textTransform: "uppercase", color: "var(--primary)", letterSpacing: "0.05em" }}>
              Verification Pipeline
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginTop: "6px", marginBottom: "12px" }}>
              How FakeNews AI Works
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)" }}>
              A 4-step dual-modal inspection pipeline engineered for university research and practical fact-checking.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            marginBottom: "56px"
          }}>
            {/* Step 1 */}
            <div className="card card-hoverable" style={{ position: "relative" }}>
              <div style={{
                fontSize: "1.5rem",
                fontWeight: "900",
                color: "rgba(79, 70, 229, 0.2)",
                fontFamily: "var(--font-heading)",
                marginBottom: "12px"
              }}>
                01
              </div>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "var(--radius-md)",
                background: "var(--primary-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary)",
                marginBottom: "16px"
              }}>
                <FileText size={22} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px" }}>
                Enter News
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                User enters headline and article content for linguistic, syntactic, and sentiment evaluation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="card card-hoverable">
              <div style={{
                fontSize: "1.5rem",
                fontWeight: "900",
                color: "rgba(2, 132, 199, 0.2)",
                fontFamily: "var(--font-heading)",
                marginBottom: "12px"
              }}>
                02
              </div>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "var(--radius-md)",
                background: "var(--accent-blue-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-blue)",
                marginBottom: "16px"
              }}>
                <ImageIcon size={22} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px" }}>
                Upload Image
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                User provides the image associated with the news to extract visual artifacts and context.
              </p>
            </div>

            {/* Step 3 */}
            <div className="card card-hoverable">
              <div style={{
                fontSize: "1.5rem",
                fontWeight: "900",
                color: "rgba(124, 58, 237, 0.2)",
                fontFamily: "var(--font-heading)",
                marginBottom: "12px"
              }}>
                03
              </div>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "var(--radius-md)",
                background: "var(--secondary-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--secondary)",
                marginBottom: "16px"
              }}>
                <BrainCircuit size={22} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px" }}>
                AI Analysis
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                Text (BERT) and image (ViT) are processed in parallel through specialized neural pathways.
              </p>
            </div>

            {/* Step 4 */}
            <div className="card card-hoverable">
              <div style={{
                fontSize: "1.5rem",
                fontWeight: "900",
                color: "rgba(5, 150, 105, 0.2)",
                fontFamily: "var(--font-heading)",
                marginBottom: "12px"
              }}>
                04
              </div>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "var(--radius-md)",
                background: "var(--real-green-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--real-green)",
                marginBottom: "16px"
              }}>
                <Layers size={22} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px" }}>
                Final Prediction
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                Cross-attention feature fusion combines both signals to predict REAL or FAKE with granular explanations.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div style={{
            background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
            borderRadius: "var(--radius-xl)",
            padding: "44px 40px",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            boxShadow: "var(--shadow-lg)"
          }}>
            <div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#ffffff", marginBottom: "8px" }}>
                Ready to verify a news story?
              </h3>
              <p style={{ color: "#c7d2fe", fontSize: "1rem", maxWidth: "560px" }}>
                Upload an article with its accompanying photo to run the complete multimodal verification pipeline.
              </p>
            </div>
            <Link to="/analyze" className="btn btn-lg" style={{ backgroundColor: "#ffffff", color: "#312e81", fontWeight: "700" }}>
              <span>Start Analysis Now</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
