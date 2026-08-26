"use client";

import { useEffect, useRef } from "react";
import { useAppStore } from "@/store/useAppStore";

const IDLE_TIMEOUT_MS = 45000;

export function useIdleReset() {
  const goHome = useAppStore((s) => s.goHome);
  const active = useAppStore((s) => s.active);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const reset = () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (useAppStore.getState().active !== "home") {
          goHome();
        }
      }, IDLE_TIMEOUT_MS);
    };

    const events = ["pointerdown", "pointermove", "touchstart", "wheel", "keydown"];
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    reset();

    return () => {
      events.forEach((e) => window.removeEventListener(e, reset));
      if (timer.current) clearTimeout(timer.current);
    };
  }, [goHome, active]);
}
