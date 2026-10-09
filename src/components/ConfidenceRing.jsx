import React, { useEffect, useState } from "react";

export default function ConfidenceRing({ 
  percentage = 87.4, 
  prediction = "FAKE", 
  size = 180, 
  strokeWidth = 14,
  label = "Confidence Score"
}) {
  const [animatedPct, setAnimatedPct] = useState(0);

  useEffect(() => {
    // Smooth progress animation on mount
    const timer = setTimeout(() => {
      setAnimatedPct(percentage);
    }, 150);
    return () => clearTimeout(timer);
  }, [percentage]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedPct / 100) * circumference;

  const isFake = prediction === "FAKE";
  const strokeColor = isFake ? "#dc2626" : "#059669";
  const trackColor = isFake ? "rgba(220, 38, 38, 0.12)" : "rgba(5, 150, 105, 0.12)";
  const glowColor = isFake ? "rgba(220, 38, 38, 0.25)" : "rgba(5, 150, 105, 0.25)";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", width: size, height: size, filter: `drop-shadow(0 6px 14px ${glowColor})` }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
          {/* Background Track Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={trackColor}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Animated Indicator Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            style={{
              transition: "stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          />
        </svg>

        {/* Center Content */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "8px"
          }}
        >
          <span 
            style={{ 
              fontFamily: "var(--font-heading)", 
              fontSize: size > 140 ? "2.3rem" : "1.6rem", 
              fontWeight: "800",
              color: strokeColor,
              lineHeight: 1
            }}
          >
            {animatedPct.toFixed(1)}%
          </span>
          <span 
            style={{ 
              fontSize: size > 140 ? "0.78rem" : "0.7rem", 
              fontWeight: "600",
              color: "var(--text-muted)",
              marginTop: "4px",
              textTransform: "uppercase",
              letterSpacing: "0.04em"
            }}
          >
            Confidence
          </span>
        </div>
      </div>
      {label && (
        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: "500", marginTop: "10px" }}>
          {label}
        </span>
      )}
    </div>
  );
}
