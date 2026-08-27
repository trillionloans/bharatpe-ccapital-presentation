"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { partnerLogos, productTypes } from "@/data/reel";

const CARD_WIDTH = 210;
const CARD_GAP = 18;
const PRODUCT_TRACK = (CARD_WIDTH + CARD_GAP) * productTypes.length;

const LOGO_WIDTH = 140;
const LOGO_GAP = 40;
const PARTNER_TRACK = (LOGO_WIDTH + LOGO_GAP) * partnerLogos.length;

const partnershipModels = [
  {
    id: "channel",
    tag: "B2B Distribution",
    title: "Channel Partnerships",
    sub: "Distribute credit through your existing merchant, fintech & platform channels with embedded lending APIs",
    accent: "#17b8ce",
    bullet: ["Co-branded lending", "White-label APIs", "Plug & play integration"],
  },
  {
    id: "colending",
    tag: "Institutional Credit",
    title: "Co-lending Partnerships",
    sub: "Co-originate loans with scheduled banks & NBFCs under the RBI co-lending framework at scale",
    accent: "#2b7bff",
    bullet: ["RBI co-lending guidelines", "Shared risk model", "Balance sheet efficiency"],
  },
];

function MarqueeFade({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#060a10] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#060a10] to-transparent" />
      {children}
    </div>
  );
}

export function ProductsScene() {
  const loopedProducts = useMemo(() => [...productTypes, ...productTypes], []);
  const loopedPartners = useMemo(() => [...partnerLogos, ...partnerLogos], []);

  return (
    <div className="absolute inset-0 flex flex-col items-center px-8 overflow-hidden pt-5">

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="drop-shadow-[0_0_40px_rgba(23,184,206,0.45)] mb-3 self-start"
      >
        <BrandLogo size="md" priority />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18 }}
        className="text-center mb-4"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gradient-teal tracking-tight">Our Product Universe</h2>
        <p className="mt-1.5 text-xs md:text-sm text-white/40">One intelligent platform. Every lending journey your business needs.</p>
      </motion.div>

      {/* ── Partnership models ── */}
      <div className="flex gap-4 w-full max-w-[900px] mb-4">
        {partnershipModels.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: i === 0 ? -24 : 24, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.32 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 glass-strong rounded-2xl px-5 py-4 flex flex-col"
            style={{ borderLeft: `3px solid ${p.accent}` }}
          >
            {/* Tag pill */}
            <span
              className="self-start text-[9px] md:text-[10px] tracking-[0.18em] uppercase font-semibold rounded-full px-3 py-1 mb-3"
              style={{ background: `${p.accent}20`, color: p.accent }}
            >
              {p.tag}
            </span>

            <h3 className="text-sm md:text-xl font-bold text-white leading-tight mb-1.5">{p.title}</h3>
            <p className="text-[10px] md:text-xs text-white/42 leading-relaxed mb-3">{p.sub}</p>

            {/* Bullet points */}
            <div className="flex flex-col gap-1 mt-auto">
              {p.bullet.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: p.accent }} />
                  <span className="text-[9px] md:text-[11px] text-white/55 tracking-wide">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Divider ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex items-center gap-3 w-full max-w-[900px] mb-3"
      >
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
        <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/30 shrink-0">Loan Products</span>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
      </motion.div>

      {/* ── Loan product carousel ── */}
      <div className="relative w-full max-w-[1300px] mb-4">
        <MarqueeFade>
          <motion.div
            className="flex"
            style={{ gap: CARD_GAP, width: PRODUCT_TRACK * 2 }}
            animate={{ x: [0, -PRODUCT_TRACK] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {loopedProducts.map((product, i) => (
              <motion.article
                key={`${product.id}-${i}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 + (i % productTypes.length) * 0.08 }}
                className="shrink-0 glass rounded-2xl px-4 py-4 flex flex-col items-center text-center gap-2"
                style={{ width: CARD_WIDTH }}
              >
                <motion.div
                  className="h-[64px] w-[64px] rounded-xl bg-white/95 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(23,184,206,0)",
                      "0 0 20px rgba(23,184,206,0.5)",
                      "0 0 0px rgba(23,184,206,0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: (i % productTypes.length) * 0.3 }}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={64}
                    height={64}
                    className="h-[52px] w-[52px] object-contain"
                  />
                </motion.div>
                <h3 className="text-xs md:text-sm font-semibold text-white leading-tight">{product.title}</h3>
                <p className="text-[9px] md:text-[10px] text-white/42 leading-relaxed">{product.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </MarqueeFade>
      </div>

      {/* ── Partner logos ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="w-full max-w-4xl px-4 mt-auto mb-4"
      >
        <p className="text-center text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-teal/70 mb-3">Our Partners</p>
        <div className="relative rounded-2xl py-3">
          <motion.div
            className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(ellipse 90% 120% at 50% 50%, rgba(43,123,255,0.28), rgba(23,184,206,0.18) 45%, transparent 72%)",
              boxShadow: "0 0 50px 15px rgba(43,123,255,0.14)",
            }}
          />
          <MarqueeFade>
            <motion.div
              className="flex py-2"
              style={{ gap: LOGO_GAP, width: PARTNER_TRACK * 2 }}
              animate={{ x: [-PARTNER_TRACK, 0] }}
              transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            >
              {loopedPartners.map((partner, i) => (
                <div
                  key={`${partner.id}-${i}`}
                  className="shrink-0 w-[140px] rounded-xl px-5 py-3 flex items-center justify-center bg-white shadow-[0_0_22px_rgba(43,123,255,0.48)] ring-1 ring-white/80"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={110}
                    height={36}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </MarqueeFade>
        </div>
      </motion.div>
    </div>
  );
}
