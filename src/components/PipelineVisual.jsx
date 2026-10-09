import React from "react";
import { FileText, Image as ImageIcon, Cpu, Network, Sparkles, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export default function PipelineVisual({ prediction = "FAKE", interactive = false }) {
  const isFake = prediction === "FAKE";

  return (
    <div className="flow-diagram-container" style={{ width: "100%", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div>
          <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
            <Network size={18} color="var(--primary)" />
            <span>Multimodal Cross-Attention Architecture</span>
          </h4>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "2px" }}>
            Dual-encoder pipeline with cross-modal fusion layer
          </p>
        </div>
        <span className="badge badge-primary" style={{ fontSize: "0.72rem" }}>
          Active Flow
        </span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1.2fr auto 1fr",
        alignItems: "center",
        gap: "12px",
        padding: "12px 0"
      }}>
        {/* Modality Inputs Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Text Input Block */}
          <div style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-light)",
            borderRadius: "var(--radius-md)",
            padding: "12px 14px",
            boxShadow: "var(--shadow-xs)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#4338ca", fontWeight: "600", fontSize: "0.88rem" }}>
              <FileText size={16} />
              <span>News Text</span>
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "3px" }}>
              Headline + Body Text
            </div>
          </div>

          {/* Image Input Block */}
          <div style={{
            background: "#ffffff",
            border: "1.5px solid var(--border-light)",
            borderRadius: "var(--radius-md)",
            padding: "12px 14px",
            boxShadow: "var(--shadow-xs)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0284c7", fontWeight: "600", fontSize: "0.88rem" }}>
              <ImageIcon size={16} />
              <span>News Image</span>
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "3px" }}>
              Visual Metadata & Patches
            </div>
          </div>
        </div>

        {/* Connector 1 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", color: "var(--text-light)" }}>
          <ArrowRight size={20} />
          <ArrowRight size={20} />
        </div>

        {/* Encoders Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* BERT / NLP Model */}
          <div style={{
            background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 100%)",
            border: "1.5px solid rgba(79, 70, 229, 0.3)",
            borderRadius: "var(--radius-md)",
            padding: "12px 14px",
            boxShadow: "var(--shadow-xs)"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontWeight: "700", color: "#4338ca", fontSize: "0.9rem" }}>BERT / RoBERTa</span>
              <span className="badge badge-primary" style={{ fontSize: "0.68rem", padding: "2px 6px" }}>NLP</span>
            </div>
            <div style={{ fontSize: "0.74rem", color: "var(--text-secondary)", marginTop: "4px" }}>
              768-dim Semantic Embeddings
            </div>
          </div>

          {/* Vision Model */}
          <div style={{
            background: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%)",
            border: "1.5px solid rgba(2, 132, 199, 0.3)",
            borderRadius: "var(--radius-md)",
            padding: "12px 14px",
            boxShadow: "var(--shadow-xs)"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontWeight: "700", color: "#0369a1", fontSize: "0.9rem" }}>Vision Transformer</span>
              <span className="badge badge-neutral" style={{ fontSize: "0.68rem", padding: "2px 6px", color: "#0284c7" }}>ViT</span>
            </div>
            <div style={{ fontSize: "0.74rem", color: "var(--text-secondary)", marginTop: "4px" }}>
              16x16 Patch Embeddings
            </div>
          </div>
        </div>

        {/* Connector 2 (Converging to Fusion) */}
        <div style={{ color: "var(--primary)", display: "flex", alignItems: "center" }}>
          <ArrowRight size={22} strokeWidth={2.2} />
        </div>

        {/* Cross-Modal Fusion & Prediction */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Fusion Block */}
          <div style={{
            background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
            border: "1.5px solid rgba(124, 58, 237, 0.4)",
            borderRadius: "var(--radius-md)",
            padding: "12px 14px",
            boxShadow: "0 4px 12px rgba(124, 58, 237, 0.12)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--secondary)", fontWeight: "700", fontSize: "0.88rem" }}>
              <Sparkles size={16} />
              <span>Feature Fusion</span>
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", marginTop: "2px" }}>
              Cross-Attention Layer
            </div>
          </div>

          {/* Final Output Badge */}
          <div style={{
            background: isFake ? "var(--fake-red-light)" : "var(--real-green-light)",
            border: `1.5px solid ${isFake ? "var(--fake-red-border)" : "var(--real-green-border)"}`,
            borderRadius: "var(--radius-md)",
            padding: "10px 12px",
            textAlign: "center"
          }}>
            <div style={{
              fontSize: "0.85rem",
              fontWeight: "800",
              color: isFake ? "var(--fake-red)" : "var(--real-green)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            }}>
              {isFake ? <AlertTriangle size={15} /> : <CheckCircle2 size={15} />}
              <span>{isFake ? "PREDICTION: FAKE" : "PREDICTION: REAL"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
