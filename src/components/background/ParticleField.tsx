"use client";
/* eslint-disable react-hooks/immutability -- Float32Array buffers are mutated in-place every
   frame for R3F performance; this is the standard three.js/R3F animation pattern and is safe
   because it never triggers a React re-render. */

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 420;
const MAX_LINKS = PARTICLE_COUNT * 3;

function makeInitialState() {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const velocities = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 22;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    velocities[i * 3] = (Math.random() - 0.5) * 0.006;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.006;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
  }
  return { positions, velocities };
}

function Field() {
  const pointsRef = useRef<THREE.Points>(null);
  const [{ positions, velocities }] = useState(makeInitialState);
  const [lineGeometry] = useState(() => new THREE.BufferGeometry());
  const [linePositions] = useState(() => new Float32Array(MAX_LINKS * 6));

  useFrame(() => {
    const maxLinks = MAX_LINKS;

    const posAttr = pointsRef.current?.geometry.attributes.position as THREE.BufferAttribute | undefined;
    if (!posAttr) return;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];

      if (Math.abs(arr[i * 3]) > 11) velocities[i * 3] *= -1;
      if (Math.abs(arr[i * 3 + 1]) > 6) velocities[i * 3 + 1] *= -1;
      if (Math.abs(arr[i * 3 + 2]) > 4) velocities[i * 3 + 2] *= -1;
    }
    posAttr.needsUpdate = true;

    let linkCount = 0;
    for (let i = 0; i < PARTICLE_COUNT && linkCount < maxLinks; i++) {
      let neighbors = 0;
      for (let j = i + 1; j < PARTICLE_COUNT && neighbors < 2 && linkCount < maxLinks; j++) {
        const dx = arr[i * 3] - arr[j * 3];
        const dy = arr[i * 3 + 1] - arr[j * 3 + 1];
        const dz = arr[i * 3 + 2] - arr[j * 3 + 2];
        const dist = dx * dx + dy * dy + dz * dz;
        if (dist < 3.2) {
          linePositions[linkCount * 6] = arr[i * 3];
          linePositions[linkCount * 6 + 1] = arr[i * 3 + 1];
          linePositions[linkCount * 6 + 2] = arr[i * 3 + 2];
          linePositions[linkCount * 6 + 3] = arr[j * 3];
          linePositions[linkCount * 6 + 4] = arr[j * 3 + 1];
          linePositions[linkCount * 6 + 5] = arr[j * 3 + 2];
          linkCount++;
          neighbors++;
        }
      }
    }
    for (let k = linkCount * 6; k < linePositions.length; k++) linePositions[k] = 0;
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#00d9b5" size={0.045} transparent opacity={0.85} sizeAttenuation />
      </points>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.18} />
      </lineSegments>
    </group>
  );
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <Field />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
    </div>
  );
}
