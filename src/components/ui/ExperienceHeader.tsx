"use client";

import { motion } from "framer-motion";

export function ExperienceHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-10 left-1/2 -translate-x-1/2 z-30 text-center px-6"
    >
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient-teal">{title}</h2>
      <p className="mt-2 text-white/50 text-base md:text-lg">{subtitle}</p>
    </motion.div>
  );
}
