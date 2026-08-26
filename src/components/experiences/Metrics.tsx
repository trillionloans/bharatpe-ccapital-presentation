"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/content";
import { ExperienceHeader } from "@/components/ui/ExperienceHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Metrics() {
  return (
    <div className="relative h-full w-full flex items-center justify-center px-10">
      <ExperienceHeader title="BharatPe Capital, in Numbers" subtitle="A platform built for scale, speed, and trust." />

      <div className="grid grid-cols-4 gap-8 mt-10">
        {metrics.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong rounded-3xl p-10 w-[280px] text-center"
          >
            <AnimatedCounter
              value={m.value}
              prefix={m.prefix}
              suffix={m.suffix}
              duration={2.2}
              className="text-5xl font-bold text-gradient-teal"
            />
            <div className="mt-4 text-white/50 text-sm">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
