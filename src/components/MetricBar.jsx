import React from "react";

export default function MetricBar({ 
  label, 
  value, 
  maxValue = 100, 
  color = "var(--primary)", 
  subtext = "", 
  showPercent = true 
}) {
  const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));

  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
        <span style={{ fontSize: "0.88rem", fontWeight: "600", color: "var(--text-primary)" }}>
          {label}
        </span>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
            {showPercent ? `${value.toFixed(1)}%` : value}
          </span>
          {subtext && (
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              {subtext}
            </span>
          )}
        </div>
      </div>
      
      {/* Progress Track */}
      <div style={{
        height: "10px",
        width: "100%",
        backgroundColor: "var(--bg-card-subtle)",
        borderRadius: "var(--radius-full)",
        overflow: "hidden",
        border: "1px solid var(--border-light)"
      }}>
        <div style={{
          height: "100%",
          width: `${percentage}%`,
          backgroundColor: color,
          borderRadius: "var(--radius-full)",
          transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1)"
        }} />
      </div>
    </div>
  );
}
