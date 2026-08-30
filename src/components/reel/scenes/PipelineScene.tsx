"use client";

import { motion } from "framer-motion";
import { BpcSiteIcon, pipelineStageIcons } from "@/components/ui/BpcSiteIcon";
import { lendingEnginePillars, pipelineStages } from "@/data/reel";

const stageMeta: Record<string, { short: string }> = {
  merchant: { short: "Merchant" },
  kyc: { short: "Digital KYC" },
  risk: { short: "AI Risk" },
  decision: { short: "Decision" },
  offer: { short: "Offer" },
  agreement: { short: "Agreement" },
  disbursal: { short: "Disbursal" },
};

function MaterialIcon({ name, className = "", color }: { name: string; className?: string; color?: string }) {
  return (
    <span
      className={`material-symbols-outlined leading-none ${className}`}
      style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", color }}
      aria-hidden
    >
      {name}
    </span>
  );
}

function StatRow({ accent, label, value }: { accent: string; label: string; value: string }) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg px-2 py-1.5"
      style={{ background: `${accent}10`, border: `1px solid ${accent}28` }}
    >
      <div
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
        style={{ background: `${accent}22` }}
      >
        <MaterialIcon name="check_circle" className="text-[14px]" color={accent} />
      </div>
      <div className="min-w-0">
        <div className="text-[7px] md:text-[8px] uppercase tracking-wider font-semibold" style={{ color: accent }}>
          {label}
        </div>
        <div className="text-[8px] md:text-[9px] text-white/75 leading-snug font-medium">{value}</div>
      </div>
    </div>
  );
}

export function PipelineScene() {
  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center px-4 md:px-7 pt-14 pb-8">
      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col gap-2.5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="shrink-0 text-center"
        >
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#17b8ce]/80">Flow · Platform · Technology</p>
          <h2 className="text-base md:text-2xl font-bold text-gradient-teal">BharatPe Capital Lending Engine</h2>
        </motion.div>

        {/* Horizontal lending flow — full width, icon-led */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="shrink-0 glass-strong rounded-xl px-2 py-2 md:px-3 md:py-2.5"
        >
          <div className="flex items-center justify-between gap-0.5 md:gap-1 overflow-x-auto">
            {pipelineStages.map((stage, i) => {
              const meta = stageMeta[stage.id];
              return (
                <div key={stage.id} className="flex items-center shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 + i * 0.06 }}
                    className="flex flex-col items-center w-[72px] md:w-[88px]"
                  >
                    <BpcSiteIcon src={pipelineStageIcons[stage.id]} size="md" />
                    <span className="mt-1 text-[7px] md:text-[8px] font-mono text-[#17b8ce]/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[8px] md:text-[9px] font-semibold text-white/85 text-center leading-tight px-0.5">
                      {meta.short}
                    </span>
                  </motion.div>
                  {i < pipelineStages.length - 1 && (
                    <div className="flex items-center px-0.5 md:px-1 pb-4">
                      <motion.div
                        className="h-px w-3 md:w-5 relative overflow-hidden"
                        style={{ background: "linear-gradient(90deg, #17b8ce88, #2b7bff88)" }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                      >
                        <motion.div
                          className="absolute inset-y-0 w-2 bg-white"
                          animate={{ x: [-6, 14] }}
                          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12, ease: "linear" }}
                        />
                      </motion.div>
                      <svg viewBox="0 0 8 8" className="h-2 w-2 text-[#2b7bff]" fill="currentColor">
                        <path d="M2 1l4 3-4 3V1z" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 4-column slide layout — equal content blocks, no empty stretch */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-2.5 items-start content-start">
          {lendingEnginePillars.map((pillar, i) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.07 }}
              className="glass-strong flex flex-col gap-2 rounded-xl p-2.5 md:p-3"
              style={{ borderTop: `3px solid ${pillar.accent}` }}
            >
              {/* Icon + title block */}
              <div className="flex flex-col items-center text-center gap-1.5 pb-1.5 border-b border-white/10">
                <BpcSiteIcon src={pillar.icon} size="lg" />
                <h3 className="text-[9px] md:text-[11px] font-bold leading-snug" style={{ color: pillar.accent }}>
                  {pillar.title}
                </h3>
              </div>

              {/* Bullet points with check icons */}
              <ul className="space-y-1">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-1.5 text-[8px] md:text-[9px] text-white/55 leading-snug">
                    <svg
                      viewBox="0 0 12 12"
                      className="mt-0.5 h-3 w-3 shrink-0"
                      fill="none"
                      stroke={pillar.accent}
                      strokeWidth="1.4"
                    >
                      <circle cx="6" cy="6" r="5" opacity="0.35" />
                      <path d="M4 6l1.5 1.5L8 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Stats — icon rows, stacked directly below bullets */}
              <div className="flex flex-col gap-1">
                {pillar.stats.map((stat) => (
                  <StatRow key={stat.label} accent={pillar.accent} label={stat.label} value={stat.value} />
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="shrink-0 text-center text-[8px] md:text-[9px] text-white/40 leading-snug px-2"
        >
          Equipped with the capability, infrastructure & mindset to partner & compete in the fintech & lending ecosystem
        </motion.p>
      </div>
    </div>
  );
}
