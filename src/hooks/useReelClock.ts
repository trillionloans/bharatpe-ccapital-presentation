"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { reelScenes } from "@/data/reel";

const TOTAL_DURATION = reelScenes.reduce((sum, s) => sum + s.duration, 0);

function resolveScene(elapsed: number) {
  let acc = 0;
  for (let i = 0; i < reelScenes.length; i++) {
    const scene = reelScenes[i];
    if (elapsed < acc + scene.duration) {
      return {
        sceneId: scene.id,
        sceneIndex: i,
        sceneProgress: (elapsed - acc) / scene.duration,
        sceneElapsed: elapsed - acc,
      };
    }
    acc += scene.duration;
  }
  return { sceneId: reelScenes[0].id, sceneIndex: 0, sceneProgress: 0, sceneElapsed: 0 };
}

/** Returns the elapsed offset (seconds) for the start of a given scene index. */
function sceneStartOffset(index: number) {
  let acc = 0;
  for (let i = 0; i < Math.min(index, reelScenes.length); i++) acc += reelScenes[i].duration;
  return acc;
}

export function useReelClock() {
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);

  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  // Delta-time tick so pause/resume is seamless
  useEffect(() => {
    let raf: number;
    let lastTime: number | null = null;

    const tick = (now: number) => {
      if (lastTime !== null && !pausedRef.current) {
        const delta = (now - lastTime) / 1000;
        setElapsed((prev) => (prev + delta) % TOTAL_DURATION);
      }
      lastTime = now;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const toggle = useCallback(() => setPaused((p) => !p), []);

  const jumpToScene = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, reelScenes.length - 1));
    setElapsed(sceneStartOffset(clamped));
  }, []);

  const { sceneId, sceneIndex, sceneProgress, sceneElapsed } = resolveScene(elapsed);

  return {
    elapsed,
    totalDuration: TOTAL_DURATION,
    sceneId,
    sceneIndex,
    sceneProgress,
    sceneElapsed,
    paused,
    toggle,
    jumpToScene,
  };
}
