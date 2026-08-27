"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";

const chips = [
  "Tech-First NBFC",
  "RBI Compliant by Design",
  "AI-Powered Underwriting",
  "Channel & Co-lending Partnerships",
  "100% Digital Journey",
];

export function ClosingScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center overflow-hidden">

      {/* Subtle grid — same treatment for visual consistency */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(239,106,90,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(239,106,90,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Coral ambient glow — distinct from opening's blue glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 60%, rgba(239,106,90,0.14) 0%, rgba(23,184,206,0.08) 55%, transparent 80%)",
        }}
      />

      {/* Top sweep line — coral */}
      <motion.div
        className="absolute top-0 left-0 h-[2px]"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: "linear-gradient(90deg, transparent, #ef6a5a 40%, #17b8ce 80%, transparent)" }}
      />

      <div className="flex flex-col items-center px-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] md:text-xs tracking-[0.38em] uppercase text-white/28 mb-4"
        >
          BharatPe Capital · An RBI Registered NBFC
        </motion.p>

        {/* Hero */}
        <div className="leading-[0.92] mb-1">
          <motion.span
            initial={{ opacity: 0, y: 32, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.78, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(3rem,8vw,8.5rem)] font-black tracking-tight text-white"
          >
            Where Technology
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 38, filter: "blur(16px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.82, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(3rem,8vw,8.5rem)] font-black tracking-tight"
            style={{
              background: "linear-gradient(92deg, #ef6a5a 0%, #17b8ce 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Meets Accountability.
          </motion.span>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-px mb-5 mt-4"
          style={{
            background: "linear-gradient(90deg, transparent, #ef6a5a, transparent)",
            transformOrigin: "center",
          }}
        />

        {/* Logo — clear gap above (divider + mb-5) and below (mb-7) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mb-7 drop-shadow-[0_0_55px_rgba(239,106,90,0.45)]"
        >
          <BrandLogo size="lg" />
        </motion.div>

        {/* Strategy / milestone chips */}
        <div className="flex flex-wrap justify-center gap-2">
          {chips.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.78, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 1.35 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-full px-4 py-1.5 text-[10px] md:text-xs text-white/60 tracking-wide"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom sweep line — teal */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.3, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: "linear-gradient(90deg, transparent, #17b8ce 40%, #ef6a5a 80%, transparent)" }}
      />
    </div>
  );
}
