"use client";

import { motion } from "framer-motion";
import { Terminal, Home, ArrowLeft, SearchX } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const glitchVariants = {
  idle: {
    x: [0, -2, 3, -1, 0],
    textShadow: [
      "0 0 0 transparent",
      "-2px 0 #7c3aed, 2px 0 #3b82f6",
      "2px 0 #7c3aed, -2px 0 #3b82f6",
      "-1px 0 #7c3aed, 1px 0 #3b82f6",
      "0 0 0 transparent",
    ],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeInOut" as const,
    },
  },
};

const codeLines = [
  { prefix: "~$", text: "cd /requested-page", delay: 0 },
  { prefix: "", text: "bash: cd: /requested-page: No such file or directory", delay: 0.5, isError: true },
  { prefix: "~$", text: "find / -name 'page' -type f", delay: 1.0 },
  { prefix: "", text: "Error 404: Page not found in filesystem", delay: 1.5, isError: true },
  { prefix: "~$", text: "echo 'Redirecting to home...'", delay: 2.0 },
];

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto"
      >
        {/* Glitching 404 */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            variants={glitchVariants}
            animate="idle"
            className="relative inline-block"
          >
            <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-bold leading-none tracking-tight bg-gradient-to-b from-white/90 via-white/40 to-transparent bg-clip-text text-transparent select-none">
              404
            </h1>
          </motion.div>
        </motion.div>

        {/* Icon */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
          >
            <SearchX className="w-8 h-8 text-purple-400" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div variants={itemVariants} className="space-y-3 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white inter-fonts">
            Page Not <span className="text-purple-400">Found</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to another location.
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          variants={itemVariants}
          className="max-w-lg mx-auto mb-10"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-500 text-xs font-mono">terminal — bash</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-5 space-y-2 text-left font-mono text-sm">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + line.delay, duration: 0.4 }}
                  className="flex items-start gap-2"
                >
                  {line.prefix && (
                    <span className="text-green-400 shrink-0">{line.prefix}</span>
                  )}
                  <span
                    className={
                      line.isError
                        ? "text-red-400/80"
                        : "text-gray-300"
                    }
                  >
                    {line.text}
                  </span>
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.0 }}
                className="flex items-center gap-2"
              >
                <span className="text-green-400">~$</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-4 bg-green-400 inline-block"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="group flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-bold rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 gap-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
