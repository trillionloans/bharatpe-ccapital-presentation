"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { indiaMapViewBox, indiaPresenceMarkers } from "@/data/reel";
import { formatStatValue } from "@/components/ui/AnimatedCounter";

const MAP_ASPECT = indiaMapViewBox.width / indiaMapViewBox.height;
const PIN_LOGO = "/brand/bpc-pin-logo.png";
const PIN_SIZE = 28;
const DROP_DELAY_BASE = 0.35;
const DROP_STAGGER = 0.032;
const DROP_HEIGHT = 52;

const stats: Array<{
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  sub: string;
  accent: string;
  decimals?: number;
}> = [
  {
    value: 12000,
    suffix: "+",
    label: "Pincodes",
    sub: "Pan-India reach",
    accent: "#2b7bff",
  },
  {
    value: 1.1,
    suffix: " Million+",
    label: "Customer Acquisition",
    sub: "Borrowers onboarded",
    accent: "#ef6a5a",
    decimals: 1,
  },
];

const borrowerPersonas: Array<
  | { type: "percent"; value: number; headline: string; detail: string; accent: string }
  | { type: "metrics"; metrics: Array<{ label: string; value: string }> }
> = [
  {
    type: "percent",
    value: 82,
    headline: "82%",
    detail: "Borrowers are MSME (Micro Merchants)",
    accent: "#17b8ce",
  },
  {
    type: "percent",
    value: 70,
    headline: "70%",
    detail: "Portfolio is Daily Installment Product (EDI); Avg. daily installment of ₹500",
    accent: "#2b7bff",
  },
  {
    type: "metrics",
    metrics: [
      { label: "Avg. Ticket Size", value: "> ₹1 Lakh" },
      { label: "Avg. Tenor", value: "Up to 12 months" },
    ],
  },
  {
    type: "percent",
    value: 87,
    headline: "87%",
    detail: "Borrowers are outside Metro cities",
    accent: "#ef6a5a",
  },
  {
    type: "percent",
    value: 19,
    headline: "19%",
    detail: "Borrowers are female",
    accent: "#9b7bff",
  },
];

function PersonaDonut({ percent, accent }: { percent: number; accent: string }) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const filled = (percent / 100) * circumference;

  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0 -rotate-90">
      <circle cx="20" cy="20" r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4.5" />
      <circle
        cx="20"
        cy="20"
        r={radius}
        fill="none"
        stroke={accent}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeDasharray={`${filled} ${circumference}`}
      />
    </svg>
  );
}

function PinDropMarker({ x, y, index }: { x: number; y: number; index: number }) {
  const left = (x / indiaMapViewBox.width) * 100;
  const top = (y / indiaMapViewBox.height) * 100;
  const dropDelay = DROP_DELAY_BASE + index * DROP_STAGGER;

  return (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${left}%`, top: `${top}%` }}
    >
      <motion.span
        className="pointer-events-none absolute left-1/2 top-full block h-3 w-3 -translate-x-1/2 translate-y-1 rounded-full border-2 border-[#17b8ce]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 2.6], opacity: [0.7, 0] }}
        transition={{ delay: dropDelay + 0.4, duration: 0.5, ease: "easeOut" }}
      />
      <motion.div
        initial={{ y: -DROP_HEIGHT, opacity: 0, scale: 0.45 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          y: { type: "spring", stiffness: 480, damping: 13, mass: 0.9, delay: dropDelay },
          opacity: { duration: 0.15, delay: dropDelay },
          scale: { type: "spring", stiffness: 480, damping: 13, mass: 0.9, delay: dropDelay },
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PIN_LOGO}
          alt=""
          width={PIN_SIZE}
          height={PIN_SIZE}
          draggable={false}
          className="block h-7 w-7 object-contain drop-shadow-[0_3px_10px_rgba(23,184,206,0.7)]"
        />
      </motion.div>
    </div>
  );
}

export function MerchantEcosystemScene() {
  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center px-6 md:px-10 pt-14 pb-12">
      <div className="flex w-full max-w-[1180px] items-center gap-6 md:gap-10">

      {/* ── Left panel — footprint stats & borrower profile ── */}
      <div className="flex flex-col shrink-0 w-[44%] max-w-[500px]">

        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/32 mb-2"
        >
          National Footprint
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl font-bold text-gradient-teal leading-tight mb-4"
        >
          Pan-India Credit Network
        </motion.h2>

        <div className="grid grid-cols-2 gap-2.5 mb-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-xl px-3 py-3 md:px-4 md:py-4 text-center"
              style={{ borderTop: `2px solid ${s.accent}` }}
            >
              <div
                className="text-xl md:text-3xl font-black leading-none tabular-nums"
                style={{ color: s.accent }}
              >
                {s.prefix ?? ""}
                {formatStatValue(s.value, s.decimals)}
                {s.suffix}
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-white/75 mt-1.5">{s.label}</div>
              <div className="text-[8px] md:text-[9px] text-white/35 mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          <p className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white/28 mb-2.5">
            Our Borrowers Profile
          </p>
          <div className="grid grid-cols-2 gap-2">
            {borrowerPersonas.map((persona, i) => (
              <motion.div
                key={persona.type === "metrics" ? "metrics" : persona.headline}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 1.0 + i * 0.08 }}
                className={`glass rounded-xl px-3 py-2.5 ${
                  persona.type === "metrics" ? "col-span-2 flex items-center justify-around gap-4" : "flex items-center gap-2.5"
                }`}
              >
                {persona.type === "percent" ? (
                  <>
                    <PersonaDonut percent={persona.value} accent={persona.accent} />
                    <div>
                      <div className="text-base md:text-lg font-bold text-white">{persona.headline}</div>
                      <div className="text-[9px] md:text-[10px] text-white/45 leading-snug mt-0.5">{persona.detail}</div>
                    </div>
                  </>
                ) : (
                  persona.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-wide">{metric.label}</div>
                      <div className="text-sm md:text-base font-bold text-[#17b8ce] mt-0.5">{metric.value}</div>
                    </div>
                  ))
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Right panel — India map ── */}
      <div className="flex-1 flex flex-col items-center justify-center relative">

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[400px]"
          style={{ aspectRatio: MAP_ASPECT }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
            animate={{ opacity: [0.45, 0.75, 0.45] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 48%, rgba(43,123,255,0.28), rgba(23,184,206,0.14) 50%, transparent 72%)",
              boxShadow: "0 0 80px 24px rgba(43,123,255,0.12), 0 0 120px 48px rgba(23,184,206,0.08)",
            }}
          />

          <Image
            src="/maps/india.svg"
            alt=""
            fill
            aria-hidden
            className="object-contain opacity-[0.32]"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(72%) sepia(48%) saturate(1200%) hue-rotate(152deg) brightness(95%) contrast(101%)",
            }}
            priority
          />

          {indiaPresenceMarkers.map((marker, i) => (
            <PinDropMarker key={marker.id} x={marker.x} y={marker.y} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="mt-4 flex items-center gap-2 glass rounded-full px-5 py-2"
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#17b8ce", boxShadow: "0 0 6px 2px rgba(23,184,206,0.8)" }}
          />
          <span className="text-[10px] md:text-xs text-white/50 tracking-widest uppercase">
            Active in Every State & UT
          </span>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
