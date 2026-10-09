import React, { useState } from "react";
import { 
  BarChart3, 
  Sparkles, 
  Layers, 
  FileText, 
  Image as ImageIcon, 
  HelpCircle, 
  Database, 
  TrendingUp, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  Info,
  GitFork
} from "lucide-react";
import MetricBar from "../components/MetricBar";
import { RESEARCH_BENCHMARKS } from "../data/mockData";

export default function Research() {
  const [activeMetricTab, setActiveMetricTab] = useState("accuracy");
  const { models, dataset, ablation } = RESEARCH_BENCHMARKS;

  const metricTabs = [
    { key: "accuracy", label: "Accuracy", desc: "Overall classification accuracy across balanced test set" },
    { key: "precision", label: "Precision", desc: "True positive fake news detection precision rate" },
    { key: "recall", label: "Recall", desc: "Sensitivity in capturing deceptive news articles" },
    { key: "f1", label: "F1 Score", desc: "Harmonic mean of precision and recall performance" }
  ];

  return (
    <div className="section-padding animate-fade-in">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "8px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)", fontWeight: "700", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              <BarChart3 size={14} />
              <span>Comparative Empirical Benchmarks</span>
            </div>
            <span className="badge badge-neutral" style={{ fontSize: "0.75rem", border: "1px solid var(--border-strong)" }}>
              Demo / Mock Results
            </span>
          </div>

          <h1 style={{ fontSize: "2.4rem", fontWeight: "800" }}>
            Research & Model Performance
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "680px", marginTop: "6px" }}>
            Comparing single-modal and multimodal approaches for fake-news detection across benchmark NLP & Computer Vision encoders.
          </p>
        </div>

        {/* =========================================================================
            1. RESEARCH QUESTION & EXPERIMENTAL SETUP
            ========================================================================= */}
        <div 
          className="card" 
          style={{
            padding: "32px",
            marginBottom: "36px",
            background: "linear-gradient(145deg, #ffffff 0%, #f5f3ff 100%)",
            border: "1.5px solid rgba(124, 58, 237, 0.2)",
            boxShadow: "var(--shadow-sm)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "var(--radius-md)",
              background: "var(--secondary-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--secondary)"
            }}>
              <HelpCircle size={20} />
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "var(--secondary)", letterSpacing: "0.05em" }}>
                Primary Thesis Question
              </span>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--text-primary)" }}>
                Does combining news text and image information improve fake-news detection compared with using a single modality?
              </h3>
            </div>
          </div>

          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px", maxWidth: "920px" }}>
            Empirical findings validate that multimodal joint fusion consistently outperforms unimodal baselines by 
            capturing semantic mismatch anomalies where deceptive text accompanies mismatched or repurposed images.
          </p>

          {/* Experimental Setup 3-Branch Architecture */}
          <div style={{
            background: "#ffffff",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-light)",
            padding: "24px",
            boxShadow: "var(--shadow-xs)"
          }}>
            <h4 style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.03em" }}>
              Experimental Setup & Evaluation Branches
            </h4>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px"
            }}>
              {/* Branch 1 */}
              <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)" }}>
                <div style={{ fontWeight: "700", fontSize: "0.9rem", color: "var(--primary)", marginBottom: "8px" }}>
                  Branch 1: Text Only
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div>News Text &bull; RoBERTa / BERT-Base</div>
                  <div style={{ color: "var(--text-primary)", fontWeight: "600" }}>&rarr; 768-dim NLP Embeddings</div>
                  <div style={{ color: "var(--text-primary)", fontWeight: "700" }}>&rarr; Prediction: 84.2% Accuracy</div>
                </div>
              </div>

              {/* Branch 2 */}
              <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)" }}>
                <div style={{ fontWeight: "700", fontSize: "0.9rem", color: "#0284c7", marginBottom: "8px" }}>
                  Branch 2: Image Only
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div>News Image &bull; Vision Transformer (ViT)</div>
                  <div style={{ color: "var(--text-primary)", fontWeight: "600" }}>&rarr; 16x16 Patch Embeddings</div>
                  <div style={{ color: "var(--text-primary)", fontWeight: "700" }}>&rarr; Prediction: 78.6% Accuracy</div>
                </div>
              </div>

              {/* Branch 3 */}
              <div style={{ background: "var(--primary-light)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid rgba(79, 70, 229, 0.3)" }}>
                <div style={{ fontWeight: "700", fontSize: "0.9rem", color: "var(--primary)", marginBottom: "8px" }}>
                  Branch 3: Multimodal Model
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div>BERT + ViT Dual Encoders</div>
                  <div style={{ color: "var(--secondary)", fontWeight: "700" }}>&rarr; Cross-Attention Feature Fusion</div>
                  <div style={{ color: "var(--real-green)", fontWeight: "800" }}>&rarr; Prediction: 89.7% Accuracy (+5.5%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. MODEL COMPARISON CARDS (3 CARDS)
            ========================================================================= */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
            <div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "800" }}>Architecture Comparisons</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Benchmark metrics achieved on 10,000-sample balanced dataset</p>
            </div>
            <span style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>Updated V1.0 Benchmark</span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px"
          }}>
            {/* Card 1: Text Only */}
            <div className="card card-hoverable" style={{ padding: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div>
                  <span className="badge badge-primary" style={{ fontSize: "0.7rem", marginBottom: "6px" }}>
                    NLP Unimodal
                  </span>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Text Only</h4>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>BERT / RoBERTa-base</div>
                </div>
                <FileText size={24} color="var(--primary)" />
              </div>

              <div style={{
                background: "var(--bg-card-subtle)",
                padding: "16px",
                borderRadius: "var(--radius-md)",
                marginBottom: "20px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "600", textTransform: "uppercase" }}>
                  Accuracy
                </div>
                <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                  84.2%
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", borderTop: "1px solid var(--border-light)", paddingTop: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Precision:</span>
                  <strong>82.8%</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Recall:</span>
                  <strong>85.6%</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>F1 Score:</span>
                  <strong>84.1%</strong>
                </div>
              </div>
            </div>

            {/* Card 2: Image Only */}
            <div className="card card-hoverable" style={{ padding: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div>
                  <span className="badge badge-neutral" style={{ fontSize: "0.7rem", color: "#0284c7", marginBottom: "6px" }}>
                    Vision Unimodal
                  </span>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Image Only</h4>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Vision Transformer (ViT-B/16)</div>
                </div>
                <ImageIcon size={24} color="#0284c7" />
              </div>

              <div style={{
                background: "var(--bg-card-subtle)",
                padding: "16px",
                borderRadius: "var(--radius-md)",
                marginBottom: "20px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "600", textTransform: "uppercase" }}>
                  Accuracy
                </div>
                <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                  78.6%
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", borderTop: "1px solid var(--border-light)", paddingTop: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Precision:</span>
                  <strong>76.4%</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Recall:</span>
                  <strong>80.2%</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>F1 Score:</span>
                  <strong>78.2%</strong>
                </div>
              </div>
            </div>

            {/* Card 3: Text + Image (Multimodal) */}
            <div className="card card-hoverable card-highlight" style={{ padding: "28px", border: "2px solid rgba(79, 70, 229, 0.3)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div>
                  <span className="badge badge-real" style={{ fontSize: "0.7rem", marginBottom: "6px" }}>
                    ⭐ Best Performer
                  </span>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Text + Image</h4>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Multimodal Fusion Network</div>
                </div>
                <Sparkles size={24} color="var(--secondary)" />
              </div>

              <div style={{
                background: "linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-light) 100%)",
                padding: "16px",
                borderRadius: "var(--radius-md)",
                marginBottom: "20px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: "700", textTransform: "uppercase" }}>
                  Accuracy
                </div>
                <div style={{ fontSize: "2.4rem", fontWeight: "900", color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
                  89.7%
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", borderTop: "1px solid var(--border-light)", paddingTop: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Precision:</span>
                  <strong style={{ color: "var(--real-green)" }}>89.1% (+6.3%)</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Recall:</span>
                  <strong style={{ color: "var(--real-green)" }}>90.4% (+4.8%)</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>F1 Score:</span>
                  <strong style={{ color: "var(--real-green)" }}>89.7% (+5.6%)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. MODEL COMPARISON CHART & TABS
            ========================================================================= */}
        <div className="card" style={{ padding: "32px", marginBottom: "36px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "24px" }}>
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700" }}>Performance Benchmark Comparison</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Quantitative metrics across single-modal vs. multimodal fusion</p>
            </div>

            {/* Metric Selector Tabs */}
            <div style={{ display: "flex", gap: "6px", background: "var(--bg-card-subtle)", padding: "4px", borderRadius: "var(--radius-md)" }}>
              {metricTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveMetricTab(tab.key)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    background: activeMetricTab === tab.key ? "#ffffff" : "transparent",
                    color: activeMetricTab === tab.key ? "var(--primary)" : "var(--text-muted)",
                    fontWeight: activeMetricTab === tab.key ? "700" : "500",
                    fontSize: "0.82rem",
                    cursor: "pointer",
                    boxShadow: activeMetricTab === tab.key ? "var(--shadow-xs)" : "none",
                    transition: "all 0.15s ease"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Description */}
          <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "24px", background: "var(--bg-main)", padding: "10px 14px", borderRadius: "var(--radius-md)" }}>
            <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>Metric Focus: </span>
            {metricTabs.find((t) => t.key === activeMetricTab)?.desc}
          </div>

          {/* Clean Visual Progress Chart */}
          <div style={{ maxWidth: "800px" }}>
            <MetricBar
              label="Text Only (BERT / RoBERTa)"
              value={activeMetricTab === "accuracy" ? 84.2 : activeMetricTab === "precision" ? 82.8 : activeMetricTab === "recall" ? 85.6 : 84.1}
              color="var(--primary)"
              subtext="Unimodal Text"
            />
            <MetricBar
              label="Image Only (Vision Transformer / ViT)"
              value={activeMetricTab === "accuracy" ? 78.6 : activeMetricTab === "precision" ? 76.4 : activeMetricTab === "recall" ? 80.2 : 78.2}
              color="#0284c7"
              subtext="Unimodal Vision"
            />
            <MetricBar
              label="Text + Image (Cross-Modal Attention Fusion)"
              value={activeMetricTab === "accuracy" ? 89.7 : activeMetricTab === "precision" ? 89.1 : activeMetricTab === "recall" ? 90.4 : 89.7}
              color="var(--real-green)"
              subtext="Proposed Multimodal (+5.5% boost)"
            />
          </div>
        </div>

        {/* =========================================================================
            4. DATASET OVERVIEW & ABLATION STUDY
            ========================================================================= */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px"
        }}>
          {/* Dataset Statistics */}
          <div className="card" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Database size={20} color="var(--primary)" />
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: "700" }}>Dataset Overview</h3>
                <span className="badge badge-neutral" style={{ fontSize: "0.68rem" }}>Demo Dataset Statistics</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                <span style={{ color: "var(--text-secondary)" }}>Total Samples</span>
                <strong style={{ fontFamily: "var(--font-heading)" }}>{dataset.totalSamples}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                <span style={{ color: "var(--text-secondary)" }}>Real News Samples</span>
                <strong style={{ color: "var(--real-green)", fontFamily: "var(--font-heading)" }}>{dataset.realNews}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                <span style={{ color: "var(--text-secondary)" }}>Fake News Samples</span>
                <strong style={{ color: "var(--fake-red)", fontFamily: "var(--font-heading)" }}>{dataset.fakeNews}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                <span style={{ color: "var(--text-secondary)" }}>Training Split (80%)</span>
                <strong>{dataset.trainSplit}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                <span style={{ color: "var(--text-secondary)" }}>Testing Split (20%)</span>
                <strong>{dataset.testSplit}</strong>
              </div>
            </div>

            <div style={{ marginTop: "16px", fontSize: "0.78rem", color: "var(--text-muted)", background: "var(--bg-main)", padding: "10px 12px", borderRadius: "var(--radius-sm)" }}>
              Corpus sources: GossipCop, PolitiFact Multimodal Benchmark, and verified research repositories.
            </div>
          </div>

          {/* Ablation Study */}
          <div className="card" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <GitFork size={20} color="var(--secondary)" />
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: "700" }}>Ablation Study</h3>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Impact of individual architectural modules</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {ablation.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: idx === ablation.length - 1 ? "var(--primary-light)" : "var(--bg-card-subtle)",
                    border: idx === ablation.length - 1 ? "1px solid rgba(79, 70, 229, 0.3)" : "1px solid var(--border-light)",
                    borderRadius: "var(--radius-md)",
                    padding: "12px 14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <span style={{ fontSize: "0.85rem", fontWeight: idx === ablation.length - 1 ? "700" : "500", color: "var(--text-primary)" }}>
                    {item.component}
                  </span>
                  <span style={{
                    fontSize: "0.82rem",
                    fontWeight: "700",
                    color: idx === ablation.length - 1 ? "var(--primary)" : "var(--real-green)"
                  }}>
                    {item.gain}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "16px", fontSize: "0.78rem", color: "var(--text-muted)" }}>
              Cross-Modal Multihead Attention yields the highest F1 score by attending to discordant visual patches given textual noun phrases.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
