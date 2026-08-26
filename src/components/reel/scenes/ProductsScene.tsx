"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { partnerLogos, productTypes } from "@/data/reel";

const CARD_WIDTH = 240;
const CARD_GAP = 24;
const PRODUCT_TRACK = (CARD_WIDTH + CARD_GAP) * productTypes.length;

const LOGO_WIDTH = 140;
const LOGO_GAP = 40;
const PARTNER_TRACK = (LOGO_WIDTH + LOGO_GAP) * partnerLogos.length;

function MarqueeFade({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#060a10] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#060a10] to-transparent" />
      {children}
    </div>
  );
}

export function ProductsScene() {
  const loopedProducts = useMemo(() => [...productTypes, ...productTypes], []);
  const loopedPartners = useMemo(() => [...partnerLogos, ...partnerLogos], []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-8 drop-shadow-[0_0_40px_rgba(23,184,206,0.45)]"
      >
        <BrandLogo size="md" priority />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-10 mt-16"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-gradient-teal tracking-tight">Types of Products</h2>
        <p className="mt-3 text-base md:text-lg text-white/50">One platform. Every lending journey your business needs.</p>
      </motion.div>

      <div className="relative w-full max-w-[1300px]">
        <MarqueeFade>
          <motion.div
            className="flex gap-6"
            style={{ width: PRODUCT_TRACK * 2 }}
            animate={{ x: [0, -PRODUCT_TRACK] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {loopedProducts.map((product, i) => (
              <motion.article
                key={`${product.id}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (i % productTypes.length) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 w-[240px] min-h-[260px] glass-strong rounded-3xl px-5 py-6 flex flex-col items-center text-center gap-3"
              >
                <motion.div
                  className="h-[92px] w-[92px] rounded-2xl bg-white/95 flex items-center justify-center"
                  animate={{ boxShadow: ["0 0 0px rgba(23,184,206,0)", "0 0 26px rgba(23,184,206,0.55)", "0 0 0px rgba(23,184,206,0)"] }}
                  transition={{ duration: 3, repeat: Infinity, delay: (i % productTypes.length) * 0.3, ease: "easeInOut" }}
                >
                  <Image src={product.image} alt={product.title} width={92} height={92} className="h-[76px] w-[76px] object-contain" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white leading-tight">{product.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{product.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </MarqueeFade>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-10 w-full max-w-4xl px-6"
      >
        <p className="text-center text-xs uppercase tracking-[0.3em] text-[#17b8ce]/80 mb-4">Our Partners</p>

        <div className="relative rounded-2xl py-5">
          <motion.div
            className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
            animate={{ opacity: [0.55, 0.85, 0.55] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(ellipse 90% 120% at 50% 50%, rgba(43,123,255,0.35), rgba(23,184,206,0.22) 45%, transparent 72%)",
              boxShadow: "0 0 60px 20px rgba(43,123,255,0.18), 0 0 100px 40px rgba(23,184,206,0.12)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
            style={{
              background: "linear-gradient(180deg, rgba(43,123,255,0.08), rgba(23,184,206,0.06))",
            }}
          />

          <MarqueeFade>
            <motion.div
              className="flex gap-10 py-2"
              style={{ width: PARTNER_TRACK * 2 }}
              animate={{ x: [-PARTNER_TRACK, 0] }}
              transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            >
              {loopedPartners.map((partner, i) => (
                <div
                  key={`${partner.id}-${i}`}
                  className="shrink-0 w-[140px] rounded-xl px-5 py-3 flex items-center justify-center bg-white shadow-[0_0_28px_rgba(43,123,255,0.55),0_0_12px_rgba(23,184,206,0.45)] ring-1 ring-white/80"
                >
                  <Image src={partner.image} alt={partner.name} width={110} height={36} className="h-6 w-auto object-contain" />
                </div>
              ))}
            </motion.div>
          </MarqueeFade>
        </div>
      </motion.div>
    </div>
  );
}
