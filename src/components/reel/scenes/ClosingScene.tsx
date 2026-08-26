"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function ClosingScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
      <motion.h2
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(2.2rem,5vw,4.6rem)] font-semibold leading-[1.15] max-w-5xl"
      >
        Powering India&apos;s Next Generation<br />
        of <span className="text-gradient-teal">Intelligent Lending</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 drop-shadow-[0_0_50px_rgba(23,184,206,0.55)]"
      >
        <BrandLogo size="lg" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-4 text-white/50 text-lg md:text-2xl tracking-widest uppercase"
      >
        The Intelligent Lending Engine
      </motion.p>

      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(23,184,206,0.15), transparent 60%)" }}
      />
    </div>
  );
}
