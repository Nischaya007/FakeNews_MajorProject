import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  FileText, 
  Image as ImageIcon, 
  Layers, 
  ArrowLeft, 
  Share2, 
  Download, 
  ShieldCheck, 
  Cpu, 
  ExternalLink, 
  Lightbulb, 
  Database, 
  Clock, 
  RotateCcw,
  Check,
  Bot
} from "lucide-react";
import ConfidenceRing from "../components/ConfidenceRing";
import StatusBadge from "../components/StatusBadge";
import PipelineVisual from "../components/PipelineVisual";
import EvidenceModal from "../components/EvidenceModal";
import { SAMPLE_PRESETS } from "../data/mockData";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // If navigated directly without state, fallback to sample fake preset
  const result = location.state?.result || {
    id: "sample-demo-fallback",
    date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    headline: SAMPLE_PRESETS[0].headline,
    content: SAMPLE_PRESETS[0].content,
    imageUrl: SAMPLE_PRESETS[0].imageUrl,
    imageName: SAMPLE_PRESETS[0].imageName,
    imageSize: SAMPLE_PRESETS[0].imageSize,
    prediction: SAMPLE_PRESETS[0].prediction,
    confidence: SAMPLE_PRESETS[0].confidence,
    text_score: SAMPLE_PRESETS[0].text_score,
    image_score: SAMPLE_PRESETS[0].image_score,
    multimodal_score: SAMPLE_PRESETS[0].multimodal_score,
    explanation: SAMPLE_PRESETS[0].explanation,
    agents: SAMPLE_PRESETS[0].agents,
    evidence: SAMPLE_PRESETS[0].evidence,
    modalities: "Text + Image"
  };

  const [selectedEvidence, setSelectedEvidence] = useState(null);
  const [copied, setCopied] = useState(false);

  const isFake = result.prediction === "FAKE";
  const confidencePercent = Math.round(result.confidence * 1000) / 10;
  const textPercent = Math.round((result.text_score || 0.82) * 100);
  const imagePercent = Math.round((result.image_score || 0.91) * 100);
  const fusionPercent = Math.round((result.multimodal_score || result.confidence) * 1000) / 10;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="section-padding animate-fade-in" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="container" style={{ maxWidth: "1140px" }}>
        {/* Navigation & Status Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "28px"
        }}>
          <Link to="/analyze" className="btn btn-secondary btn-sm" style={{ gap: "6px" }}>
            <ArrowLeft size={16} />
            <span>Analyze Another Article</span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "var(--primary-light)",
              color: "var(--primary)",
              padding: "6px 14px",
              borderRadius: "var(--radius-full)",
              fontSize: "0.82rem",
              fontWeight: "700"
            }}>
              <CheckCircle2 size={15} />
              <span>Analysis Complete</span>
            </div>

            <button 
              className="btn btn-secondary btn-sm" 
              onClick={handleCopyLink}
              title="Share report"
            >
              {copied ? <Check size={14} color="var(--real-green)" /> : <Share2 size={14} />}
              <span>{copied ? "Copied" : "Share"}</span>
            </button>

            <button 
              className="btn btn-secondary btn-sm" 
              onClick={handlePrint}
              title="Export report"
            >
              <Download size={14} />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            1. MAIN RESULT CARD (LARGE PREDICTION BANNER)
            ========================================================================= */}
        <div 
          className="card" 
          style={{
            padding: "40px",
            marginBottom: "32px",
            background: isFake 
              ? "linear-gradient(180deg, #ffffff 0%, #fff7f7 100%)" 
              : "linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)",
            border: `2px solid ${isFake ? "var(--fake-red-border)" : "var(--real-green-border)"}`,
            boxShadow: isFake ? "var(--shadow-fake)" : "var(--shadow-real)"
          }}
        >
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "36px",
            alignItems: "center"
          }}>
            {/* Left: Decision & Headline */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <StatusBadge prediction={result.prediction} size="lg" />
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                  <Clock size={14} /> {result.date || "Today"}
                </span>
              </div>

              <h2 style={{
                fontSize: "1.85rem",
                fontWeight: "800",
                lineHeight: "1.3",
                color: "var(--text-primary)",
                marginBottom: "16px"
              }}>
                "{result.headline}"
              </h2>

              <p style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: "1.6",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}>
                {result.content}
              </p>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "20px",
                fontSize: "0.82rem",
                color: "var(--text-muted)"
              }}>
                <span>Modalities: <strong style={{ color: "var(--text-primary)" }}>{result.modalities || "Text + Image"}</strong></span>
                <span>&bull;</span>
                <span>Inference Engine: <strong style={{ color: "var(--primary)" }}>BERT + ViT Cross-Fusion</strong></span>
              </div>
            </div>

            {/* Right: Confidence Gauge */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderLeft: "1px solid var(--border-light)",
              paddingLeft: "24px"
            }}>
              <ConfidenceRing
                percentage={confidencePercent}
                prediction={result.prediction}
                size={180}
                strokeWidth={14}
                label={`Overall ${result.prediction} Probability`}
              />
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. MODEL ANALYSIS (3 BREAKDOWN CARDS)
            ========================================================================= */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700" }}>Model Analysis Breakdown</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Individual unimodal scores vs. joint cross-modal fusion</p>
            </div>
            <span className="badge badge-primary" style={{ fontSize: "0.75rem" }}>
              3 Neural Pathways
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px"
          }}>
            {/* Card 1: Text Analysis */}
            <div className="card card-hoverable" style={{ padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--primary)", fontWeight: "700" }}>
                  <FileText size={18} />
                  <span>Text Analysis</span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--real-green)", fontWeight: "600", display: "flex", alignItems: "center", gap: "3px" }}>
                  <CheckCircle2 size={13} /> Completed
                </span>
              </div>

              <div style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "4px" }}>
                BERT / RoBERTa
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "16px" }}>
                NLP Contextual Representation
              </div>

              <div style={{
                background: "var(--bg-card-subtle)",
                padding: "12px 14px",
                borderRadius: "var(--radius-md)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: "500" }}>
                  {isFake ? "Fake Probability" : "Real Probability"}
                </span>
                <span style={{
                  fontSize: "1.25rem",
                  fontWeight: "800",
                  fontFamily: "var(--font-heading)",
                  color: isFake ? "var(--fake-red)" : "var(--real-green)"
                }}>
                  {textPercent}%
                </span>
              </div>
            </div>

            {/* Card 2: Image Analysis */}
            <div className="card card-hoverable" style={{ padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0284c7", fontWeight: "700" }}>
                  <ImageIcon size={18} />
                  <span>Image Analysis</span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--real-green)", fontWeight: "600", display: "flex", alignItems: "center", gap: "3px" }}>
                  <CheckCircle2 size={13} /> Completed
                </span>
              </div>

              <div style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "4px" }}>
                Hugging Face Vision (ViT)
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "16px" }}>
                Visual Transformer Embeddings
              </div>

              <div style={{
                background: "var(--bg-card-subtle)",
                padding: "12px 14px",
                borderRadius: "var(--radius-md)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: "500" }}>
                  {isFake ? "Fake Probability" : "Real Probability"}
                </span>
                <span style={{
                  fontSize: "1.25rem",
                  fontWeight: "800",
                  fontFamily: "var(--font-heading)",
                  color: isFake ? "var(--fake-red)" : "var(--real-green)"
                }}>
                  {imagePercent}%
                </span>
              </div>
            </div>

            {/* Card 3: Multimodal Analysis */}
            <div className="card card-hoverable card-highlight" style={{ padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--secondary)", fontWeight: "700" }}>
                  <Sparkles size={18} />
                  <span>Multimodal Analysis</span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--real-green)", fontWeight: "600", display: "flex", alignItems: "center", gap: "3px" }}>
                  <CheckCircle2 size={13} /> Completed
                </span>
              </div>

              <div style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "4px" }}>
                Feature Fusion Layer
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "16px" }}>
                Cross-Attention Joint Synthesis
              </div>

              <div style={{
                background: "var(--secondary-light)",
                padding: "12px 14px",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <span style={{ fontSize: "0.85rem", color: "var(--secondary)", fontWeight: "600" }}>
                  Final Probability
                </span>
                <span style={{
                  fontSize: "1.25rem",
                  fontWeight: "800",
                  fontFamily: "var(--font-heading)",
                  color: isFake ? "var(--fake-red)" : "var(--real-green)"
                }}>
                  {fusionPercent}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Architecture Diagram */}
        <div style={{ marginBottom: "32px" }}>
          <PipelineVisual prediction={result.prediction} />
        </div>

        {/* =========================================================================
            3. AI EXPLANATION SECTION
            ========================================================================= */}
        <div className="card" style={{ padding: "36px", marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "var(--radius-md)",
              background: "var(--primary-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary)"
            }}>
              <Lightbulb size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                Why did the model make this prediction?
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                Interpretable explainability breakdown generated by the cross-modal attention weights
              </p>
            </div>
          </div>

          <div style={{
            background: "var(--bg-card-subtle)",
            borderLeft: "4px solid var(--primary)",
            padding: "14px 18px",
            borderRadius: "0 var(--radius-md) var(--radius-md) 0",
            marginBottom: "28px",
            fontSize: "0.95rem",
            color: "var(--text-primary)",
            fontWeight: "500"
          }}>
            {result.explanation?.summary || (isFake 
              ? "The model identified several signals associated with potentially misleading content." 
              : "The model identified strong verification signals corroborating factual reporting.")}
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
            marginBottom: "28px"
          }}>
            {/* Text Signals */}
            <div style={{
              background: "#ffffff",
              border: "1px solid var(--border-light)",
              borderRadius: "var(--radius-md)",
              padding: "20px",
              boxShadow: "var(--shadow-xs)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700", color: "#4338ca", fontSize: "0.95rem", marginBottom: "14px" }}>
                <FileText size={17} />
                <span>Text Signals</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {(result.explanation?.textSignals || [
                  "Emotionally charged language detected",
                  "Strong sensational wording",
                  "Several claims require verification"
                ]).map((signal, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                    <span style={{ color: isFake ? "var(--fake-red)" : "var(--real-green)", marginTop: "2px", fontWeight: "bold" }}>&bull;</span>
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Signals */}
            <div style={{
              background: "#ffffff",
              border: "1px solid var(--border-light)",
              borderRadius: "var(--radius-md)",
              padding: "20px",
              boxShadow: "var(--shadow-xs)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700", color: "#0284c7", fontSize: "0.95rem", marginBottom: "14px" }}>
                <ImageIcon size={17} />
                <span>Image Signals</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {(result.explanation?.imageSignals || [
                  "Image appears contextually inconsistent",
                  "Visual content requires further verification"
                ]).map((signal, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                    <span style={{ color: isFake ? "var(--fake-red)" : "var(--real-green)", marginTop: "2px", fontWeight: "bold" }}>&bull;</span>
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Combined Signal */}
          <div style={{
            background: isFake ? "var(--fake-red-light)" : "var(--real-green-light)",
            border: `1px solid ${isFake ? "var(--fake-red-border)" : "var(--real-green-border)"}`,
            borderRadius: "var(--radius-md)",
            padding: "16px 20px",
            fontSize: "0.92rem",
            color: isFake ? "#991b1b" : "#065f46",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <Sparkles size={18} />
            <span>
              Combined Signal: {result.explanation?.combinedSignal || (isFake 
                ? "Text and image signals together increased the probability of a fake classification." 
                : "Text and image modalities corroborate each other, yielding a high-confidence authentic prediction.")}
            </span>
          </div>
        </div>

        {/* =========================================================================
            4. AI AGENT SECTION (COMMAND CENTER PIPELINE)
            ========================================================================= */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <Bot size={18} color="var(--primary)" />
            <h3 style={{ fontSize: "1.15rem", fontWeight: "700" }}>AI Analysis Pipeline</h3>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginLeft: "4px" }}>Autonomous Agent Nodes</span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px"
          }}>
            {(result.agents || [
              { id: "text", name: "Text Agent", model: "BERT Analysis", role: "Lexical Scrutiny", status: "Completed", score: "82% Signal" },
              { id: "vision", name: "Image Agent", model: "Vision Analysis", role: "Artifact Detection", status: "Completed", score: "91% Signal" },
              { id: "fusion", name: "Explanation Agent", model: "Result Summary", role: "Cross-Modal Synthesis", status: "Completed", score: "87.4% Final" }
            ]).map((agent) => (
              <div 
                key={agent.id} 
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-md)",
                  padding: "18px",
                  boxShadow: "var(--shadow-xs)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "700", fontSize: "0.95rem", color: "var(--text-primary)" }}>
                    {agent.id === "text" ? "📝 " : agent.id === "vision" ? "🖼 " : "💡 "} {agent.name}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "var(--real-green)", fontWeight: "600", display: "flex", alignItems: "center", gap: "3px" }}>
                    <Check size={12} strokeWidth={3} /> {agent.status}
                  </span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: "600" }}>
                  {agent.model}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px" }}>
                  {agent.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            5. SUPPORTING EVIDENCE SECTION
            ========================================================================= */}
        <div className="card" style={{ padding: "32px", marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Database size={18} color="var(--primary)" />
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Supporting Evidence</h3>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "2px" }}>
                Retrieved knowledge corpus corroboration
              </p>
            </div>
            <span className="badge badge-neutral" style={{ fontSize: "0.72rem" }}>
              Evidence Retrieval &mdash; Demo
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px"
          }}>
            {(result.evidence || [
              {
                source: "Global Verification Index",
                title: "Fact Checking Corpus Query",
                description: "Cross-referenced with verified fact-checked claims repository.",
                relevance: 91,
                url: "https://factcheck.org"
              },
              {
                source: "Reuters Wire Unit",
                title: "Independent Media Archive",
                description: "Dispatches searched for matching entities and verified chronology.",
                relevance: 87,
                url: "https://reuters.com"
              },
              {
                source: "Snopes Investigative Desk",
                title: "Viral Claim Verification",
                description: "Evaluated historical spread patterns and known misattribution vectors.",
                relevance: 84,
                url: "https://snopes.com"
              }
            ]).map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--bg-card-subtle)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-md)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "4px" }}>
                    {item.source}
                  </div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "16px" }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid var(--border-light)" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Relevance: <strong style={{ color: "var(--text-primary)" }}>{item.relevance}%</strong>
                  </div>
                  <button
                    className="btn btn-secondary btn-sm"
                    style={{ padding: "5px 10px", fontSize: "0.8rem" }}
                    onClick={() => setSelectedEvidence(item)}
                  >
                    <span>View Source</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for viewing evidence details */}
        <EvidenceModal
          evidence={selectedEvidence}
          onClose={() => setSelectedEvidence(null)}
        />
      </div>
    </div>
  );
}
