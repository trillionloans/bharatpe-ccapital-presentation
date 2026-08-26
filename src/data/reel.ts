export interface ReelScene {
  id: string;
  duration: number;
}

export const reelScenes: ReelScene[] = [
  { id: "opening", duration: 5 },
  { id: "products", duration: 8 },
  { id: "ecosystem", duration: 12 },
  { id: "brain", duration: 8 },
  { id: "pipeline", duration: 10 },
  { id: "features", duration: 8 },
  { id: "closing", duration: 7 },
];

export interface ProductType {
  id: string;
  title: string;
  description: string;
  image: string;
}

/** Product portfolio — sourced from tl-bp-design-alignment/types-of-loans-spec.md */
export const productTypes: ProductType[] = [
  {
    id: "sme",
    title: "SME Loan",
    description: "Boost your business growth with collateral-free SME loans",
    image: "/products/loan-sme.png",
  },
  {
    id: "personal",
    title: "Personal Loan",
    description: "Get 'on tap' finance as per your need and convenience",
    image: "/products/loan-personal.png",
  },
  {
    id: "consumer",
    title: "Consumer Loan",
    description: "The partner of choice to finance your purchases",
    image: "/products/loan-consumer.png",
  },
  {
    id: "vehicle",
    title: "Vehicle Loan",
    description: "Let your happiness go the extra mile with the vehicle of your choice",
    image: "/products/loan-vehicle.png",
  },
  {
    id: "term",
    title: "Business Term Loan",
    description: "Easy, flexible term loans tailored to your financial needs",
    image: "/products/loan-term.png",
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

export const aiInputs = ["UPI", "Payments", "GST", "Banking", "Bureau", "KYC", "AML", "Behaviour"];

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

export interface FeatureCard {
  id: string;
  title: string;
  icon: string;
}

export const featureCards: FeatureCard[] = [
  { id: "digital", title: "100% Digital Journey", icon: "/brand/icon-seamless.png" },
  { id: "underwriting", title: "AI Powered Underwriting", icon: "/brand/icon-secure.png" },
  { id: "risk", title: "Real-Time Risk Assessment", icon: "/brand/icon-fast-flexible.png" },
  { id: "apis", title: "Developer APIs", icon: "/brand/icon-hasslefree.png" },
  { id: "instant", title: "Instant Loan Processing", icon: "/brand/icon-fast-flexible.png" },
  { id: "scalable", title: "Scalable Platform", icon: "/brand/icon-seamless.png" },
  { id: "compliance", title: "Compliance by Design", icon: "/brand/icon-secure.png" },
  { id: "fraud", title: "Fraud Detection", icon: "/brand/icon-hasslefree.png" },
];

