"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { featureCards } from "@/data/reel";

const positions = [
  { x: -34, y: -14 },
  { x: -14, y: 12 },
  { x: 6, y: -20 },
  { x: 26, y: 6 },
  { x: -28, y: 24 },
  { x: -4, y: 28 },
  { x: 16, y: 24 },
  { x: 34, y: -6 },
];

export function FeatureCardsScene() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ perspective: 1600 }}>
      <motion.h2
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-12 left-1/2 -translate-x-1/2 text-3xl md:text-5xl font-semibold text-gradient-teal text-center"
      >
        Technology Edge
      </motion.h2>

      <div className="absolute inset-0 flex items-center justify-center">
        {featureCards.map((card, i) => {
          const p = positions[i];
          return (
            <motion.div
              key={card.id}
              className="absolute glass-strong rounded-2xl px-5 py-4 w-[210px] flex items-center gap-3"
              style={{ left: `calc(50% + ${p.x}%)`, top: `calc(50% + ${p.y}%)` }}
              initial={{ opacity: 0, scale: 0.5, rotateY: -40 }}
              animate={{
                opacity: 1,
                scale: [0.9, 1.08, 0.98],
                rotateY: [-14, 14, -14],
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: i * 0.18 },
                scale: { duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 6 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <div className="shrink-0 rounded-full bg-white/95 p-1.5">
                <Image src={card.icon} alt="" width={28} height={28} className="h-6 w-6 object-contain" />
              </div>
              <span className="text-sm font-medium leading-tight">{card.title}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
