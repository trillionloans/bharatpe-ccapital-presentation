"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { architectureLayers } from "@/data/content";
import { ExperienceHeader } from "@/components/ui/ExperienceHeader";

export function PlatformArchitecture() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const dragStart = useRef(0);

  const hoveredLayer = architectureLayers.find((l) => l.id === hovered);

  return (
    <div className="relative h-full w-full flex items-center justify-center px-10 pt-10">
      <ExperienceHeader title="Platform Architecture" subtitle="Drag to rotate. Hover any layer to reveal detail." />

      <motion.div
        className="mt-16 flex flex-col gap-3 w-full max-w-3xl cursor-grab active:cursor-grabbing"
        style={{ perspective: 1400 }}
        onPointerDown={(e) => (dragStart.current = e.clientX)}
        onPointerMove={(e) => {
          if (e.buttons !== 1) return;
          const delta = e.clientX - dragStart.current;
          dragStart.current = e.clientX;
          setRotation((r) => Math.max(-25, Math.min(25, r + delta * 0.15)));
        }}
      >
        <motion.div
          style={{ rotateY: rotation, transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
          className="flex flex-col gap-3"
        >
          {architectureLayers.map((layer, i) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onPointerEnter={() => setHovered(layer.id)}
              onPointerLeave={() => setHovered((h) => (h === layer.id ? null : h))}
              whileHover={{ scale: 1.02, x: 12 }}
              className={`rounded-2xl px-6 py-4 flex items-center justify-between transition-all ${
                hovered === layer.id ? "glass-strong glow-electric" : "glass"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-xs text-[#17b8ce] font-mono w-6">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="font-semibold">{layer.title}</div>
                  <div className="text-xs text-white/40">{layer.description}</div>
                </div>
              </div>
              <motion.span
                className="h-2 w-2 rounded-full bg-[#2b7bff]"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-10 top-1/2 -translate-y-1/2 w-[320px] glass-strong rounded-3xl p-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: hoveredLayer ? 1 : 0, x: hoveredLayer ? 0 : 20 }}
        transition={{ duration: 0.35 }}
      >
        {hoveredLayer && (
          <>
            <div className="text-xs uppercase tracking-widest text-[#17b8ce] mb-2">{hoveredLayer.description}</div>
            <h4 className="text-xl font-semibold mb-3">{hoveredLayer.title}</h4>
            <p className="text-sm text-white/60 leading-relaxed">{hoveredLayer.detail}</p>
          </>
        )}
      </motion.div>
    </div>
  );
}
