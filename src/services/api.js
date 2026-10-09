// API Service for FakeNews AI
// Structured for seamless switchover to Python FastAPI backend (e.g. http://localhost:8000/api/analyze)

import { SAMPLE_PRESETS, INITIAL_HISTORY } from "../data/mockData";

const USE_REAL_BACKEND = false; // Toggle to true when connecting to FastAPI backend
const BACKEND_BASE_URL = "http://localhost:8000/api";

const HISTORY_STORAGE_KEY = "fakenews_ai_history";

// Helper to get stored history or fallback to initial dataset
export function getHistoryFromStorage() {
  try {
    const saved = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Could not read history from localStorage", e);
  }
  return INITIAL_HISTORY;
}

// Helper to save item to history
export function saveToHistory(record) {
  try {
    const current = getHistoryFromStorage();
    const updated = [record, ...current.slice(0, 49)]; // keep latest 50
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.warn("Could not save to localStorage", e);
    return INITIAL_HISTORY;
  }
}

/**
 * Main analyzeNews API function
 * @param {Object} payload - { headline, content, imageFile, imagePreviewUrl, presetId }
 * @returns {Promise<Object>} Analysis Result object
 */
export async function analyzeNews(payload) {
  if (USE_REAL_BACKEND) {
    try {
      const formData = new FormData();
      formData.append("headline", payload.headline);
      formData.append("content", payload.content);
      if (payload.imageFile) {
        formData.append("image", payload.imageFile);
      }

      const response = await fetch(`${BACKEND_BASE_URL}/analyze`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Backend connection failed, falling back to mock API simulation", err);
    }
  }

  // MOCK API SIMULATION
  // Wait simulated delay for realistic AI pipeline feel (2.2 seconds)
  await new Promise((resolve) => setTimeout(resolve, 2200));

  // If matched with a sample preset, return that rich preset
  if (payload.presetId) {
    const matched = SAMPLE_PRESETS.find((p) => p.id === payload.presetId);
    if (matched) {
      const resultObj = {
        id: `analysis-${Date.now()}`,
        date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
        headline: payload.headline || matched.headline,
        content: payload.content || matched.content,
        imageUrl: payload.imagePreviewUrl || matched.imageUrl,
        imageName: payload.imageFile?.name || matched.imageName,
        imageSize: payload.imageFile ? `${(payload.imageFile.size / (1024 * 1024)).toFixed(1)} MB` : matched.imageSize,
        prediction: matched.prediction,
        confidence: matched.confidence,
        text_score: matched.text_score,
        image_score: matched.image_score,
        multimodal_score: matched.multimodal_score,
        explanation: matched.explanation,
        agents: matched.agents,
        evidence: matched.evidence,
        modalities: payload.imageFile || payload.imagePreviewUrl ? "Text + Image" : "Text Only"
      };

      // Auto save to history
      saveToHistory({
        id: resultObj.id,
        date: resultObj.date,
        headline: resultObj.headline,
        prediction: resultObj.prediction,
        confidence: resultObj.confidence,
        text_score: resultObj.text_score,
        image_score: resultObj.image_score,
        multimodal_score: resultObj.multimodal_score,
        modalities: resultObj.modalities,
        source: "User Analysis Submission",
        imagePreview: resultObj.imageUrl
      });

      return resultObj;
    }
  }

  // Dynamic heuristic mock calculation for arbitrary user input
  const text = (payload.headline + " " + payload.content).toLowerCase();
  const sensationalWords = [
    "secret", "shocking", "conspiracy", "scam", "unbelievable", "aliens", "miracle", 
    "cure", "suppressed", "banned", "urgent", "leaked", "confidential", "100%", "guaranteed"
  ];
  const sensationalHits = sensationalWords.filter((w) => text.includes(w)).length;
  
  const isLikelyFake = sensationalHits >= 2 || text.includes("scam") || text.includes("secret") || text.includes("free energy");
  const baseConf = isLikelyFake ? 0.85 + Math.min(sensationalHits * 0.03, 0.12) : 0.90 + Math.random() * 0.06;
  const roundConf = Math.min(0.985, parseFloat(baseConf.toFixed(3)));

  const textScore = isLikelyFake ? parseFloat((0.80 + Math.random() * 0.12).toFixed(2)) : parseFloat((0.91 + Math.random() * 0.07).toFixed(2));
  const imgScore = isLikelyFake ? parseFloat((0.85 + Math.random() * 0.10).toFixed(2)) : parseFloat((0.89 + Math.random() * 0.08).toFixed(2));

  const resultObj = {
    id: `analysis-${Date.now()}`,
    date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    headline: payload.headline,
    content: payload.content,
    imageUrl: payload.imagePreviewUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    imageName: payload.imageFile?.name || "uploaded_article_media.png",
    imageSize: payload.imageFile ? `${(payload.imageFile.size / (1024 * 1024)).toFixed(1)} MB` : "1.5 MB",
    prediction: isLikelyFake ? "FAKE" : "REAL",
    confidence: roundConf,
    text_score: textScore,
    image_score: imgScore,
    multimodal_score: roundConf,
    explanation: {
      summary: isLikelyFake 
        ? "The multimodal model identified multiple signals associated with deceptive or sensationalized reporting."
        : "The multimodal model verified consistency across factual terminology and authentic image attributions.",
      textSignals: isLikelyFake ? [
        "Emotionally charged and unverified sensational phrasing",
        "Lack of formal peer-reviewed or governmental source attribution",
        "Stylometric markers typical of clickbait aggregation"
      ] : [
        "Formal grammatical structure with objective phrasing",
        "Named entity consistency across verified knowledge graphs",
        "Neutral reporting syntax"
      ],
      imageSignals: isLikelyFake ? [
        "Visual context indicates potential misattribution or stock illustration reuse",
        "Image-text cross-modal semantic distance exceeds authenticity threshold"
      ] : [
        "Visual feature map correlates with the stated news topic",
        "No manipulative compression anomalies detected"
      ],
      combinedSignal: isLikelyFake 
        ? "Text and image signals together increased the probability of a FAKE classification through joint feature fusion."
        : "Text and image modalities corroborate each other, yielding a high-confidence REAL classification."
    },
    agents: [
      { id: "text", name: "Text Agent", model: "BERT / RoBERTa", role: "Linguistic & Semantic Analysis", status: "Completed", score: `${Math.round(textScore * 100)}% Confidence` },
      { id: "vision", name: "Image Agent", model: "Hugging Face Vision Model (ViT)", role: "Visual Artifact & Alignment", status: "Completed", score: `${Math.round(imgScore * 100)}% Confidence` },
      { id: "fusion", name: "Explanation Agent", model: "Cross-Attention Fusion", role: "Multimodal Synthesis", status: "Completed", score: `${Math.round(roundConf * 100)}% Final Fusion` }
    ],
    evidence: [
      {
        source: "Global News Verification Corpus",
        title: isLikelyFake ? "Pattern Analysis of Viral Misinformation Claims" : "Institutional Record Verification",
        description: isLikelyFake 
          ? "Cross-referenced against 50,000+ verified fact-checked claims from PolitiFact and Snopes."
          : "Corroborated with standard wire service dispatches and registered publications.",
        relevance: 91,
        url: "https://factcheck.org"
      },
      {
        source: "Cross-Modal Vector Index",
        title: "Semantic Image-Text Alignment Scoring",
        description: "Vector embedding similarity test between RoBERTa CLS token and ViT visual patch tokens.",
        relevance: 86,
        url: "https://huggingface.co"
      }
    ],
    modalities: payload.imageFile || payload.imagePreviewUrl ? "Text + Image" : "Text Only"
  };

  saveToHistory({
    id: resultObj.id,
    date: resultObj.date,
    headline: resultObj.headline,
    prediction: resultObj.prediction,
    confidence: resultObj.confidence,
    text_score: resultObj.text_score,
    image_score: resultObj.image_score,
    multimodal_score: resultObj.multimodal_score,
    modalities: resultObj.modalities,
    source: "User Analysis Submission",
    imagePreview: resultObj.imageUrl
  });

  return resultObj;
}
