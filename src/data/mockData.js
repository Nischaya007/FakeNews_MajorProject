// Mock Data for FakeNews AI Multimodal Verification & Research

export const SAMPLE_PRESETS = [
  {
    id: "sample-fake-1",
    title: "Quantum Free-Energy Device Suppressed by Utility Companies",
    headline: "Secret Quantum Energy Device Generates Free Unlimited Electricity in Backyard Sheds",
    content: `A rogue collective of independent inventors has reportedly unveiled a revolutionary quantum electromagnetic generator capable of powering an entire residential neighborhood without connecting to the electric grid. 

According to viral social media reports and unverified documents circulating on private forums, utility conglomerates and government regulators have launched a coordinated suppression campaign to confiscate the prototypes before mass distribution begins. The inventors claim the device taps zero-point vacuum fluctuations with over 400% net efficiency, rendering fossil fuels and solar grids obsolete overnight.`,
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    imageName: "quantum_device_schematic.jpg",
    imageSize: "1.4 MB",
    prediction: "FAKE",
    confidence: 0.874,
    text_score: 0.82,
    image_score: 0.91,
    multimodal_score: 0.874,
    explanation: {
      summary: "The multimodal model identified strong indicators of sensational fabrication across both textual claims and visual attribution.",
      textSignals: [
        "Emotionally charged & conspiratorial language ('rogue collective', 'suppression campaign', 'conspiracy')",
        "Extraordinary pseudoscientific assertions defying thermodynamic laws ('400% net efficiency')",
        "Absence of verifiable peer-reviewed citations or registered patent filings",
        "Sensational clickbait linguistic patterns designed for viral propagation"
      ],
      imageSignals: [
        "Image context mismatch: Visual shows standard laboratory instrumentation misattributed as an unreleased prototype",
        "Digital compression artifacts & inconsistent illumination suggesting digital manipulation",
        "Metadata analysis reveals visual origins unrelated to the stated inventors"
      ],
      combinedSignal: "Both linguistic cues and visual attribution independently exhibit elevated deception probabilities, which are amplified through cross-modal feature fusion to a high-confidence FAKE classification."
    },
    agents: [
      { id: "text", name: "Text NLP Agent", model: "RoBERTa / BERT-Large", role: "Lexical & Semantic Verification", status: "Completed", score: "82% Fake Signal" },
      { id: "vision", name: "Vision Agent", model: "ViT (Vision Transformer)", role: "Visual Artifact & Context Extraction", status: "Completed", score: "91% Inconsistency" },
      { id: "fusion", name: "Multimodal Fusion Agent", model: "Cross-Attention Fusion Network", role: "Joint Representation & Synthesis", status: "Completed", score: "87.4% Final Confidence" }
    ],
    evidence: [
      {
        source: "IEEE Spectrum Fact Check",
        title: "Perpetual Energy Claims and Physics Verification",
        description: "Standard peer review analysis confirms zero-point energy extraction devices violate the Second Law of Thermodynamics.",
        relevance: 94,
        url: "https://spectrum.ieee.org"
      },
      {
        source: "Reuters Fact Checking Unit",
        title: "Debunking Suppressed Free Energy Conspiracy Memes",
        description: "Cross-referencing global utility filings found no recorded patents or suppression injunctions matching the viral claims.",
        relevance: 91,
        url: "https://www.reuters.com/fact-check"
      },
      {
        source: "Snopes Technology Archive",
        title: "Viral Backyard Quantum Generator Debunked",
        description: "Reverse image search traced the circulating photograph to a 2019 laser plasma research facility in Karlsruhe, Germany.",
        relevance: 88,
        url: "https://www.snopes.com"
      }
    ]
  },
  {
    id: "sample-real-1",
    title: "NASA Webb Telescope Detects Exoplanet Carbon Dioxide",
    headline: "NASA's James Webb Space Telescope Identifies Atmospheric Carbon Dioxide on Exoplanet WASP-39b",
    content: `NASA's James Webb Space Telescope has provided the first clear, definitive evidence for carbon dioxide in the atmosphere of a planet outside the solar system. The exoplanet, WASP-39b, is a hot gas giant orbiting a Sun-like star roughly 700 light-years away from Earth.

The discovery, accepted for publication in the journal Nature, demonstrates Webb's unprecedented capability to measure atmospheric constituents on distant worlds. The transit transmission spectrum revealed a prominent absorption feature between 4.1 and 4.6 microns, matching carbon dioxide spectral models with statistical significance exceeding five sigma.`,
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    imageName: "wasp_39b_transmission_spectrum.jpg",
    imageSize: "2.1 MB",
    prediction: "REAL",
    confidence: 0.942,
    text_score: 0.96, // 96% Real (0.04 fake)
    image_score: 0.92, // 92% Real (0.08 fake)
    multimodal_score: 0.942,
    explanation: {
      summary: "The multimodal system authenticated institutional attribution, precise astronomical metrics, and verified visual spectrum graphs.",
      textSignals: [
        "Rigorous scientific phrasing consistent with peer-reviewed astrophysical literature",
        "Direct citation of verified publication channels (Nature) and quantified confidence ('five sigma')",
        "Neutral, objective tone free from speculative or sensational superlatives",
        "Consistency with NASA press registry records and observational logs"
      ],
      imageSignals: [
        "Visual matches calibrated infrared transmission spectrographs published by Space Telescope Science Institute (STScI)",
        "No manipulative retouching or composite splicing detected",
        "Cross-referenced astronomical chart matches standard data rendering standards"
      ],
      combinedSignal: "Both the textual description and scientific spectrum visual align with 94.2% verified authenticity across peer-reviewed repositories."
    },
    agents: [
      { id: "text", name: "Text NLP Agent", model: "RoBERTa / BERT-Large", role: "Lexical & Semantic Verification", status: "Completed", score: "96% Authenticity" },
      { id: "vision", name: "Vision Agent", model: "ViT (Vision Transformer)", role: "Visual Artifact & Context Extraction", status: "Completed", score: "92% Verified Match" },
      { id: "fusion", name: "Multimodal Fusion Agent", model: "Cross-Attention Fusion Network", role: "Joint Representation & Synthesis", status: "Completed", score: "94.2% Final Confidence" }
    ],
    evidence: [
      {
        source: "Nature Astronomy Repository",
        title: "Identification of Carbon Dioxide in an Exoplanet Atmosphere",
        description: "Official publication detailing JWST NIRSpec observational transmission spectra of WASP-39b.",
        relevance: 98,
        url: "https://www.nature.com"
      },
      {
        source: "NASA Jet Propulsion Laboratory",
        title: "Webb Exoplanet Atmospheric Composition Press Briefing",
        description: "Confirmed findings and instrument calibrations from the Transiting Exoplanet Community ERS team.",
        relevance: 96,
        url: "https://www.nasa.gov/jpl"
      },
      {
        source: "Associated Press Science Desk",
        title: "Webb Telescope Marks Milestone in Planetary Atmospheric Analysis",
        description: "Independent scientific journalism verifying quotes and institutional statements from participating universities.",
        relevance: 92,
        url: "https://apnews.com"
      }
    ]
  },
  {
    id: "sample-fake-2",
    title: "Global Mandatory Digital QR Passports for Grocery Outlets",
    headline: "WHO Secretly Approves Mandatory Global Digital Health Passports for All Grocery Purchases",
    content: `An urgent leaked dispatch from Geneva alleges that international health authorities have secretly ratified a binding treaty requiring all national supermarkets to install biometric QR scanners at store entrances by next month. 

Under the purported mandate, citizens without updated global compliance certificates will have their retail electronic transactions automatically declined at checkout points. The report claims several major retail chains have already begun testing the infrared scanners in secret pilot cities.`,
    imageUrl: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=800&q=80",
    imageName: "biometric_scanner_grocery.jpg",
    imageSize: "1.8 MB",
    prediction: "FAKE",
    confidence: 0.918,
    text_score: 0.89,
    image_score: 0.94,
    multimodal_score: 0.918,
    explanation: {
      summary: "High probability of fabricated health policy and repurposed stock footage.",
      textSignals: [
        "Unsubstantiated conspiratorial terminology ('secretly ratified', 'leaked dispatch')",
        "Fictitious administrative powers attributed to international bodies",
        "Sensational alarmist framing to generate panic and viral distribution"
      ],
      imageSignals: [
        "Image depicts a standard contactless payment terminal in Tokyo from 2021, mislabeled as a health scanner",
        "Exif metadata discrepancies and caption distortion"
      ],
      combinedSignal: "Linguistic panic markers and visual misattribution confirm a high-confidence FAKE classification."
    },
    agents: [
      { id: "text", name: "Text NLP Agent", model: "RoBERTa / BERT-Large", role: "Lexical & Semantic Verification", status: "Completed", score: "89% Fake Signal" },
      { id: "vision", name: "Vision Agent", model: "ViT (Vision Transformer)", role: "Visual Artifact & Context Extraction", status: "Completed", score: "94% Misattribution" },
      { id: "fusion", name: "Multimodal Fusion Agent", model: "Cross-Attention Fusion Network", role: "Joint Representation & Synthesis", status: "Completed", score: "91.8% Final Confidence" }
    ],
    evidence: [
      {
        source: "WHO Official Media Center",
        title: "Clarification on International Health Regulations and Trade",
        description: "Official statement confirming WHO has no legal authority to mandate domestic commercial retail policies.",
        relevance: 97,
        url: "https://www.who.int"
      },
      {
        source: "FactCheck.org",
        title: "False Claims Regarding Supermarket QR Code Mandates",
        description: "Investigation confirms viral claims originated on unregulated conspiracy message boards.",
        relevance: 93,
        url: "https://www.factcheck.org"
      }
    ]
  },
  {
    id: "sample-real-2",
    title: "Federal Reserve Maintains Benchmark Interest Rate",
    headline: "Federal Reserve Holds Key Interest Rates Steady Amid Moderating Core Inflation Indicators",
    content: `The Federal Open Market Committee concluded its scheduled monetary policy meeting today by maintaining the target range for the federal funds rate at 5.25% to 5.50%.

In their official statement, committee members noted that recent economic indicators show economic activity expanding at a solid pace while job gains have remained robust. The central bank reiterated its commitment to returning inflation sustainably to its 2 percent objective before considering any monetary easing measures.`,
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    imageName: "federal_reserve_building.jpg",
    imageSize: "1.2 MB",
    prediction: "REAL",
    confidence: 0.925,
    text_score: 0.94,
    image_score: 0.91,
    multimodal_score: 0.925,
    explanation: {
      summary: "High lexical and visual authenticity matching central banking press releases and financial data.",
      textSignals: [
        "Accurate institutional terminology ('FOMC', 'target range', 'federal funds rate')",
        "Balanced economic analysis without hyperbole",
        "Consistent with official transcripts from the Federal Reserve Board"
      ],
      imageSignals: [
        "Visual accurately depicts Marriner S. Eccles Federal Reserve Board Building in Washington, D.C.",
        "Verified editorial photo attribution"
      ],
      combinedSignal: "Text and image modalities corroborate standard economic reporting with 92.5% authenticity confidence."
    },
    agents: [
      { id: "text", name: "Text NLP Agent", model: "RoBERTa / BERT-Large", role: "Lexical & Semantic Verification", status: "Completed", score: "94% Authenticity" },
      { id: "vision", name: "Vision Agent", model: "ViT (Vision Transformer)", role: "Visual Artifact & Context Extraction", status: "Completed", score: "91% Verified Match" },
      { id: "fusion", name: "Multimodal Fusion Agent", model: "Cross-Attention Fusion Network", role: "Joint Representation & Synthesis", status: "Completed", score: "92.5% Final Confidence" }
    ],
    evidence: [
      {
        source: "Federal Reserve Official Press Release",
        title: "Federal Open Market Committee Monetary Policy Statement",
        description: "Official press release published at 2:00 PM EST detailing rate decisions and economic outlook.",
        relevance: 99,
        url: "https://www.federalreserve.gov"
      },
      {
        source: "Bloomberg Financial Markets",
        title: "Fed Keeps Benchmark Rates Unchanged in Unanimous Vote",
        description: "Financial journalism coverage analyzing bond market reactions and press conference statements.",
        relevance: 95,
        url: "https://www.bloomberg.com"
      }
    ]
  }
];

