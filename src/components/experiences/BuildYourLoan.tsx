"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ExperienceHeader } from "@/components/ui/ExperienceHeader";
import { industries, loanPurposes } from "@/data/content";

export function BuildYourLoan() {
  const [industry, setIndustry] = useState(industries[0]);
  const [revenue, setRevenue] = useState(10);
  const [tpv, setTpv] = useState(15);
  const [years, setYears] = useState(2);
  const [purpose, setPurpose] = useState(loanPurposes[0]);

  const result = useMemo(() => {
    const base = revenue * 0.6 + tpv * 0.5 + years * 4;
    const approval = Math.min(97, Math.round(35 + base * 1.1));
    const loan = Math.round((revenue + tpv) * 2.2);
    const emi = Math.round((loan * 100000 * 0.014) / 1000);
    const risk = approval > 80 ? "Low" : approval > 55 ? "Moderate" : "Elevated";
    const reasoning = `Based on ${years} yrs in ${industry}, ₹${revenue}L monthly revenue and ₹${tpv}L TPV, the model projects stable cash flow and ${risk.toLowerCase()} default risk.`;
    return { approval, loan, emi, risk, reasoning };
  }, [industry, revenue, tpv, years]);

  return (
    <div className="relative h-full w-full flex items-center justify-center px-10 pt-10">
      <ExperienceHeader title="Build Your Loan" subtitle="Tell us about your business. AI does the rest." />

      <div className="grid grid-cols-[1fr_1fr] gap-10 w-full max-w-[1500px] mt-20">
        <div className="glass rounded-3xl p-8 flex flex-col gap-6">
          <Field label="Industry">
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <Chip key={ind} label={ind} active={industry === ind} onClick={() => setIndustry(ind)} />
              ))}
            </div>
          </Field>

          <Field label={`Monthly Revenue: ₹${revenue}L`}>
            <input type="range" min={1} max={50} value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} className="w-full accent-[#17b8ce]" />
          </Field>

          <Field label={`Monthly TPV: ₹${tpv}L`}>
            <input type="range" min={1} max={80} value={tpv} onChange={(e) => setTpv(Number(e.target.value))} className="w-full accent-[#17b8ce]" />
          </Field>

          <Field label={`Years in Business: ${years}`}>
            <input type="range" min={0} max={15} value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-[#17b8ce]" />
          </Field>

          <Field label="Loan Purpose">
            <div className="flex flex-wrap gap-2">
              {loanPurposes.map((p) => (
                <Chip key={p} label={p} active={purpose === p} onClick={() => setPurpose(p)} />
              ))}
            </div>
          </Field>
        </div>

        <div className="glass-strong rounded-3xl p-8 flex flex-col gap-6 justify-center">
          <div className="grid grid-cols-2 gap-4">
            <Result label="Approval Probability" value={`${result.approval}%`} big />
            <Result label="Suggested Loan" value={`₹${result.loan}L`} big />
            <Result label="Est. Monthly EMI" value={`₹${result.emi}K`} />
            <Result label="Risk Level" value={result.risk} />
          </div>
          <motion.div
            key={result.reasoning}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-5 text-sm text-white/60 leading-relaxed"
          >
            <span className="text-[#17b8ce] text-xs uppercase tracking-widest block mb-2">AI Reasoning</span>
            {result.reasoning}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm text-white/60 mb-2">{label}</div>
      {children}
    </div>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
        active ? "bg-[#17b8ce] text-black" : "glass text-white/60 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function Result({ label, value, big }: { label: string; value: string; big?: boolean }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="text-xs text-white/40 mb-1">{label}</div>
      <motion.div
        key={value}
        initial={{ opacity: 0.3, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className={`font-semibold text-[#17b8ce] ${big ? "text-2xl" : "text-lg"}`}
      >
        {value}
      </motion.div>
    </div>
  );
}
