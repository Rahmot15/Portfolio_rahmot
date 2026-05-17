"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiJavascript,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";
import { Sparkles, FileText, ArrowRight, Mail, MessageSquare } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const TEXTS = [
  "Full Stack Developer",
  "Next.js Developer",
  "Frontend Engineer",
  "Backend Developer",
];

const floatingVariants: Variants = {
  float: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  float2: {
    y: [0, -30, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  float3: {
    y: [0, 15, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
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

const photoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen pt-16 sm:pt-20 lg:pt-0 relative overflow-hidden flex items-center"
    >


      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-16"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-screen lg:min-h-[80vh]"
        >
          {/* Left Side - Text Content */}
          <motion.div className="space-y-4 md:space-y-6">
            <motion.div variants={itemVariants} className="space-y-2 md:space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
                  Available for Hire
                </span>
              </motion.div>

              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none">
                <span className="block inter-fonts">MD. Rahmatullah</span>
                <div className="flex items-center gap-3 mt-2">
                  <div className="h-1 w-8 bg-gradient-to-r from-blue-400 to-purple-400" />
                  <span className="bg-linear-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold">
                    <Typewriter
                      words={TEXTS}
                      loop={0}
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                      cursor
                      cursorStyle="_"
                    />
                  </span>
                </div>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-200 font-thin text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Passionate Full Stack Developer skilled in building secure, scalable, and user-friendly web applications with modern technologies and clean architecture.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 sm:gap-2 md:gap-3">
              {[
                { icon: FaGithub, href: "https://github.com/Rahmot15", label: "GitHub", color: "hover:text-white" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/mdrahmatullah-dev", label: "LinkedIn", color: "hover:text-blue-400" },
                { icon: MessageSquare, href: "#contact", label: "Chat", color: "hover:text-emerald-400" }
              ].map((social, index) => (
                <div key={index} className="w-fit h-fit">
                  <Magnetic>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : "_self"}
                      className="flex items-center justify-center p-3 sm:p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl sm:rounded-2xl transition-all duration-300 backdrop-blur-md group relative"
                    >
                      <social.icon className={`w-5 h-5 text-gray-400 ${social.color} transition-colors`} />
                      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest whitespace-nowrap">
                        {social.label}
                      </span>
                    </a>
                  </Magnetic>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row flex-wrap items-center gap-2 sm:gap-2 md:gap-3"
            >
              <Magnetic>
                <a
                  href="#contact"
                  className="group relative flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-black text-sm sm:text-base font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Let&apos;s Talk
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="https://drive.google.com/uc?export=download&id=1J8NOe9EVd49TbFaTbL5nDgFJtOz-NtWE"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Get Resume
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Animated Orbiting Icons */}
          <div className="relative w-96 h-96 sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] lg:w-[480px] lg:h-[480px] flex items-center justify-center mx-auto lg:mx-0 lg:ml-auto">
            {/* Central Profile Photo */}
            <motion.div
              variants={photoVariants}
              className="relative z-20 w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden"
            >
              <div className="w-full h-full rounded-full bg-[#030014] p-1.5 overflow-hidden">
                <div className="w-full h-full rounded-full bg-linear-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <Image
                    src="/rahmatullah_dev.png"
                    alt="MD. Rahmatullah"
                    width={300}
                    height={300}
                    priority
                    quality={85}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Orbit Rings */}
            <div className="absolute inset-0 border border-white/5 rounded-full" />
            <div className="absolute inset-12 border border-white/5 rounded-full" />

            {/* Orbiting Icons */}
            {[
              { Icon: SiNextdotjs, color: "text-white", ring: "inset-0", angle: 0 },
              { Icon: TbBrandTypescript, color: "text-[#3178C6]", ring: "inset-0", angle: 45 },
              { Icon: SiTailwindcss, color: "text-[#06B6D4]", ring: "inset-0", angle: 90 },
              { Icon: SiJavascript, color: "text-[#F7DF1E]", ring: "inset-0", angle: 135 },
              { Icon: SiNodedotjs, color: "text-[#339933]", ring: "inset-0", angle: 180 },
              { Icon: SiExpress, color: "text-white", ring: "inset-0", angle: 225 },
              { Icon: BiLogoPostgresql, color: "text-[#4169E1]", ring: "inset-0", angle: 270 },
              { Icon: SiDocker, color: "text-[#2496ED]", ring: "inset-0", angle: 315 },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ rotate: tech.angle }}
                animate={{ rotate: tech.angle + 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`absolute ${tech.ring} pointer-events-none`}
              >
                <motion.div
                  initial={{ rotate: -tech.angle }}
                  animate={{ rotate: -(tech.angle + 360) }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-2 pointer-events-auto"
                >
                  <div className="rotate-45 p-2 md:p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:scale-110 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <tech.Icon className={`-rotate-45 w-4 h-4 md:w-5 md:h-5 ${tech.color}`} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 z-20"
      >
        <motion.div className="flex flex-col items-center space-y-2">
          <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-medium">Scroll</span>
          <motion.div className="w-px h-12 bg-linear-to-b from-blue-500/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
