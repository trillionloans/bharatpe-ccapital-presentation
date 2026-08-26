"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { merchants, Merchant } from "@/data/merchants";
import { ExperienceHeader } from "@/components/ui/ExperienceHeader";

function riskLabel(score: number) {
  if (score < 40) return { label: "Low Risk", color: "text-[#17b8ce]" };
  if (score < 70) return { label: "Moderate", color: "text-yellow-300" };
  return { label: "Elevated", color: "text-orange-400" };
}

export function MerchantUniverse() {
  const [selected, setSelected] = useState<Merchant | null>(null);
  const nodes = useMemo(() => merchants.slice(0, 160), []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <ExperienceHeader
        title="The Merchant Universe"
        subtitle="Hundreds of merchants. Millions of signals. One living network."
      />

      <div className="absolute inset-0">
        {nodes.map((m, i) => {
          const size = 6 + (m.monthlyTxns % 12);
          return (
            <motion.button
              key={m.id}
              onClick={() => setSelected(m)}
              className="absolute rounded-full"
              style={{
                left: `${4 + m.x * 92}%`,
                top: `${18 + m.y * 72}%`,
                width: size,
                height: size,
                background:
                  m.riskScore < 40 ? "#00d9b5" : m.riskScore < 70 ? "#fbbf24" : "#f97316",
                boxShadow: `0 0 ${size * 1.5}px ${
                  m.riskScore < 40 ? "rgba(0,217,181,0.7)" : "rgba(251,191,36,0.6)"
                }`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: 1,
                y: [0, -6, 0],
              }}
              transition={{
                opacity: { duration: 3 + (i % 5), repeat: Infinity, ease: "easeInOut" },
                y: { duration: 4 + (i % 6), repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.4, delay: (i % 40) * 0.01 },
              }}
              whileHover={{ scale: 2.2 }}
              whileTap={{ scale: 3 }}
            />
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="fixed z-50 left-1/2 top-1/2 glass-strong rounded-3xl p-10 w-[560px] -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#17b8ce] mb-1">
                    {selected.businessType} · {selected.city}
                  </div>
                  <h3 className="text-3xl font-semibold">{selected.name}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full w-9 h-9 flex items-center justify-center glass hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Stat label="Monthly Transactions" value={selected.monthlyTxns.toLocaleString()} />
                <Stat label="Monthly GMV" value={`₹${(selected.monthlyGmv / 100000).toFixed(1)}L`} />
                <Stat
                  label="Risk"
                  value={riskLabel(selected.riskScore).label}
                  valueClass={riskLabel(selected.riskScore).color}
                />
                <Stat
                  label="Growth (QoQ)"
                  value={`${selected.growth > 0 ? "+" : ""}${selected.growth}%`}
                  valueClass={selected.growth >= 0 ? "text-[#17b8ce]" : "text-red-400"}
                />
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-xs text-white/50 mb-2">
                  <span>AI Confidence</span>
                  <span>{selected.aiConfidence}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#17b8ce] to-[#2b7bff]"
                    initial={{ width: 0 }}
                    animate={{ width: `${selected.aiConfidence}%` }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function Stat({ label, value, valueClass = "text-white" }: { label: string; value: string; valueClass?: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="text-xs text-white/50 mb-1">{label}</div>
      <div className={`text-xl font-semibold ${valueClass}`}>{value}</div>
    </div>
  );
}
