import React from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  ArrowRight, 
  ArrowDown, 
  Workflow
} from "lucide-react";

export default function About() {
  const coreCapabilities = [
    { 
      name: "Textual Representation", 
      category: "NLP Semantics", 
      desc: "Deep bidirectional contextual encoding analyzing article syntax, lexical patterns, and rhetorical tone.", 
      icon: "📖" 
    },
    { 
      name: "Visual Feature Extraction", 
      category: "Computer Vision", 
      desc: "Patch-based spatial feature extraction identifying image manipulations, contexts, and visual entities.", 
      icon: "🖼️" 
    },
    { 
      name: "Cross-Modal Attention", 
      category: "Multimodal Fusion", 
      desc: "Joint attention layer that captures semantic inconsistencies between headline text and paired imagery.", 
      icon: "✨" 
    },
    { 
      name: "Explainable Attribution", 
      category: "Salience Analysis", 
      desc: "Token-level and visual region highlighting identifying the specific cues driving the classification decision.", 
      icon: "💡" 
    },
    { 
      name: "Benchmark Evaluation", 
      category: "Empirical Validation", 
      desc: "Trained and benchmarked across standardized multimodal datasets including GossipCop and PolitiFact.", 
      icon: "🔬" 
    },
    { 
      name: "Verification Knowledge Base", 
      category: "Evidence Corpus", 
      desc: "Cross-references claims against verified reference corpora and high-confidence domain registries.", 
      icon: "🛡️" 
    }
  ];

  return (
    <div className="section-padding animate-fade-in">
      <div className="container">
        {/* Header Section */}
        <div style={{ maxWidth: "800px", marginBottom: "44px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--primary-light)", color: "var(--primary)", padding: "6px 14px", borderRadius: "var(--radius-full)", fontSize: "0.82rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "14px" }}>
            <GraduationCap size={16} />
            <span>University Major Project &bull; Research & Development</span>
          </div>

          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", lineHeight: "1.2", marginBottom: "16px" }}>
            About FakeNews AI
          </h1>

          <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
            <strong>FakeNews AI</strong> is a multimodal artificial intelligence system designed to analyze both textual and visual information from news content and predict whether the news is likely to be real or fake.
          </p>
        </div>

        {/* =========================================================================
            1. SYSTEM ARCHITECTURE VISUAL FLOW
            ========================================================================= */}
        <div className="card" style={{ padding: "36px", marginBottom: "44px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Workflow size={22} color="var(--primary)" />
                <h3 style={{ fontSize: "1.35rem", fontWeight: "800" }}>System Architecture</h3>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "2px" }}>
                End-to-end data flow from user submission through multimodal neural inference
              </p>
            </div>
            <span className="badge badge-primary" style={{ fontSize: "0.75rem" }}>
              Multimodal Pipeline
            </span>
          </div>

          {/* Visual Interactive Architecture Diagram */}
          <div style={{
            background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
            border: "1.5px solid var(--border-light)",
            borderRadius: "var(--radius-xl)",
            padding: "36px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px"
          }}>
            {/* Layer 1: User */}
            <div style={{
              background: "#ffffff",
              border: "1.5px solid var(--border-light)",
              padding: "10px 28px",
              borderRadius: "var(--radius-full)",
              fontWeight: "700",
              fontSize: "0.95rem",
              boxShadow: "var(--shadow-xs)"
            }}>
              👤 Client Interface
            </div>

            <ArrowDown size={20} color="var(--text-muted)" />

            {/* Layer 2: Frontend Client Console */}
            <div style={{
              background: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%)",
              border: "1.5px solid rgba(2, 132, 199, 0.4)",
              padding: "12px 32px",
              borderRadius: "var(--radius-lg)",
              textAlign: "center",
              boxShadow: "var(--shadow-xs)"
            }}>
              <div style={{ fontWeight: "700", color: "#0369a1", fontSize: "1rem" }}>
                💻 Fact-Checking Console & Visualization
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                Submission Portal &bull; Evidence Breakdown &bull; Attribution Maps
              </div>
            </div>

            <ArrowDown size={20} color="var(--primary)" />

            {/* Layer 3: Backend Inference Pipeline */}
            <div style={{
              background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 100%)",
              border: "1.5px solid rgba(79, 70, 229, 0.4)",
              padding: "14px 36px",
              borderRadius: "var(--radius-lg)",
              textAlign: "center",
              boxShadow: "var(--shadow-sm)"
            }}>
              <div style={{ fontWeight: "800", color: "#4338ca", fontSize: "1.05rem" }}>
                ⚡ Inference & Preprocessing Pipeline
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                Text Tokenization &bull; Image Normalization &bull; Pipeline Dispatcher
              </div>
            </div>

            <ArrowDown size={20} color="var(--primary)" />

            {/* Layer 4: Dual Encoders (BERT & ViT) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              width: "100%",
              maxWidth: "680px"
            }}>
              {/* Text Model */}
              <div style={{
                background: "#ffffff",
                border: "1.5px solid rgba(79, 70, 229, 0.3)",
                borderRadius: "var(--radius-md)",
                padding: "16px",
                textAlign: "center",
                boxShadow: "var(--shadow-xs)"
              }}>
                <div style={{ fontWeight: "700", color: "var(--primary)", fontSize: "0.95rem" }}>
                  📖 Textual Model (Linguistic Encoder)
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "3px" }}>
                  Bidirectional Attention &bull; 768-dim Vector Embeddings
                </div>
              </div>

              {/* Image Model */}
              <div style={{
                background: "#ffffff",
                border: "1.5px solid rgba(2, 132, 199, 0.3)",
                borderRadius: "var(--radius-md)",
                padding: "16px",
                textAlign: "center",
                boxShadow: "var(--shadow-xs)"
              }}>
                <div style={{ fontWeight: "700", color: "#0284c7", fontSize: "0.95rem" }}>
                  🖼️ Visual Model (Vision Transformer)
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "3px" }}>
                  Spatial Patch Embeddings &bull; Feature Map Extraction
                </div>
              </div>
            </div>

            <ArrowDown size={20} color="var(--secondary)" />

            {/* Layer 5: Feature Fusion */}
            <div style={{
              background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
              border: "1.5px solid rgba(124, 58, 237, 0.4)",
              padding: "14px 40px",
              borderRadius: "var(--radius-lg)",
              textAlign: "center",
              boxShadow: "var(--shadow-md)"
            }}>
              <div style={{ fontWeight: "800", color: "var(--secondary)", fontSize: "1.05rem" }}>
                ✨ Cross-Modal Feature Fusion Layer
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                Joint Attention Matrix &bull; Semantic Consistency Verification
              </div>
            </div>

            <ArrowDown size={20} color="var(--text-muted)" />

            {/* Layer 6: Classification & Decision */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              width: "100%",
              maxWidth: "480px"
            }}>
              <div style={{ background: "var(--real-green-light)", border: "1px solid var(--real-green-border)", padding: "10px", borderRadius: "var(--radius-md)", textAlign: "center", color: "var(--real-green)", fontWeight: "800", fontSize: "0.9rem" }}>
                REAL CLASSIFICATION
              </div>
              <div style={{ background: "var(--fake-red-light)", border: "1px solid var(--fake-red-border)", padding: "10px", borderRadius: "var(--radius-md)", textAlign: "center", color: "var(--fake-red)", fontWeight: "800", fontSize: "0.9rem" }}>
                FAKE CLASSIFICATION
              </div>
            </div>

            <ArrowDown size={20} color="var(--text-muted)" />

            {/* Layer 7: Explanation & Persistence */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              width: "100%",
              maxWidth: "560px"
            }}>
              <div style={{ background: "#ffffff", border: "1px solid var(--border-light)", padding: "12px", borderRadius: "var(--radius-md)", textAlign: "center" }}>
                <div style={{ fontWeight: "700", fontSize: "0.85rem" }}>💡 Attribution & Salience</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Token salience & visual attribution</div>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid var(--border-light)", padding: "12px", borderRadius: "var(--radius-md)", textAlign: "center" }}>
                <div style={{ fontWeight: "700", fontSize: "0.85rem" }}>🛡️ Fact Verification & Audit Store</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Historical logs & vector indices</div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. METHODOLOGICAL PILLARS & ARCHITECTURAL CAPABILITIES
            ========================================================================= */}
        <div style={{ marginBottom: "44px" }}>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "800" }}>System Methodology & Core Capabilities</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Engineered using state-of-the-art multimodal deep learning techniques</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px"
          }}>
            {coreCapabilities.map((item) => (
              <div key={item.name} className="card card-hoverable" style={{ padding: "22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                  <div style={{ fontSize: "1.8rem" }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: "700" }}>{item.name}</h4>
                    <span style={{ fontSize: "0.74rem", color: "var(--primary)", fontWeight: "600" }}>{item.category}</span>
                  </div>
                </div>
                <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* University Major Project Summary Card */}
        <div style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
          borderRadius: "var(--radius-xl)",
          padding: "36px",
          color: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px"
        }}>
          <div>
            <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#a5b4fc", fontWeight: "700", marginBottom: "6px" }}>
              University Major Project
            </div>
            <h3 style={{ fontSize: "1.45rem", fontWeight: "800", color: "#ffffff", marginBottom: "8px" }}>
              Multimodal Fake News Detection System
            </h3>
            <p style={{ color: "#c7d2fe", fontSize: "0.92rem", maxWidth: "600px" }}>
              Bridging academic research and practical fact-checking platforms through unified cross-modal deep learning.
            </p>
          </div>

          <Link to="/analyze" className="btn btn-lg" style={{ backgroundColor: "#ffffff", color: "#312e81", fontWeight: "700" }}>
            <span>Launch Analysis</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

