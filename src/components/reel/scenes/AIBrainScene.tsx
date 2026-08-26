"use client";

import { motion } from "framer-motion";
import { aiInputs } from "@/data/reel";

const radius = 38;

export function AIBrainScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-12 text-3xl md:text-5xl font-semibold text-gradient-teal text-center"
      >
        The AI Decision Brain
      </motion.h2>

      <div className="relative w-[70vmin] h-[70vmin]">
        {aiInputs.map((label, i) => {
          const angle = (i / aiInputs.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <div key={label} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="glass rounded-full px-4 py-2 text-xs md:text-sm -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
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
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.12 }}
                />
              </motion.svg>
            </div>
          );
        })}

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full glass-strong flex items-center justify-center"
          style={{ width: "36%", height: "36%" }}
          animate={{ boxShadow: ["0 0 40px rgba(23,184,206,0.4)", "0 0 90px rgba(43,123,255,0.7)", "0 0 40px rgba(23,184,206,0.4)"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-2/3 h-2/3 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(23,184,206,0.5), transparent 70%)" }}
            animate={{ scale: [1, 1.15, 1], rotate: 360 }}
            transition={{ scale: { duration: 2, repeat: Infinity }, rotate: { duration: 14, repeat: Infinity, ease: "linear" } }}
          />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="mt-6 text-white/50 text-base md:text-xl tracking-wide"
      >
        Millions of signals. One real-time decision.
      </motion.p>
    </div>
  );
}
