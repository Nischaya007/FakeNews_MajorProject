import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Project Summary */}
          <div className="footer-brand">
            <div className="brand-logo" style={{ marginBottom: "12px" }}>
              <div className="brand-icon-wrapper" style={{ width: "32px", height: "32px" }}>
                <ShieldCheck size={18} />
              </div>
              <span style={{ fontSize: "1.15rem" }}>FakeNews <span className="ai-tag">AI</span></span>
            </div>
            <p>
              Multimodal Fake News Detection Using AI/ML. Combining transformer text embeddings (BERT) 
              with computer vision models (ViT) via cross-modal feature fusion.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", color: "var(--primary)", background: "var(--primary-light)", padding: "4px 12px", borderRadius: "var(--radius-full)", fontWeight: "600" }}>
              <GraduationCap size={15} />
              <span>University Major Project &copy; 2026</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Navigation</h5>
            <ul>
              <li><Link to="/">Home & Dashboard</Link></li>
              <li><Link to="/analyze">Analyze News</Link></li>
              <li><Link to="/history">Analysis History</Link></li>
              <li><Link to="/research">Research & Metrics</Link></li>
              <li><Link to="/about">System Architecture</Link></li>
            </ul>
          </div>

          {/* Research & Models */}
          <div className="footer-col">
            <h5>AI Models</h5>
            <ul>
              <li><span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>BERT / RoBERTa (NLP)</span></li>
              <li><span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>Vision Transformer (ViT)</span></li>
              <li><span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>Cross-Modal Attention</span></li>
              <li><span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>Deep Multimodal Classifier</span></li>
              <li><span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>Evidence Retrieval Engine</span></li>
            </ul>
          </div>

          {/* University Info */}
          <div className="footer-col">
            <h5>Project Details</h5>
            <ul>
              <li><span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>Degree Major Project</span></li>
              <li><span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>Dataset: GossipCop & PolitiFact</span></li>
              <li><span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>Accuracy: 89.7% Benchmark</span></li>
              <li><span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>Status: Release V1.0</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            FakeNews AI &mdash; Multimodal Fake News Detection System. Built for academic research and presentation.
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ color: "var(--text-light)" }}>Multimodal Deep Learning Architecture</span>
            <span style={{ color: "var(--text-light)" }}>&bull;</span>
            <span style={{ color: "var(--text-light)" }}>Cross-Modal Fact Verification</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
