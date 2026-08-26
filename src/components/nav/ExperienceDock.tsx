"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ExperienceId, useAppStore } from "@/store/useAppStore";

const items: { id: ExperienceId; label: string }[] = [
  { id: "merchant-universe", label: "Merchant Universe" },
  { id: "decision-flow", label: "AI Decisions" },
  { id: "risk-engine", label: "Risk Engine" },
  { id: "architecture", label: "Architecture" },
  { id: "showcase", label: "AI Products" },
  { id: "build-loan", label: "Build Your Loan" },
  { id: "metrics", label: "Metrics" },
  { id: "innovation-wall", label: "Innovation Wall" },
];

export function ExperienceDock() {
  const active = useAppStore((s) => s.active);
  const setActive = useAppStore((s) => s.setActive);
  const goHome = useAppStore((s) => s.goHome);

  if (active === "home") return null;

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 glass-strong rounded-full px-3 py-2 max-w-[92vw] overflow-x-auto"
    >
      <div className="shrink-0 flex items-center justify-center pl-1">
        <BrandLogo size="sm" ariaHidden />
      </div>
      <button
        onClick={goHome}
        className="shrink-0 rounded-full px-4 py-2.5 text-sm font-medium text-black bg-gradient-to-r from-[#17b8ce] to-[#2b7bff] shadow-lg hover:brightness-110 transition"
      >
        Home
      </button>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
            active === item.id
              ? "bg-white/15 text-white glow-teal"
              : "text-white/60 hover:text-white hover:bg-white/5"
          }`}
        >
          {item.label}
        </button>
      ))}
    </motion.div>
  );
}
