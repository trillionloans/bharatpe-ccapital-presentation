"use client";

import { motion } from "framer-motion";
import { pipelineStages } from "@/data/reel";

export function PipelineScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
      <motion.h2
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-12 text-3xl md:text-5xl font-semibold text-gradient-teal text-center"
      >
        BharatPe Capital&apos;s Lending Engine
      </motion.h2>

      <div className="flex items-center gap-2 md:gap-4 max-w-[95vw] overflow-visible mt-10">
        {pipelineStages.map((stage, i) => (
          <div key={stage.id} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div
                className="glass-strong rounded-2xl px-4 py-5 w-[128px] md:w-[150px] text-center"
                animate={{ boxShadow: ["0 0 0px rgba(23,184,206,0)", "0 0 34px rgba(23,184,206,0.65)", "0 0 0px rgba(23,184,206,0)"] }}
                transition={{ duration: 1.6, delay: i * 0.55 + 0.3, times: [0, 0.4, 1] }}
              >
                <div className="text-[10px] text-[#17b8ce] uppercase tracking-widest mb-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm font-semibold leading-tight">{stage.label}</div>
              </motion.div>
            </motion.div>
            {i < pipelineStages.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: i * 0.55 + 0.5 }}
                className="w-5 md:w-8 h-px bg-gradient-to-r from-[#17b8ce]/70 to-[#2b7bff]/70 relative overflow-hidden origin-left"
              >
                <motion.div
                  className="absolute top-0 left-0 h-full w-3 bg-white"
                  animate={{ x: [-12, 40] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.55 + 0.9, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4.4 }}
        className="mt-12 text-white/50 text-base md:text-xl tracking-wide text-center"
      >
        Every module connected. Every decision instant.
      </motion.p>
    </div>
  );
}
