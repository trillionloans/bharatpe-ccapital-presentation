"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";

const TICKER =
  "Channel Partnerships  ·  Co-lending  ·  SME Lending  ·  Merchant Ecosystem  ·  Consumer Finance  ·  AI Underwriting  ·  Instant Disbursal  ·  RBI Regulated NBFC  ·  Real-Time Risk  ·  Digital-First  ·  ";

const pillars = [
  {
    label: "Channel Partnerships",
    sub: "B2B credit distribution",
    accent: "#17b8ce",
  },
  {
    label: "Co-lending",
    sub: "Bank & NBFC origination",
    accent: "#2b7bff",
  },
  {
    label: "Merchant Ecosystem",
    sub: "End-to-end merchant finance",
    accent: "#ef6a5a",
  },
  {
    label: "Consumer Finance",
    sub: "Personalised loan journeys",
    accent: "#9b7bff",
  },
];

export function OpeningScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center overflow-hidden">

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,184,206,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(23,184,206,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 60% at 50% 52%, rgba(43,123,255,0.11) 0%, rgba(23,184,206,0.07) 45%, transparent 72%)",
        }}
      />

      {/* Scrolling ticker strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 right-0 overflow-hidden py-2.5 z-10"
        style={{
          background: "rgba(23,184,206,0.05)",
          borderBottom: "1px solid rgba(23,184,206,0.12)",
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          <span className="text-[10px] tracking-[0.28em] uppercase text-white/35 pr-0">
            {TICKER}{TICKER}
          </span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex flex-col items-center px-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[10px] md:text-xs tracking-[0.38em] uppercase text-white/30 mb-4"
        >
          An RBI Registered NBFC
        </motion.p>

        {/* Hero — word stagger */}
        <div className="mb-1 leading-[0.9]">
          <motion.span
            initial={{ opacity: 0, y: 32, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(1.6rem,4vw,4.2rem)] font-black tracking-tight text-white/55 uppercase"
          >
            The Intelligent
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 38, filter: "blur(16px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(3.6rem,9.5vw,9.5rem)] font-black tracking-tight leading-none uppercase"
            style={{
              background: "linear-gradient(95deg, #17b8ce 0%, #2b7bff 55%, #5b9dff 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Lending Engine
          </motion.span>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-[10px] md:text-sm tracking-[0.28em] uppercase text-white/30 mt-3 mb-1"
        >
          Seamless&nbsp;·&nbsp;Scalable&nbsp;·&nbsp;Digital-First
        </motion.p>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-px mb-5 mt-4"
          style={{
            background: "linear-gradient(90deg, transparent, #17b8ce, transparent)",
            transformOrigin: "center",
          }}
        />

        {/* Logo — clear gap above (mt handled by divider) and below (mb-6) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 drop-shadow-[0_0_55px_rgba(23,184,206,0.5)]"
        >
          <BrandLogo size="xl" priority />
        </motion.div>

        {/* Strategy pillars — 2×2 grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.28 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-xl px-4 py-3 flex flex-col items-start min-w-[140px]"
              style={{ borderLeft: `2px solid ${p.accent}` }}
            >
              <span className="text-xs md:text-sm font-semibold text-white/90 tracking-tight leading-tight">{p.label}</span>
              <span className="text-[9px] md:text-[10px] text-white/38 tracking-wide mt-1">{p.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RBI badge — bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 2.0 }}
        className="absolute bottom-24 right-8 flex items-center gap-2 glass rounded-full px-4 py-2"
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#17b8ce", boxShadow: "0 0 7px 2px rgba(23,184,206,0.75)" }}
        />
        <span className="text-[10px] text-white/50 tracking-widest uppercase">RBI Registered NBFC</span>
      </motion.div>
    </div>
  );
}
