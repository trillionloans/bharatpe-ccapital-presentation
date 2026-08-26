"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ExperienceHeader } from "@/components/ui/ExperienceHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface SliderDef {
  id: string;
  label: string;
  min: number;
  max: number;
  default: number;
  unit?: string;
}

const sliders: SliderDef[] = [
  { id: "revenue", label: "Monthly Revenue (₹L)", min: 1, max: 50, default: 12 },
  { id: "repayment", label: "Repayment History", min: 0, max: 100, default: 70, unit: "%" },
  { id: "vintage", label: "Business Vintage (yrs)", min: 0, max: 15, default: 3 },
  { id: "volume", label: "Transaction Volume (₹L/mo)", min: 1, max: 80, default: 20 },
  { id: "repeat", label: "Repeat Customers", min: 0, max: 100, default: 55, unit: "%" },
  { id: "gst", label: "GST Compliance", min: 0, max: 100, default: 80, unit: "%" },
];

export function RiskEngine() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(sliders.map((s) => [s.id, s.default]))
  );

  const score = useMemo(() => {
    const w = {
      revenue: values.revenue / 50,
      repayment: values.repayment / 100,
      vintage: values.vintage / 15,
      volume: values.volume / 80,
      repeat: values.repeat / 100,
      gst: values.gst / 100,
    };
    const raw =
      w.revenue * 0.18 + w.repayment * 0.28 + w.vintage * 0.12 + w.volume * 0.18 + w.repeat * 0.12 + w.gst * 0.12;
    return Math.round(raw * 100);
  }, [values]);

  const approval = Math.min(98, Math.round(20 + score * 0.8));
  const loanAmount = Math.round((values.revenue * 3 + values.volume * 1.5) * (score / 100));
  const interest = (18 - score * 0.08).toFixed(1);

  const riskGaugeColor = score > 70 ? "#00d9b5" : score > 45 ? "#fbbf24" : "#f97316";

  return (
    <div className="relative h-full w-full flex items-center justify-center px-10 pt-16">
      <ExperienceHeader title="Interactive Risk Engine" subtitle="Move the signals. Watch AI think in real time." />

      <div className="grid grid-cols-[1.1fr_0.9fr] gap-10 w-full max-w-[1500px] mt-20">
        <div className="glass rounded-3xl p-8 grid grid-cols-2 gap-6">
          {sliders.map((s) => (
            <div key={s.id}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/60">{s.label}</span>
                <span className="text-[#17b8ce] font-medium">
                  {values[s.id]}
                  {s.unit ?? ""}
                </span>
              </div>
              <input
                type="range"
                min={s.min}
                max={s.max}
                value={values[s.id]}
                onChange={(e) => setValues((v) => ({ ...v, [s.id]: Number(e.target.value) }))}
                className="w-full accent-[#17b8ce] h-2 rounded-full bg-white/10 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="glass-strong rounded-3xl p-8 flex flex-col items-center justify-center gap-6">
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke={riskGaugeColor}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 42}
                animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - score / 100) }}
                transition={{ duration: 0.4 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <AnimatedCounter value={score} duration={0.6} className="text-4xl font-bold" />
              <span className="text-xs text-white/40 mt-1">AI Score</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full text-center">
            <MiniStat label="Approval" value={`${approval}%`} />
            <MiniStat label="Loan Amount" value={`₹${loanAmount}L`} />
            <MiniStat label="Interest" value={`${interest}%`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-3">
      <motion.div key={value} initial={{ opacity: 0.4, y: 4 }} animate={{ opacity: 1, y: 0 }} className="text-lg font-semibold text-[#17b8ce]">
        {value}
      </motion.div>
      <div className="text-[11px] text-white/40 mt-1">{label}</div>
    </div>
  );
}
