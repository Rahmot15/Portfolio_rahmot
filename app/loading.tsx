"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const orbitIcons = [
  { size: "w-3 h-3", orbit: "w-24 h-24", color: "bg-blue-400", duration: 3 },
  { size: "w-2.5 h-2.5", orbit: "w-36 h-36", color: "bg-purple-400", duration: 4 },
  { size: "w-2 h-2", orbit: "w-48 h-48", color: "bg-indigo-400", duration: 5 },
];

const loadingTexts = [
  "Compiling modules",
  "Loading assets",
  "Initializing components",
  "Almost ready",
];

export default function Loading() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center gap-8"
      >
        {/* Orbiting loader */}
        <div className="relative w-52 h-52 flex items-center justify-center">
          {/* Center icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="relative z-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
          >
            <Terminal className="w-8 h-8 text-green-400" />
          </motion.div>

          {/* Orbit rings */}
          {orbitIcons.map((orbit, index) => (
            <div key={index} className="absolute inset-0 flex items-center justify-center">
              {/* Ring */}
              <div
                className={`absolute ${orbit.orbit} border border-white/5 rounded-full`}
              />

              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: orbit.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`absolute ${orbit.orbit}`}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${orbit.size} ${orbit.color} rounded-full shadow-lg`}
                  style={{
                    boxShadow: `0 0 15px 5px ${
                      index === 0
                        ? "rgba(96, 165, 250, 0.3)"
                        : index === 1
                        ? "rgba(167, 139, 250, 0.3)"
                        : "rgba(129, 140, 248, 0.3)"
                    }`,
                  }}
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Loading text with typewriter effect */}
        <div className="text-center space-y-3">
          <motion.div
            className="flex items-center gap-2 justify-center"
          >
            <motion.span
              className="text-white text-lg font-medium inter-fonts"
              key="loading-text"
            >
              Loading
            </motion.span>
            <motion.span className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-1.5 h-1.5 bg-purple-400 rounded-full inline-block"
                />
              ))}
            </motion.span>
          </motion.div>

          {/* Terminal-style loading messages */}
          <div className="font-mono text-xs space-y-1">
            {loadingTexts.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: [0, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.8,
                }}
                className="flex items-center gap-2 justify-center"
              >
                <span className="text-green-400/60">▸</span>
                <span className="text-gray-500">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
