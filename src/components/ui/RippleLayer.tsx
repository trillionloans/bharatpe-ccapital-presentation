"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

let rippleId = 0;

export function RippleLayer() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [cursor, setCursor] = useState({ x: -100, y: -100, visible: false });

  const addRipple = useCallback((x: number, y: number) => {
    const id = rippleId++;
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 900);
  }, []);

  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      addRipple(e.clientX, e.clientY);
      setCursor({ x: e.clientX, y: e.clientY, visible: true });
    };
    const onMove = (e: PointerEvent) => {
      setCursor({ x: e.clientX, y: e.clientY, visible: true });
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
    };
  }, [addRipple]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {cursor.visible && (
        <div className="cursor-dot" style={{ left: cursor.x, top: cursor.y }} />
      )}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ opacity: 0.7, scale: 0 }}
            animate={{ opacity: 0, scale: 5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: r.x,
              top: r.y,
              width: 60,
              height: 60,
              marginLeft: -30,
              marginTop: -30,
              borderRadius: "50%",
              border: "2px solid rgba(0,217,181,0.8)",
              boxShadow: "0 0 30px rgba(0,217,181,0.4)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
