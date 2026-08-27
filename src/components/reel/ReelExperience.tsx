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

const sceneLabels: Record<string, string> = {
  opening: "Opening",
  products: "Products",
  ecosystem: "Pan-India Presence",
  brain: "AI Brain",
  pipeline: "Lending Pipeline",
  features: "Technology Edge",
  closing: "Closing",
};

export function ReelExperience() {
  const { sceneId, sceneIndex, elapsed, totalDuration, paused, toggle, jumpToScene } =
    useReelClock();
  const { enter } = useFullscreen();
  const SceneComponent = registry[sceneId];
  const loopProgress = (elapsed / totalDuration) * 100;

  useEffect(() => {
    enter();
  }, [enter]);

  // Keyboard controls: Space = pause/play, ← → = prev/next scene
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        toggle();
      }
      if (e.code === "ArrowRight") {
        e.preventDefault();
        jumpToScene(sceneIndex + 1 < reelScenes.length ? sceneIndex + 1 : 0);
      }
      if (e.code === "ArrowLeft") {
        e.preventDefault();
        jumpToScene(sceneIndex - 1 >= 0 ? sceneIndex - 1 : reelScenes.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle, jumpToScene, sceneIndex]);

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

      {/* ── Dev control bar (top) ── */}
      <div className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-5 py-3 pointer-events-auto"
        style={{ background: "rgba(6,10,16,0.72)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        {/* Scene label */}
        <div className="flex items-center gap-2.5">
          <span className="text-white/30 text-xs tabular-nums">
            {String(sceneIndex + 1).padStart(2, "0")} / {String(reelScenes.length).padStart(2, "0")}
          </span>
          <span className="h-3.5 w-px bg-white/15" />
          <span className="text-white/70 text-xs font-medium tracking-wide">{sceneLabels[sceneId]}</span>
          {paused && (
            <span className="ml-1 rounded-full bg-[#ef6a5a]/20 text-[#ef6a5a] text-[9px] tracking-widest uppercase px-2 py-0.5">
              Paused
            </span>
          )}
        </div>

        {/* Playback controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => jumpToScene(sceneIndex - 1 >= 0 ? sceneIndex - 1 : reelScenes.length - 1)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/8 text-xs transition-colors"
            title="Previous scene (←)"
          >
            ← Prev
          </button>

          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium transition-colors"
            style={{
              background: paused ? "rgba(23,184,206,0.18)" : "rgba(239,106,90,0.18)",
              color: paused ? "#17b8ce" : "#ef6a5a",
            }}
            title="Pause / Resume (Space)"
          >
            {paused ? "▶ Play" : "⏸ Pause"}
          </button>

          <button
            onClick={() => jumpToScene(sceneIndex + 1 < reelScenes.length ? sceneIndex + 1 : 0)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/8 text-xs transition-colors"
            title="Next scene (→)"
          >
            Next →
          </button>
        </div>

        {/* Keyboard hint */}
        <div className="flex items-center gap-1.5 text-white/22 text-[10px] tracking-wide">
          <kbd className="glass rounded px-1.5 py-0.5 text-white/35">Space</kbd>
          <span>pause</span>
          <kbd className="glass rounded px-1.5 py-0.5 text-white/35">← →</kbd>
          <span>navigate</span>
        </div>
      </div>

      {/* ── Scene dot nav + progress bar (bottom) ── */}
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
