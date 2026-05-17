"use client";

import React from "react";
import { motion } from "framer-motion";

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030014]">
      {/* 1. Base Core Background (Solid Dark) */}
      <div className="absolute inset-0 z-0 bg-[#030014]" />

      {/* 2. Animated Mesh Gradient / Nebula Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[120px] opacity-50"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[120px] opacity-40"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] opacity-30"
        />
      </div>

      {/* 3. Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 4. Subtle Grid Layer */}
      <div className="absolute inset-0 z-0 bg-grid-white/[0.015] bg-[size:60px_60px] pointer-events-none" />

      {/* 5. Existing Floating & Corner Elements (Synthesized) */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ ...floatingAnimation, y: [0, -30, 0] }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
      />

      {/* Corner Glows */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
      />

      {/* Page Content */}
      <motion.div className="relative z-10 w-full">{children}</motion.div>
    </section>
  );
}
