export interface DecisionStage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export const decisionStages: DecisionStage[] = [
  {
    id: "merchant",
    title: "Merchant",
    subtitle: "Identity & Business",
    description:
      "Every decision begins with the merchant — their identity, business profile, and history on the BharatPe network.",
    icon: "store",
  },
  {
    id: "payments",
    title: "Payments",
    subtitle: "Transaction Signals",
    description:
      "Millions of daily UPI and QR transactions generate a living picture of real business performance.",
    icon: "activity",
  },
  {
    id: "banking",
    title: "Banking Signals",
    subtitle: "Cash Flow Intelligence",
    description:
      "Bank statement analysis validates income stability, inflow consistency, and financial discipline.",
    icon: "landmark",
  },
  {
    id: "kyc",
    title: "KYC",
    subtitle: "Verified Identity",
    description:
      "Instant identity verification using PAN, Aadhaar and business documents, cross-validated in real time.",
    icon: "id-card",
  },
  {
    id: "aml",
    title: "AML",
    subtitle: "Compliance Screening",
    description:
      "Automated anti-money-laundering screening against global watchlists keeps the network safe.",
    icon: "shield-check",
  },
  {
    id: "behavior",
    title: "Behavior",
    subtitle: "Pattern Intelligence",
    description:
      "AI models study spending, repayment and transaction behavior to detect intent and stability.",
    icon: "brain",
  },
  {
    id: "risk",
    title: "Risk Engine",
    subtitle: "Real-time Scoring",
    description:
      "A proprietary risk engine fuses hundreds of signals into a single dynamic creditworthiness score.",
    icon: "gauge",
  },
  {
    id: "decision",
    title: "Decision Engine",
    subtitle: "Automated Judgement",
    description:
      "Rules and models work together to approve, decline or route applications for review in milliseconds.",
    icon: "cpu",
  },
  {
    id: "offer",
    title: "Loan Offer",
    subtitle: "Instant & Personalised",
    description:
      "A tailored loan offer — amount, tenure and rate — is generated and delivered instantly to the merchant.",
    icon: "sparkles",
  },
];

export interface ArchitectureLayer {
  id: string;
  title: string;
  description: string;
  detail: string;
}

export const architectureLayers: ArchitectureLayer[] = [
  { id: "app", title: "Merchant App", description: "Onboarding & servicing", detail: "The single interface merchants use to apply, track and manage capital — built for speed on any device." },
  { id: "api", title: "API Layer", description: "Unified integration fabric", detail: "20+ partner-ready APIs expose lending capabilities to BharatPe apps and third-party platforms securely." },
  { id: "decision", title: "Decision Engine", description: "Real-time orchestration", detail: "Orchestrates every check — KYC, AML, fraud, risk — into a single millisecond decision pipeline." },
  { id: "kyc", title: "KYC", description: "Identity verification", detail: "Document + biometric verification pipelines validate merchant identity against government registries." },
  { id: "aml", title: "AML", description: "Compliance screening", detail: "Continuous watchlist and sanctions screening keeps the lending network compliant by design." },
  { id: "fraud", title: "Fraud", description: "Anomaly detection", detail: "Graph-based anomaly detection flags collusion rings, synthetic identities and transaction fraud." },
  { id: "partners", title: "Lending Partners", description: "Co-lending network", detail: "A network of NBFC and bank partners fund approved offers, balancing risk and capital efficiently." },
  { id: "disbursement", title: "Disbursement", description: "Instant payout", detail: "Approved capital reaches merchant accounts in minutes through automated payout rails." },
  { id: "collections", title: "Collections", description: "Automated repayments", detail: "Repayments are collected automatically from daily settlements — frictionless for the merchant." },
];

export interface ShowcaseCard {
  id: string;
  title: string;
  tag: string;
  summary: string;
  detail: string;
  stat: string;
  statLabel: string;
  icon: string;
}

