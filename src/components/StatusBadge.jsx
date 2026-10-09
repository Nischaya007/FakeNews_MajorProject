import React from "react";
import { CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";

export default function StatusBadge({ prediction, size = "md" }) {
  const isFake = prediction === "FAKE";
  const isReal = prediction === "REAL";

  const sizeStyles = {
    sm: { padding: "4px 10px", fontSize: "0.75rem", iconSize: 13 },
    md: { padding: "6px 14px", fontSize: "0.85rem", iconSize: 16 },
    lg: { padding: "10px 22px", fontSize: "1.1rem", iconSize: 22, fontWeight: 700 }
  };

  const currentSize = sizeStyles[size] || sizeStyles.md;

  if (isFake) {
    return (
      <span 
        className="badge badge-fake"
        style={{ 
          padding: currentSize.padding, 
          fontSize: currentSize.fontSize,
          fontWeight: currentSize.fontWeight || 600,
          gap: "8px"
        }}
      >
        <AlertTriangle size={currentSize.iconSize} strokeWidth={2.4} />
        <span>LIKELY FAKE</span>
      </span>
    );
  }

  if (isReal) {
    return (
      <span 
        className="badge badge-real"
        style={{ 
          padding: currentSize.padding, 
          fontSize: currentSize.fontSize,
          fontWeight: currentSize.fontWeight || 600,
          gap: "8px"
        }}
      >
        <CheckCircle2 size={currentSize.iconSize} strokeWidth={2.4} />
        <span>LIKELY REAL</span>
      </span>
    );
  }

  return (
    <span className="badge badge-neutral" style={{ padding: currentSize.padding, fontSize: currentSize.fontSize }}>
      <HelpCircle size={currentSize.iconSize} />
      <span>{prediction || "UNVERIFIED"}</span>
    </span>
  );
}