export const INITIAL_HISTORY = [
  {
    id: "hist-001",
    date: "02 Sep 2026",
    headline: "National Higher Education Board Announces AI Curriculum Modernization Framework",
    prediction: "REAL",
    confidence: 0.914,
    text_score: 0.93,
    image_score: 0.89,
    multimodal_score: 0.914,
    modalities: "Text + Image",
    source: "Education Bureau Press",
    imagePreview: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "hist-002",
    date: "01 Sep 2026",
    headline: "Celebrity Tech Executive Arrested in $400M Offshore Crypto Mining Pyramid Scheme",
    prediction: "FAKE",
    confidence: 0.948,
    text_score: 0.91,
    image_score: 0.97,
    multimodal_score: 0.948,
    modalities: "Text + Image",
    source: "Viral Social Aggregator",
    imagePreview: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "hist-003",
    date: "31 Aug 2026",
    headline: "Breakthrough Room-Temperature Superconductor Synthesized Using Copper-Substituted Lead Apatite",
    prediction: "FAKE",
    confidence: 0.862,
    text_score: 0.84,
    image_score: 0.88,
    multimodal_score: 0.862,
    modalities: "Text + Image",
    source: "Unverified Pre-print Forum",
    imagePreview: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "hist-004",
    date: "30 Aug 2026",
    headline: "International Renewable Energy Agency Reports Solar Capacity Reached Record 1.6 Terawatts",
    prediction: "REAL",
    confidence: 0.932,
    text_score: 0.95,
    image_score: 0.91,
    multimodal_score: 0.932,
    modalities: "Text + Image",
    source: "IRENA Official Publication",
    imagePreview: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "hist-005",
    date: "28 Aug 2026",
    headline: "Secret Military Drone Leaks Video Claiming Alien Bio-Technology Found in Antarctica",
    prediction: "FAKE",
    confidence: 0.965,
    text_score: 0.95,
    image_score: 0.98,
    multimodal_score: 0.965,
    modalities: "Text + Image",
    source: "Sensational Video Channel",
    imagePreview: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "hist-006",
    date: "27 Aug 2026",
    headline: "World Health Organization Launches Global Initiative Against Antimicrobial Resistance",
    prediction: "REAL",
    confidence: 0.887,
    text_score: 0.89,
    image_score: 0.88,
    multimodal_score: 0.887,
    modalities: "Text + Image",
    source: "UN Global News",
    imagePreview: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80"
  }
];