export const showcaseCards: ShowcaseCard[] = [
  {
    id: "underwriting",
    title: "AI-Assisted Underwriting",
    tag: "Core AI",
    summary: "Models that understand merchants better than a bank statement ever could.",
    detail:
      "Our underwriting models blend transaction history, seasonality, category benchmarks and behavioral signals to produce a creditworthiness view that updates continuously — not once a year.",
    stat: "98.6%",
    statLabel: "Model precision",
    icon: "/brand/icon-seamless.png",
  },
  {
    id: "devplatform",
    title: "Developer Platform",
    tag: "Platform",
    summary: "Lending infrastructure, exposed as clean, composable APIs.",
    detail:
      "Partners and internal teams ship new lending products in weeks using a sandboxed developer platform with docs, test data and webhooks — no infra required.",
    stat: "20+",
    statLabel: "Live API integrations",
    icon: "/brand/icon-hasslefree.png",
  },
  {
    id: "ecosystem",
    title: "API Ecosystem",
    tag: "Platform",
    summary: "One integration, an entire lending stack.",
    detail:
      "A single onboarding integration unlocks KYC, risk, disbursement and collections — connecting merchants to a full ecosystem of lending partners.",
    stat: "12+",
    statLabel: "Lending partners",
    icon: "/brand/icon-fast-flexible.png",
  },
  {
    id: "automation",
    title: "Automation",
    tag: "Efficiency",
    summary: "Humans design the rules, machines run them at scale.",
    detail:
      "End-to-end workflow automation removes manual touchpoints from application to disbursement, cutting turnaround time from days to minutes.",
    stat: "50%",
    statLabel: "Faster product delivery",
    icon: "/brand/icon-fast-flexible.png",
  },
  {
    id: "fraud",
    title: "Fraud Detection",
    tag: "Trust & Safety",
    summary: "Graph intelligence that spots patterns humans can't.",
    detail:
      "Network-level graph analysis identifies collusion, mule accounts and synthetic identities before capital is ever disbursed.",
    stat: "3.2M+",
    statLabel: "Signals analysed / day",
    icon: "/brand/icon-secure.png",
  },
  {
    id: "realtime",
    title: "Real-time Risk",
    tag: "Core AI",
    summary: "Risk that moves at the speed of business.",
    detail:
      "Risk scores recompute continuously as new transactions land — surfacing early warning signals and fresh opportunities alike.",
    stat: "<200ms",
    statLabel: "Score refresh latency",
    icon: "/brand/icon-secure.png",
  },
];

export interface Metric {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
}

export const metrics: Metric[] = [
  { id: "loans", value: 14600, prefix: "₹", suffix: "Cr+", label: "Business Loans Facilitated" },
  { id: "tpv", value: 1700, prefix: "₹", suffix: "Bn+", label: "TPV in Payments" },
  { id: "merchants", value: 17, suffix: "M+", label: "Merchant Partners" },
  { id: "cities", value: 450, suffix: "+", label: "Cities Across India" },
];

export interface InnovationCard {
  id: string;
  title: string;
  description: string;
}

export const innovationCards: InnovationCard[] = [
  { id: "platform-eng", title: "Platform Engineering", description: "Resilient, scalable infrastructure powering millions of lending decisions." },
  { id: "dev-experience", title: "Developer Experience", description: "SDKs, sandboxes and docs designed for shipping fast, safely." },
  { id: "ai-agents", title: "AI Agents", description: "Autonomous agents that assist underwriting, support and operations." },
  { id: "modernization", title: "Platform Modernization", description: "Migrating legacy lending rails onto a modern, cloud-native core." },
  { id: "apis", title: "APIs", description: "Composable building blocks for the next generation of embedded finance." },
  { id: "digital-lending", title: "Digital Lending", description: "Fully digital, paperless lending journeys from offer to disbursement." },
  { id: "identity", title: "Identity", description: "Verified, reusable digital identity across the merchant lifecycle." },
  { id: "compliance", title: "Compliance", description: "Regulatory-grade compliance automated into every workflow." },
  { id: "fraud-prevention", title: "Fraud Prevention", description: "Proactive, network-wide fraud prevention powered by graph AI." },
];

export const industries = [
  "Retail", "F&B / Restaurant", "Grocery & Kirana", "Pharmacy", "Electronics",
  "Fashion & Apparel", "Services", "Wholesale & Distribution",
];

export const loanPurposes = [
  "Inventory Purchase", "Store Expansion", "Working Capital", "Equipment Upgrade", "Cash Flow Buffer",
];
