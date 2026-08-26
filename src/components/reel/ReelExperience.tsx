"use client";

import type { ComponentType } from "react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReelClock } from "@/hooks/useReelClock";
import { useFullscreen } from "@/hooks/useFullscreen";
import { ParticleField } from "@/components/background/ParticleField";
import { OpeningScene } from "@/components/reel/scenes/OpeningScene";
import { ProductsScene } from "@/components/reel/scenes/ProductsScene";
import { MerchantEcosystemScene } from "@/components/reel/scenes/MerchantEcosystemScene";
import { AIBrainScene } from "@/components/reel/scenes/AIBrainScene";
import { PipelineScene } from "@/components/reel/scenes/PipelineScene";
import { FeatureCardsScene } from "@/components/reel/scenes/FeatureCardsScene";
import { ClosingScene } from "@/components/reel/scenes/ClosingScene";
import { reelScenes } from "@/data/reel";

const registry: Record<string, ComponentType> = {
  opening: OpeningScene,
  products: ProductsScene,
  ecosystem: MerchantEcosystemScene,
  brain: AIBrainScene,
  pipeline: PipelineScene,
  features: FeatureCardsScene,
  closing: ClosingScene,
};

export function ReelExperience() {
  const { sceneId, sceneIndex, elapsed, totalDuration } = useReelClock();
  const { enter } = useFullscreen();
  const SceneComponent = registry[sceneId];
  const loopProgress = (elapsed / totalDuration) * 100;

  useEffect(() => {
    enter();
  }, [enter]);

  return (
    <div id="app-root" className="select-none" onPointerDown={enter}>
      <ParticleField />

      <AnimatePresence mode="wait">
        <motion.div
          key={sceneId}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 pointer-events-none"
        >
          <SceneComponent />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 inset-x-0 z-30 pointer-events-none">
        <div className="h-0.5 bg-white/10">
          <div
            className="h-full bg-teal transition-none"
            style={{ width: `${loopProgress}%` }}
          />
        </div>
        <div className="flex justify-center gap-2 py-4">
          {reelScenes.map((s, i) => (
            <span
              key={s.id}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === sceneIndex ? 28 : 10,
                background: i === sceneIndex ? "#17b8ce" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
