"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { indiaMapViewBox, indiaPresenceMarkers } from "@/data/reel";

const MAP_ASPECT = indiaMapViewBox.width / indiaMapViewBox.height;
const PIN_LOGO = "/brand/bpc-pin-logo.png";
const PIN_SIZE = 28;
const DROP_DELAY_BASE = 0.35;
const DROP_STAGGER = 0.032;
const DROP_HEIGHT = 52;

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
    <div className="absolute inset-0 overflow-hidden flex flex-col items-center justify-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 text-3xl md:text-5xl font-semibold text-gradient-teal text-center px-6 z-10"
      >
        Pan-India Presence
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-[6.4rem] md:top-28 text-sm md:text-base text-white/45 text-center px-6 z-10"
      >
        BharatPe Capital — present in every state &amp; union territory
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-14 w-[min(80vmin,640px)] shrink-0 overflow-visible"
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
    </div>
  );
}
