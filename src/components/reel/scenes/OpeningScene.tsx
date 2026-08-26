"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function OpeningScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 drop-shadow-[0_0_50px_rgba(23,184,206,0.55)]"
      >
        <BrandLogo size="xl" priority />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(2.6rem,6.4vw,6rem)] font-semibold leading-[1.05] tracking-tight uppercase"
      >
        Powering<br />
        <span className="text-gradient-teal">The Future</span><br />
        Of Intelligent Lending
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-8 text-lg md:text-2xl text-white/60 tracking-wide"
      >
        AI Powered NBFC · Built for Scale
      </motion.p>
    </div>
  );
}
