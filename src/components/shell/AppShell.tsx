"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";
import { useIdleReset } from "@/hooks/useIdleReset";
import { useFullscreen } from "@/hooks/useFullscreen";
import { ParticleField } from "@/components/background/ParticleField";
import { RippleLayer } from "@/components/ui/RippleLayer";
import { ExperienceDock } from "@/components/nav/ExperienceDock";
import { Home } from "@/components/experiences/Home";
import { MerchantUniverse } from "@/components/experiences/MerchantUniverse";
import { AIDecisionFlow } from "@/components/experiences/AIDecisionFlow";
import { RiskEngine } from "@/components/experiences/RiskEngine";
import { PlatformArchitecture } from "@/components/experiences/PlatformArchitecture";
import { ProductShowcase } from "@/components/experiences/ProductShowcase";
import { BuildYourLoan } from "@/components/experiences/BuildYourLoan";
import { Metrics } from "@/components/experiences/Metrics";
import { InnovationWall } from "@/components/experiences/InnovationWall";

const registry = {
  home: Home,
  "merchant-universe": MerchantUniverse,
  "decision-flow": AIDecisionFlow,
  "risk-engine": RiskEngine,
  architecture: PlatformArchitecture,
  showcase: ProductShowcase,
  "build-loan": BuildYourLoan,
  metrics: Metrics,
  "innovation-wall": InnovationWall,
};

export function AppShell() {
  useIdleReset();
  const { enter } = useFullscreen();
  const active = useAppStore((s) => s.active);
  const ActiveComponent = registry[active];

  return (
    <div id="app-root" onPointerDown={enter}>
      <ParticleField />
      <RippleLayer />

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>

      <ExperienceDock />
    </div>
  );
}
