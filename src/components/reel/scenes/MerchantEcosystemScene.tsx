"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { indiaMapViewBox, indiaPresenceMarkers } from "@/data/reel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

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
}> = [
  {
    value: 36,
    suffix: "",
    label: "States & UTs",
    sub: "Full national coverage",
    accent: "#17b8ce",
  },
  {
    value: 17,
    suffix: "M+",
    label: "Merchant Network",
    sub: "MSME & retail footprint",
    accent: "#2b7bff",
  },
  {
    value: 1700,
    prefix: "₹",
    suffix: "B+",
    label: "Annual TPV",
    sub: "Transaction value processed",
    accent: "#ef6a5a",
  },
];

const segments = [
  { label: "MSMEs & SMEs", color: "#17b8ce" },
  { label: "Merchants", color: "#2b7bff" },
  { label: "Consumers", color: "#ef6a5a" },
  { label: "Supply Chain", color: "#9b7bff" },
];

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
    <div className="absolute inset-0 overflow-hidden flex items-center gap-6 px-8">

      {/* ── Left panel — context & stats ── */}
      <div className="flex flex-col justify-center shrink-0 w-[38%] max-w-[420px]">

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
          className="text-2xl md:text-4xl font-bold text-gradient-teal leading-tight mb-6"
        >
          Pan-India Credit Network
        </motion.h2>

        {/* Animated stats */}
        <div className="flex flex-col gap-3 mb-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.28 + i * 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-xl px-4 py-3 flex items-center gap-4"
              style={{ borderLeft: `2px solid ${s.accent}` }}
            >
              <div className="shrink-0">
                <div
                  className="text-xl md:text-3xl font-black leading-none"
                  style={{
                    background: `linear-gradient(90deg, ${s.accent}, #f5f7fa)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <AnimatedCounter
                    value={s.value}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="text-[10px] md:text-xs font-semibold text-white/65 mt-0.5">{s.label}</div>
              </div>
              <div className="text-[9px] md:text-[10px] text-white/32 leading-snug border-l border-white/10 pl-4">
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Segments served */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white/28 mb-2.5">
            Segments Served
          </p>
          <div className="flex flex-wrap gap-2">
            {segments.map((seg, i) => (
              <motion.span
                key={seg.label}
                initial={{ opacity: 0, scale: 0.78 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.38, delay: 1.05 + i * 0.1 }}
                className="glass rounded-full px-3 py-1 text-[9px] md:text-[11px] font-medium tracking-wide"
                style={{ color: seg.color }}
              >
                {seg.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-5 text-[10px] md:text-xs text-white/28 tracking-wide leading-relaxed"
        >
          Blending banking trust with fintech agility — <br />
          digital-first credit for every Indian business.
        </motion.p>
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

        {/* "Every state active" badge */}
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
  );
}
