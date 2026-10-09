import React, { useState, useEffect } from "react";
import { 
  FileText, 
  Image as ImageIcon, 
  Cpu, 
  CheckCircle2, 
  Loader2, 
  Sparkles, 
  Layers, 
  BrainCircuit,
  Lightbulb
} from "lucide-react";

export default function LoadingPipeline({ hasImage = true }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Text preprocessing",
      desc: "Tokenization, stop-word filtering & syntactic parsing",
      icon: FileText,
      duration: 400
    },
    {
      id: 1,
      title: "Text model analysis",
      desc: "BERT 12-layer bidirectional contextual representation",
      icon: BrainCircuit,
      duration: 500
    },
    {
      id: 2,
      title: "Image model analysis",
      desc: "Vision Transformer 16x16 patch extraction & anomaly scan",
      icon: ImageIcon,
      duration: 500
    },
    {
      id: 3,
      title: "Multimodal feature fusion",
      desc: "Cross-attention joint vector projection & matrix alignment",
      icon: Layers,
      duration: 450
    },
    {
      id: 4,
      title: "Generating explanation",
      desc: "Extracting explainability cues & evidence corroboration",
      icon: Lightbulb,
      duration: 350
    }
  ];

  useEffect(() => {
    const stepTimers = [];
    let accumulatedTime = 0;

    steps.forEach((step, index) => {
      accumulatedTime += step.duration;
      const timer = setTimeout(() => {
        setCurrentStep(index + 1);
      }, accumulatedTime);
      stepTimers.push(timer);
    });

    return () => {
      stepTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div style={{
      maxWidth: "680px",
      margin: "40px auto",
      background: "#ffffff",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--border-light)",
      boxShadow: "var(--shadow-xl)",
      padding: "40px 36px",
      textAlign: "center"
    }} className="animate-fade-in">
      {/* Header animation */}
      <div style={{
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-light) 100%)",
        border: "2px solid rgba(99, 102, 241, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 20px",
        color: "var(--primary)"
      }}>
        <Loader2 size={32} className="animate-spin" />
      </div>

      <h2 style={{ fontSize: "1.75rem", marginBottom: "8px", fontWeight: "800" }}>
        Analyzing News...
      </h2>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", marginBottom: "28px" }}>
        Our multimodal AI is examining the article across text and visual channels.
      </p>

      {/* Modality Chips */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        background: "var(--bg-card-subtle)",
        padding: "8px 18px",
        borderRadius: "var(--radius-full)",
        border: "1px solid var(--border-light)",
        marginBottom: "36px",
        fontSize: "0.85rem",
        fontWeight: "600"
      }}>
        <span style={{ color: "var(--text-muted)" }}>Analyzing 2 modalities:</span>
        <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "var(--primary)" }}>
          <FileText size={14} /> Text
        </span>
        <span style={{ color: "var(--text-light)" }}>&bull;</span>
        <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#0284c7" }}>
          <ImageIcon size={14} /> Image
        </span>
      </div>

      {/* Processing Pipeline Steps */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        textAlign: "left",
        maxWidth: "480px",
        margin: "0 auto"
      }}>
        {steps.map((step, idx) => {
          const isDone = currentStep > idx;
          const isCurrent = currentStep === idx;
          const isPending = currentStep < idx;
          const Icon = step.icon;

          return (
            <div 
              key={step.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "12px 16px",
                borderRadius: "var(--radius-md)",
                background: isCurrent ? "var(--primary-light)" : isDone ? "#ffffff" : "var(--bg-main)",
                border: isCurrent 
                  ? "1.5px solid rgba(79, 70, 229, 0.4)" 
                  : isDone 
                  ? "1px solid var(--border-light)" 
                  : "1px dashed var(--border-light)",
                transition: "all 0.3s ease",
                opacity: isPending ? 0.45 : 1
              }}
            >
              {/* Step Status Icon */}
              <div style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                background: isDone ? "var(--real-green-light)" : isCurrent ? "#ffffff" : "transparent",
                color: isDone ? "var(--real-green)" : isCurrent ? "var(--primary)" : "var(--text-light)"
              }}>
                {isDone ? (
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                ) : isCurrent ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--text-light)" }} />
                )}
              </div>

              {/* Step Info */}
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontWeight: isCurrent || isDone ? "700" : "500", 
                  fontSize: "0.92rem",
                  color: isCurrent ? "var(--primary)" : isDone ? "var(--text-primary)" : "var(--text-muted)"
                }}>
                  {step.title}
                </div>
                <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "2px" }}>
                  {step.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "32px", fontSize: "0.82rem", color: "var(--text-light)" }}>
        Executing BERT-Base + ViT Cross-Attention Tensor Computation &bull; University Research Pipeline
      </div>
    </div>
  );
}
