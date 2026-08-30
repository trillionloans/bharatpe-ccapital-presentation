export interface ReelScene {
  id: string;
  duration: number;
}

export const reelScenes: ReelScene[] = [
  { id: "opening", duration: 5 },
  { id: "products", duration: 8 },
  { id: "ecosystem", duration: 12 },
  { id: "brain", duration: 8 },
  { id: "pipeline", duration: 22 },
  { id: "closing", duration: 7 },
];

export interface ProductType {
  id: string;
  title: string;
  description: string;
  image: string;
}

/** Product portfolio — MSME & Consumer lending suite */
export const productTypes: ProductType[] = [
  {
    id: "working-capital",
    title: "Working Capital Loans",
    description: "Fast, collateral-free liquidity to keep your business moving",
    image: "/products/loan-sme.png",
  },
  {
    id: "merchant-finance",
    title: "Merchant Finance",
    description: "Revenue-linked credit embedded right into your merchant stack",
    image: "/products/loan-sme.png",
  },
  {
    id: "term",
    title: "Business Term Loans",
    description: "Flexible term loans sized to your growth milestones",
    image: "/products/loan-term.png",
  },
  {
    id: "trade-finance",
    title: "Trade & Supply Chain Finance",
    description: "Unlock working capital across your supply chain seamlessly",
    image: "/products/loan-term.png",
  },
  {
    id: "revenue-based",
    title: "Revenue-Based Financing",
    description: "Repay in sync with your revenue — no fixed EMI pressure",
    image: "/products/loan-sme.png",
  },
  {
    id: "personal",
    title: "Personal Loans",
    description: "On-tap personal finance tailored to individual needs",
    image: "/products/loan-personal.png",
  },
  {
    id: "embedded",
    title: "Embedded Finance",
    description: "Credit woven into your platform — invisible yet powerful",
    image: "/products/loan-consumer.png",
  },
  {
    id: "end-use",
    title: "End-Use Defined Credit",
    description: "Purpose-built loans with defined end-use and compliance guardrails",
    image: "/products/loan-consumer.png",
  },
];

export interface PartnerLogo {
  id: string;
  name: string;
  image: string;
}

/** Partner logos — sourced from tl-bp-design-alignment/demo */
export const partnerLogos: PartnerLogo[] = [
  { id: "karmalife", name: "KarmaLife", image: "/partners/KarmaLife_logo.png" },
  { id: "moneyview", name: "moneyview", image: "/partners/moneyview-logo.png" },
  { id: "savein", name: "Savein", image: "/partners/savein_logo.png" },
  { id: "freo", name: "Freo", image: "/partners/Freo-Logo.png" },
];

/** India map asset viewBox — matches public/maps/india.svg */
export const indiaMapViewBox = { width: 612, height: 696 };

export interface PresenceMarker {
  id: string;
  /** X coordinate in indiaMapViewBox space */
  x: number;
  /** Y coordinate in indiaMapViewBox space */
  y: number;
}

/** BharatPe Capital presence — one marker per state/UT (centroids from india.svg paths) */
export const indiaPresenceMarkers: PresenceMarker[] = [
  { id: "an", x: 521, y: 609 },
  { id: "ap", x: 263, y: 500 },
  { id: "ar", x: 550, y: 224 },
  { id: "as", x: 516, y: 271 },
  { id: "br", x: 369, y: 275 },
  { id: "ch", x: 179, y: 160 },
  { id: "ct", x: 296, y: 388 },
  { id: "dn", x: 102, y: 405 },
  { id: "dd", x: 54, y: 391 },
  { id: "dl", x: 186, y: 210 },
  { id: "ga", x: 122, y: 512 },
  { id: "gj", x: 66, y: 355 },
  { id: "hr", x: 164, y: 195 },
  { id: "hp", x: 191, y: 133 },
  { id: "jk", x: 173, y: 61 },
  { id: "jh", x: 366, y: 327 },
  { id: "ka", x: 171, y: 519 },
  { id: "kl", x: 166, y: 615 },
  { id: "ld", x: 99, y: 627 },
  { id: "mp", x: 214, y: 319 },
  { id: "mh", x: 180, y: 435 },
  { id: "mn", x: 537, y: 301 },
  { id: "ml", x: 484, y: 283 },
  { id: "mz", x: 516, y: 337 },
  { id: "nl", x: 546, y: 270 },
  { id: "or", x: 340, y: 405 },
  { id: "py", x: 268, y: 546 },
  { id: "pb", x: 151, y: 152 },
  { id: "rj", x: 119, y: 257 },
  { id: "sk", x: 425, y: 235 },
  { id: "tn", x: 211, y: 609 },
  { id: "tg", x: 237, y: 457 },
  { id: "tr", x: 493, y: 325 },
  { id: "up", x: 265, y: 245 },
  { id: "ut", x: 232, y: 175 },
  { id: "wb", x: 412, y: 310 },
];

