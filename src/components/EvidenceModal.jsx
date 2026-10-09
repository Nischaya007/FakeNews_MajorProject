import React from "react";
import { X, ExternalLink, ShieldCheck, CheckCircle, Database } from "lucide-react";

export default function EvidenceModal({ evidence, onClose }) {
  if (!evidence) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(15, 23, 42, 0.5)",
      backdropFilter: "blur(4px)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }} onClick={onClose}>
      <div 
        style={{
          background: "#ffffff",
          borderRadius: "var(--radius-xl)",
          maxWidth: "540px",
          width: "100%",
          padding: "28px",
          boxShadow: "var(--shadow-xl)",
          border: "1px solid var(--border-light)",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-muted)"
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
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
            <Database size={18} />
          </div>
          <div>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", fontWeight: "700", color: "var(--primary)", letterSpacing: "0.05em" }}>
              Evidence Source
            </span>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>{evidence.source}</h3>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h4 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "8px", fontWeight: "600" }}>
            {evidence.title}
          </h4>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
            {evidence.description}
          </p>
        </div>

        <div style={{
          background: "var(--bg-card-subtle)",
          padding: "14px 16px",
          borderRadius: "var(--radius-md)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px"
        }}>
          <div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600" }}>CORROBORATION RELEVANCE</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
              {evidence.relevance}% Match
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "var(--real-green)", fontWeight: "600" }}>
            <CheckCircle size={16} /> Verified Entity
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          {evidence.url && (
            <a 
              href={evidence.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <span>Visit Official Source</span>
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
