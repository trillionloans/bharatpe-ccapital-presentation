"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useAppStore } from "@/store/useAppStore";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Home() {
  const setActive = useAppStore((s) => s.setActive);

  return (
    <div
      className="relative h-full w-full flex flex-col items-center justify-center text-center px-10 cursor-pointer"
      onClick={() => setActive("merchant-universe")}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 drop-shadow-[0_0_40px_rgba(23,184,206,0.5)]"
      >
        <BrandLogo size="xl" priority />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[1.02] tracking-tight max-w-6xl"
      >
        Powering the Future of{" "}
        <span className="text-gradient-teal">Intelligent Lending</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 flex items-center gap-4 text-white/50 text-lg tracking-wide"
      >
        {["AI", "Payments", "Lending", "Platform"].map((w, i) => (
          <span key={w} className="flex items-center gap-4">
            {i > 0 && <span className="h-1 w-1 rounded-full bg-[#17b8ce]/70" />}
            {w}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16"
      >
        <MagneticButton className="relative rounded-full px-10 py-5 text-lg font-medium glass-strong glow-teal overflow-hidden group">
          <span className="relative z-10">Touch Anywhere to Explore</span>
          <motion.span
            className="absolute inset-0 rounded-full border border-[#17b8ce]/40"
            animate={{ scale: [1, 1.25], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        </MagneticButton>
      </motion.div>

      <div className="absolute bottom-10 text-xs uppercase tracking-[0.25em] text-white/30">
        Google for Founders Festival · Booth Experience
      </div>
    </div>
  );
}
