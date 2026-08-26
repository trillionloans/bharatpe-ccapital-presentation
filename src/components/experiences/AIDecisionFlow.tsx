"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { decisionStages } from "@/data/content";
import { ExperienceHeader } from "@/components/ui/ExperienceHeader";

export function AIDecisionFlow() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = decisionStages.find((s) => s.id === activeId);

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center px-8">
      <ExperienceHeader
        title="How AI Makes Lending Decisions"
        subtitle="From a single transaction to an instant, explainable loan offer."
      />

      <div className="mt-28 flex items-center gap-3 max-w-[95vw] overflow-x-auto pb-6">
        {decisionStages.map((stage, i) => (
          <div key={stage.id} className="flex items-center">
            <motion.button
              onClick={() => setActiveId(stage.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.06, y: -6 }}
              whileTap={{ scale: 0.96 }}
              className={`shrink-0 w-[150px] rounded-2xl p-4 text-left transition-all ${
                activeId === stage.id ? "glass-strong glow-teal" : "glass"
              }`}
            >
              <div className="text-[11px] uppercase tracking-widest text-[#17b8ce] mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-semibold text-sm leading-tight">{stage.title}</div>
              <div className="text-xs text-white/40 mt-1">{stage.subtitle}</div>
            </motion.button>
            {i < decisionStages.length - 1 && (
              <motion.div
                className="w-8 h-px bg-gradient-to-r from-[#17b8ce]/60 to-[#2b7bff]/60 relative overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
              >
                <motion.div
                  className="absolute top-0 left-0 h-full w-3 bg-white"
                  animate={{ x: [-12, 32] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
            />
            <motion.div
              className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 glass-strong rounded-3xl p-10 w-[520px]"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-xs uppercase tracking-widest text-[#17b8ce] mb-2">{active.subtitle}</div>
              <h3 className="text-3xl font-semibold mb-4">{active.title}</h3>
              <p className="text-white/60 leading-relaxed">{active.description}</p>
              <button
                onClick={() => setActiveId(null)}
                className="mt-8 rounded-full px-6 py-2.5 glass text-sm hover:bg-white/10"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
