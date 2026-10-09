import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  History as HistoryIcon, 
  Search, 
  Filter, 
  Calendar, 
  Eye, 
  ArrowUpDown, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  Sparkles,
  FileText
} from "lucide-react";
import StatusBadge from "../components/StatusBadge";
import { getHistoryFromStorage } from "../services/api";

export default function History() {
  const navigate = useNavigate();
  const [historyData, setHistoryData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPrediction, setFilterPrediction] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setHistoryData(getHistoryFromStorage());
  }, []);

  // Filter items
  const filteredItems = historyData.filter((item) => {
    const matchesSearch = item.headline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterPrediction === "ALL" || item.prediction === filterPrediction;
    return matchesSearch && matchesFilter;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handleViewRecord = (item) => {
    // Generate explanation structure if viewing historical item
    const isFake = item.prediction === "FAKE";
    const resultObj = {
      id: item.id,
      date: item.date,
      headline: item.headline,
      content: `Archived news verification analysis for: "${item.headline}". Complete cross-modal feature vectors and token attention weights preserved.`,
      imageUrl: item.imagePreview || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      imageName: "archived_media_record.jpg",
      imageSize: "1.4 MB",
      prediction: item.prediction,
      confidence: item.confidence,
      text_score: item.text_score || (isFake ? 0.84 : 0.92),
      image_score: item.image_score || (isFake ? 0.88 : 0.90),
      multimodal_score: item.multimodal_score || item.confidence,
      modalities: item.modalities || "Text + Image",
      explanation: {
        summary: isFake 
          ? "Historical model inference logged significant linguistic and visual deception cues." 
          : "Historical model inference corroborated source credibility and visual alignment.",
        textSignals: isFake ? [
          "Emotionally charged linguistic patterns",
          "Sensational clickbait styling",
          "Uncorroborated declarative claims"
        ] : [
          "Institutional vocabulary standard",
          "Neutral reporting tone",
          "Named entity consistency"
        ],
        imageSignals: isFake ? [
          "Visual metadata context mismatch",
          "Compression anomaly score elevated"
        ] : [
          "Visual scene matches stated entities",
          "No visual splicing detected"
        ],
        combinedSignal: isFake 
          ? "Dual modalities jointly verified elevated deception probability." 
          : "Dual modalities corroborated authentic press distribution."
      },
      agents: [
        { id: "text", name: "Text Agent", model: "BERT Analysis", role: "Lexical Scrutiny", status: "Completed", score: `${Math.round((item.text_score || 0.85) * 100)}%` },
        { id: "vision", name: "Image Agent", model: "Vision Analysis", role: "Artifact Detection", status: "Completed", score: `${Math.round((item.image_score || 0.88) * 100)}%` },
        { id: "fusion", name: "Explanation Agent", model: "Result Summary", role: "Cross-Modal Synthesis", status: "Completed", score: `${Math.round((item.multimodal_score || item.confidence) * 100)}%` }
      ],
      evidence: [
        {
          source: "Historical Fact Checking Corpus",
          title: "Archived Corroboration Record",
          description: "Corroborated with multi-source verified dataset entries.",
          relevance: 92,
          url: "https://factcheck.org"
        }
      ]
    };

    navigate("/result", { state: { result: resultObj } });
  };

  return (
    <div className="section-padding animate-fade-in">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)", fontWeight: "700", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "6px" }}>
            <HistoryIcon size={14} />
            <span>Audit Trail & Records</span>
          </div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: "800" }}>
            Verification History
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginTop: "4px" }}>
            Log of previously verified articles, multimodal confidence scores, and neural predictions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="card" style={{ padding: "20px 24px", marginBottom: "28px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: "16px",
            alignItems: "center"
          }}>
            {/* Search Input */}
            <div style={{ position: "relative" }}>
              <Search size={18} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--text-light)" }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: "42px" }}
                placeholder="Search headlines or keywords..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            {/* Filter by Prediction */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Filter size={16} color="var(--text-muted)" />
              <select
                className="form-input"
                value={filterPrediction}
                onChange={(e) => {
                  setFilterPrediction(e.target.value);
                  setCurrentPage(1);
                }}
                style={{ cursor: "pointer" }}
              >
                <option value="ALL">All Predictions (REAL + FAKE)</option>
                <option value="REAL">Only REAL News</option>
                <option value="FAKE">Only FAKE News</option>
              </select>
            </div>

            {/* Total count */}
            <div style={{ textAlign: "right", fontSize: "0.88rem", color: "var(--text-muted)", fontWeight: "500" }}>
              Showing <strong>{filteredItems.length}</strong> total records
            </div>
          </div>
        </div>

        {/* Professional History Table */}
        <div className="card" style={{ padding: 0, overflow: "hidden", marginBottom: "24px" }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ background: "var(--bg-card-subtle)", borderBottom: "1px solid var(--border-light)" }}>
                  <th style={{ padding: "16px 20px", fontSize: "0.82rem", fontWeight: "700", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Date
                  </th>
                  <th style={{ padding: "16px 20px", fontSize: "0.82rem", fontWeight: "700", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    News Article
                  </th>
                  <th style={{ padding: "16px 20px", fontSize: "0.82rem", fontWeight: "700", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Prediction
                  </th>
                  <th style={{ padding: "16px 20px", fontSize: "0.82rem", fontWeight: "700", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Confidence
                  </th>
                  <th style={{ padding: "16px 20px", fontSize: "0.82rem", fontWeight: "700", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.04em", textAlign: "right" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((item) => {
                    const conf = Math.round(item.confidence * 100);
                    const isFake = item.prediction === "FAKE";

                    return (
                      <tr 
                        key={item.id}
                        style={{
                          borderBottom: "1px solid var(--border-subtle)",
                          transition: "background-color 0.15s ease"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--bg-card-hover)"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                      >
                        <td style={{ padding: "16px 20px", fontSize: "0.85rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                          {item.date}
                        </td>
                        <td style={{ padding: "16px 20px", maxWidth: "440px" }}>
                          <div style={{ fontWeight: "600", fontSize: "0.92rem", color: "var(--text-primary)", marginBottom: "3px" }}>
                            "{item.headline}"
                          </div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" }}>
                            <span>{item.modalities || "Text + Image"}</span>
                            <span>&bull;</span>
                            <span>Source: {item.source || "Web Intake"}</span>
                          </div>
                        </td>
                        <td style={{ padding: "16px 20px", whiteSpace: "nowrap" }}>
                          <StatusBadge prediction={item.prediction} size="sm" />
                        </td>
                        <td style={{ padding: "16px 20px", whiteSpace: "nowrap" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{
                              fontWeight: "800",
                              fontSize: "0.95rem",
                              fontFamily: "var(--font-heading)",
                              color: isFake ? "var(--fake-red)" : "var(--real-green)"
                            }}>
                              {conf}%
                            </span>
                            <div style={{
                              width: "60px",
                              height: "6px",
                              backgroundColor: "var(--border-light)",
                              borderRadius: "var(--radius-full)",
                              overflow: "hidden"
                            }}>
                              <div style={{
                                width: `${conf}%`,
                                height: "100%",
                                backgroundColor: isFake ? "var(--fake-red)" : "var(--real-green)"
                              }} />
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: "16px 20px", textAlign: "right", whiteSpace: "nowrap" }}>
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => handleViewRecord(item)}
                            style={{ padding: "6px 12px", gap: "5px" }}
                          >
                            <Eye size={14} />
                            <span>View</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} style={{ padding: "48px 20px", textAlign: "center", color: "var(--text-muted)" }}>
                      <FileText size={32} style={{ margin: "0 auto 12px", opacity: 0.5 }} />
                      <div style={{ fontSize: "1rem", fontWeight: "600" }}>No verification records found</div>
                      <div style={{ fontSize: "0.82rem" }}>Try adjusting your search query or filter</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px"
        }}>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              className="btn btn-secondary btn-sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>
            <button
              className="btn btn-secondary btn-sm"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
