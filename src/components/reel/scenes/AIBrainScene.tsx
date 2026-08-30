"use client";

import { motion } from "framer-motion";
import { aiBrainHighlights, aiCreditInputs } from "@/data/reel";

const radius = 36;

export function AIBrainScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-8 pt-14 pb-10">
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-12 text-center px-6"
      >
        <p className="text-[10px] md:text-xs tracking-[0.32em] uppercase text-white/30 mb-2">
          Credit Policy · Risk · Underwriting
        </p>
        <h2 className="text-2xl md:text-5xl font-semibold text-gradient-teal leading-tight">
          The AI Credit Decision Brain
        </h2>
      </motion.div>

      <div className="relative w-[min(72vmin,920px)] h-[min(52vmin,520px)] mt-6">
        {aiCreditInputs.map((label, i) => {
          const angle = (i / aiCreditInputs.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <div key={label} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-full px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-medium text-white/85 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap border border-[#17b8ce]/20"
              >
                {label}
              </motion.div>
              <motion.svg
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{ left: "50%", top: "50%", width: "1px", height: "1px", overflow: "visible" }}
              >
                <motion.line
                  x1={0}
                  y1={0}
                  x2={(50 - x) * 6}
                  y2={(50 - y) * 6}
                  stroke="#17b8ce"
                  strokeWidth={1}
                  strokeOpacity={0.35}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                />
              </motion.svg>
            </div>
          );
        })}

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full glass-strong flex flex-col items-center justify-center text-center px-4"
          style={{ width: "34%", height: "34%", minWidth: 140, minHeight: 140 }}
          animate={{
            boxShadow: [
              "0 0 40px rgba(23,184,206,0.4)",
              "0 0 90px rgba(43,123,255,0.7)",
              "0 0 40px rgba(23,184,206,0.4)",
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-3 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(23,184,206,0.45), transparent 70%)" }}
            animate={{ scale: [1, 1.12, 1], rotate: 360 }}
            transition={{
              scale: { duration: 2, repeat: Infinity },
              rotate: { duration: 14, repeat: Infinity, ease: "linear" },
            }}
          />
          <div className="relative z-10">
            <div className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-[#17b8ce] mb-1">
              Real-Time Risk
            </div>
            <div className="text-sm md:text-lg font-bold text-white leading-tight">Credit Decision</div>
            <div className="text-[9px] md:text-[10px] text-white/45 mt-1">Policy-aligned · Explainable</div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-5xl mt-2">
        {aiBrainHighlights.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-2xl px-4 py-3 md:px-5 md:py-4 text-center md:text-left"
            style={{ borderTop: "2px solid rgba(23,184,206,0.45)" }}
          >
            <div className="text-xs md:text-sm font-semibold text-[#17b8ce]">{item.title}</div>
            <div className="text-[10px] md:text-xs text-white/50 leading-relaxed mt-1">{item.detail}</div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="mt-4 text-white/45 text-xs md:text-base tracking-wide text-center max-w-3xl"
      >
        Proprietary scorecards · portfolio monitoring · EWS alerts — governed by credit policy at every step.
      </motion.p>
    </div>
  );
}