export const RESEARCH_BENCHMARKS = {
  models: [
    {
      id: "text-only",
      name: "Text Only (BERT / RoBERTa)",
      type: "Unimodal NLP",
      accuracy: 84.2,
      precision: 82.8,
      recall: 85.6,
      f1: 84.1,
      latency: "142 ms",
      description: "Fine-tuned BERT-base model processing headline and full body text with self-attention tokenization."
    },
    {
      id: "image-only",
      name: "Image Only (Vision Transformer / ViT)",
      type: "Unimodal Vision",
      accuracy: 78.6,
      precision: 76.4,
      recall: 80.2,
      f1: 78.2,
      latency: "210 ms",
      description: "Vision Transformer (ViT-B/16) extracting spatial patches, visual artifact patterns, and semantic consistency."
    },
    {
      id: "multimodal",
      name: "Multimodal Model (BERT + ViT Fusion)",
      type: "Cross-Modal Attention",
      accuracy: 89.7,
      precision: 89.1,
      recall: 90.4,
      f1: 89.7,
      latency: "285 ms",
      isBest: true,
      description: "Proposed architecture combining RoBERTa text embeddings with ViT visual embeddings through Cross-Modal Attention Fusion."
    }
  ],
  dataset: {
    totalSamples: "10,000",
    realNews: "5,000",
    fakeNews: "5,000",
    trainSplit: "80% (8,000 items)",
    testSplit: "20% (2,000 items)",
    benchmarkSources: "GossipCop, PolitiFact Multimodal, Weibo Multimodal Dataset",
    crossModalImprovement: "+5.5% over Text-only, +11.1% over Vision-only"
  },
  ablation: [
    { component: "Text Encoder (BERT)", gain: "+12.4% baseline" },
    { component: "Vision Encoder (ViT)", gain: "+8.2% baseline" },
    { component: "Late Concatenation Fusion", gain: "+2.9% accuracy" },
    { component: "Cross-Modal Multihead Attention", gain: "+5.5% accuracy (Optimal)" }
  ]
};
