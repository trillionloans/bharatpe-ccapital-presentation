"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { showcaseCards } from "@/data/content";
import { ExperienceHeader } from "@/components/ui/ExperienceHeader";

export function ProductShowcase() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center px-10 pt-6">
      <ExperienceHeader title="AI Product Showcase" subtitle="The intelligence layer behind every lending decision." />

      <div className="mt-28 grid grid-cols-3 gap-6 max-w-6xl">
        {showcaseCards.map((card, i) => (
          <motion.div
            key={card.id}
            layoutId={card.id}
            onClick={() => setExpanded(card.id)}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass rounded-3xl p-6 w-[320px] h-[190px] cursor-pointer flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-white/95 p-1.5">
                  <Image src={card.icon} alt="" width={28} height={28} className="h-6 w-6 object-contain" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#17b8ce]">{card.tag}</span>
              </div>
              <span className="text-lg font-bold text-[#2b7bff]">{card.stat}</span>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">{card.title}</h4>
              <p className="text-sm text-white/50 leading-snug">{card.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {expanded && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpanded(null)}
            />
            {showcaseCards
              .filter((c) => c.id === expanded)
              .map((card) => (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 glass-strong rounded-3xl p-10 w-[560px]"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-white/95 p-2">
                        <Image src={card.icon} alt="" width={36} height={36} className="h-8 w-8 object-contain" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-[#17b8ce]">{card.tag}</span>
                    </div>
                    <span className="text-3xl font-bold text-[#2b7bff]">{card.stat}</span>
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">{card.title}</h3>
                  <div className="text-sm text-white/40 mb-4">{card.statLabel}</div>
                  <p className="text-white/60 leading-relaxed">{card.detail}</p>
                  <button
                    onClick={() => setExpanded(null)}
                    className="mt-8 rounded-full px-6 py-2.5 glass text-sm hover:bg-white/10"
                  >
                    Close
                  </button>
                </motion.div>
              ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
