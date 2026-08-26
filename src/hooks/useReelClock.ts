"use client";

import { useEffect, useState } from "react";
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

export function useReelClock() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let raf: number;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const t = ((now - start) / 1000) % TOTAL_DURATION;
      setElapsed(t);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const { sceneId, sceneIndex, sceneProgress, sceneElapsed } = resolveScene(elapsed);

  return { elapsed, totalDuration: TOTAL_DURATION, sceneId, sceneIndex, sceneProgress, sceneElapsed };
}
