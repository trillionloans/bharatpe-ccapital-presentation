"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { innovationCards } from "@/data/content";
import { ExperienceHeader } from "@/components/ui/ExperienceHeader";

const positions = [
  { x: -32, y: -6, r: -4 },
  { x: -18, y: 12, r: 3 },
  { x: -4, y: -14, r: -2 },
  { x: 10, y: 8, r: 5 },
  { x: 24, y: -10, r: -3 },
  { x: -26, y: 26, r: 2 },
  { x: -8, y: 24, r: -5 },
  { x: 12, y: 26, r: 4 },
  { x: 28, y: 14, r: -2 },
];

export function InnovationWall() {
  const [active, setActive] = useState<string | null>(null);
  const activeCard = innovationCards.find((c) => c.id === active);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <ExperienceHeader title="Innovation Wall" subtitle="What's powering BharatPe Capital under the hood." />

      <div className="absolute inset-0 flex items-center justify-center">
        {innovationCards.map((card, i) => {
          const p = positions[i % positions.length];
          return (
            <motion.button
              key={card.id}
              onClick={() => setActive(card.id)}
              className="absolute glass rounded-2xl px-5 py-4 w-[220px] text-left"
              style={{ left: `calc(50% + ${p.x}%)`, top: `calc(50% + ${p.y}%)` }}
              initial={{ opacity: 0, scale: 0.6, rotate: p.r }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: [p.r, p.r + 2, p.r],
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: i * 0.06 },
                scale: { duration: 0.6, delay: i * 0.06 },
                rotate: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 4 + (i % 4), repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.12, rotate: 0, zIndex: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-sm font-semibold mb-1">{card.title}</div>
              <div className="text-xs text-white/40 leading-snug">{card.description}</div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {activeCard && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />
            <motion.div
              className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 glass-strong rounded-3xl p-10 w-[500px]"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-3">{activeCard.title}</h3>
              <p className="text-white/60 leading-relaxed">{activeCard.description}</p>
              <button onClick={() => setActive(null)} className="mt-8 rounded-full px-6 py-2.5 glass text-sm hover:bg-white/10">
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