/** Credit-policy & risk signal inputs for the AI brain scene */
export const aiCreditInputs = [
  "Bureau & Credit History",
  "Banking Cash Flow",
  "KYC / VKYC",
  "AML & Compliance",
  "Repayment Behaviour",
  "Portfolio EWS",
  "Product Policy Limits",
  "Exposure & Vintage",
];

export const aiBrainHighlights = [
  {
    id: "variables",
    title: "~500 Raw Variables",
    detail: "8 ML underwriting models powering every credit decision",
  },
  {
    id: "repayment",
    title: "Repayment Capacity",
    detail: "EMI · EDI · Bullet — matched to borrower cash-flow profile",
  },
  {
    id: "products",
    title: "Product AI Models",
    detail: "Dedicated underwriting for ML · PL · BL",
  },
];

/** @deprecated use aiCreditInputs */
export const aiInputs = aiCreditInputs;

export interface PipelineStage {
  id: string;
  label: string;
}

export const pipelineStages: PipelineStage[] = [
  { id: "merchant", label: "Merchant" },
  { id: "kyc", label: "Digital KYC" },
  { id: "risk", label: "AI Risk Models" },
  { id: "decision", label: "Real-Time Decision Engine" },
  { id: "offer", label: "Instant Loan Offer" },
  { id: "agreement", label: "Digital Agreement" },
  { id: "disbursal", label: "Instant Disbursal" },
];

export interface LendingEngineStat {
  label: string;
  value: string;
}

export interface LendingEnginePillar {
  id: string;
  title: string;
  accent: string;
  icon: string;
  points: string[];
  stats: LendingEngineStat[];
}

/** Right-to-Win pillars — flow & technology scene */
export const lendingEnginePillars: LendingEnginePillar[] = [
  {
    id: "tech-stack",
    title: "Digital Lending Tech Stack",
    accent: "#17b8ce",
    icon: "/brand/icon-seamless.png",
    points: [
      "LOS · LMS · BRE powering our full product suite",
      "In-house tech wrapper — custom APIs, AI SDLC, faster GTM",
    ],
    stats: [
      { label: "Uptime", value: "99.99% · Availability 99.90%" },
      { label: "API Volume", value: "1.13 mn requests / day" },
      { label: "Throughput", value: "110,000 loans / month" },
    ],
  },
  {
    id: "lean-exec",
    title: "Lean Setup & Rapid Execution",
    accent: "#2b7bff",
    icon: "/brand/icon-fast-flexible.png",
    points: [
      "Scalable processes built for quick execution with AI",
      "Lean, agile org — independent entity geared for speed",
    ],
    stats: [
      { label: "Partners", value: "12 onboarded" },
      { label: "Products", value: "7 credit products enabled" },
      { label: "Team", value: "110 talent strength" },
    ],
  },
  {
    id: "risk-compliance",
    title: "Robust Risk & Compliance",
    accent: "#ef6a5a",
    icon: "/brand/icon-secure.png",
    points: [
      "Proprietary U/W scorecards · real-time portfolio monitoring",
      "Strong ERM, InfoSec & governance — middle-layer compliant",
    ],
    stats: [
      { label: "ML Models", value: "~500 raw variables · 8 ML U/W models" },
      { label: "Certified", value: "ISO 27001 certified" },
      { label: "Regulatory", value: "RBI full-scale inspection" },
    ],
  },
  {
    id: "bp-synergies",
    title: "BharatPe Synergies",
    accent: "#9b7bff",
    icon: "/brand/icon-hasslefree.png",
    points: [
      "Only fintech in payments with its own NBFC",
      "Credit products for BharatPe merchant & consumer white spaces",
    ],
    stats: [
      { label: "Ecosystem", value: "80% BP ecosystem AUM" },
      { label: "Live Products", value: "ML · PL · BL" },
      { label: "Pilots", value: "₹9,000 mn add'l annual disbursal" },
    ],
  },
];

export interface FeatureCard {
  id: string;
  title: string;
  icon: string;
}

export const featureCards: FeatureCard[] = [
  { id: "onboarding", title: "Partner Live in 2–3 Weeks", icon: "/brand/icon-fast-flexible.png" },
  { id: "ai", title: "In-House AI Decisioning", icon: "/brand/icon-secure.png" },
  { id: "cloud", title: "Cloud-Native · 99.99% Uptime", icon: "/brand/icon-seamless.png" },
  { id: "disbursal", title: "Straight-Through Auto Disbursal", icon: "/brand/icon-fast-flexible.png" },
  { id: "vkyc", title: "VKYC · RBI-Approved Onboarding", icon: "/brand/icon-secure.png" },
  { id: "digital", title: "100% Digital Journey", icon: "/brand/icon-seamless.png" },
  { id: "devportal", title: "DIY Developer Portal · Easy LOS", icon: "/brand/icon-hasslefree.png" },
  { id: "support", title: "AI-Assisted Smart Support", icon: "/brand/icon-hasslefree.png" },
];

