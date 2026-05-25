"use client"
import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Server,
  Monitor,
  ArrowLeft,
  Target,
  Code2,
  Lightbulb,
  Rocket,
  Zap,
  Globe,
  GitBranch,
  Lock,
  Layers,
  ChevronRight,
  Shield,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Project } from "@/lib/data"
import { getImageSizes, BLUR_DATA_URL } from "@/lib/image-config"
interface ProjectDetailsClientProps {
  projectData: Project
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
}
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}
const getTechGlowColor = (tech: string) => {
  const t = tech.toLowerCase()
  if (t.includes("react"))
    return "hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/10 hover:shadow-blue-500/5"
  if (t.includes("next"))
    return "hover:border-white/40 hover:text-white hover:bg-white/10 hover:shadow-white/5"
  if (t.includes("node") || t.includes("express"))
    return "hover:border-green-500/40 hover:text-green-400 hover:bg-green-500/10 hover:shadow-green-500/5"
  if (t.includes("postgres"))
    return "hover:border-indigo-500/40 hover:text-indigo-400 hover:bg-indigo-500/10 hover:shadow-indigo-500/5"
  if (t.includes("prisma"))
    return "hover:border-teal-500/40 hover:text-teal-400 hover:bg-teal-500/10 hover:shadow-teal-500/5"
  if (t.includes("auth"))
    return "hover:border-yellow-500/40 hover:text-yellow-400 hover:bg-yellow-500/10 hover:shadow-yellow-500/5"
  if (t.includes("tailwind"))
    return "hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-cyan-500/5"
  if (t.includes("typescript"))
    return "hover:border-sky-500/40 hover:text-sky-400 hover:bg-sky-500/10 hover:shadow-sky-500/5"
  if (t.includes("mongo"))
    return "hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/10 hover:shadow-emerald-500/5"
  return "hover:border-purple-500/40 hover:text-purple-400 hover:bg-purple-500/10 hover:shadow-purple-500/5"
}
export default function ProjectDetailsClient({
  projectData,
}: ProjectDetailsClientProps) {
  const router = useRouter()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const headerScroll = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const parallaxY = useTransform(headerScroll.scrollYProgress, [0, 1], [0, 40])
  if (!projectData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080b14] text-white">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
          <button
            onClick={() => router.back()}
            className="rounded-xl bg-blue-600 px-6 py-3 text-white"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b14] pb-24 text-white">
      {/* ── Ambient background glows ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-5%] h-[60vw] w-[60vw] animate-pulse rounded-full bg-blue-600/5 blur-[130px]"
          style={{ animationDuration: "12s" }}
        />
        <div
          className="absolute right-[-5%] bottom-[5%] h-[50vw] w-[50vw] animate-pulse rounded-full bg-purple-700/5 blur-[120px]"
          style={{ animationDuration: "15s" }}
        />
        <div className="absolute top-[30%] right-[10%] h-[35vw] w-[35vw] rounded-full bg-indigo-600/3 blur-[110px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        {/* ── Breadcrumb / Pills-shaped Back Button ── */}
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => router.back()}
          className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-gray-800/80 bg-gray-900/40 px-4 py-2 text-xs text-gray-400 shadow-md backdrop-blur-md transition-all duration-300 hover:border-gray-700 hover:bg-gray-800/60 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Projects</span>
        </motion.button>
        {/* ══════════════════════════════════════════
            EDITORIAL TITLE HEADER AREA
        ══════════════════════════════════════════ */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-14 border-b border-gray-900/80 pb-10"
        >
          <motion.h1
            variants={fadeUp}
            className="mb-5 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-4xl leading-[1.05] font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {projectData.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="my-4 max-w-4xl border-l-[3px] border-blue-500/50 pl-5 text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            {projectData.briefDescription}
          </motion.p>
        </motion.div>
        {/* ══════════════════════════════════════════
            ASYSMMETRIC MAIN GRID LAYOUT
        ══════════════════════════════════════════ */}
        <div
          ref={heroRef}
          className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_360px]"
        >
          {/* ─────────────────────────────────────────
              MAIN CONTENT COLUMN (LEFT, 70%)
          ───────────────────────────────────────── */}
          <div className="space-y-8">
            {/* Immersive Image Mockup Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{ y: parallaxY }}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/20 p-1.5 shadow-2xl shadow-black/80 backdrop-blur-xs"
            >
              {/* Fake browser bar */}
              <div className="flex items-center justify-between rounded-t-xl border-b border-gray-800/40 bg-gray-950/80 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <div className="w-full max-w-xs truncate rounded-md border border-gray-800/30 bg-gray-900/80 px-4 py-0.5 text-center text-[10px] text-gray-500">
                  {projectData.liveProjectLink === "#"
                    ? "digital-platform / in-development"
                    : projectData.liveProjectLink}
                </div>
                <div className="w-10" /> {/* balancer */}
              </div>
              {/* Browser viewport with screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-xl bg-gray-950">
                <Image
                  src={projectData.image}
                  alt={projectData.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  quality={95}
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/30 via-transparent to-transparent" />
              </div>
            </motion.div>
            {/* Timeline: Challenges Faced */}
            <SectionCard
              icon={<Target className="h-5 w-5 text-rose-400" />}
              iconBg="bg-rose-500/10"
              label="Challenges Faced"
              accent="rose"
            >
              <div className="relative mt-6 ml-3.5 space-y-6 border-l border-gray-800/80 py-2 pl-6">
                {projectData.challengesFaced.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group/item relative"
                  >
                    {/* Glowing Bullet Circle */}
                    <span className="absolute top-1 -left-[35px] flex h-6 w-6 items-center justify-center rounded-full border border-gray-800 bg-[#080b14] text-[10px] font-bold text-rose-400 transition-all duration-300 group-hover/item:border-rose-500/50 group-hover/item:bg-rose-950/20">
                      0{i + 1}
                    </span>
                    <h4 className="mb-1 text-sm font-semibold text-gray-200 transition-colors duration-200 group-hover/item:text-white">
                      Phase {i + 1}
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-400 transition-colors group-hover/item:text-gray-300 sm:text-sm">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </SectionCard>
            {/* Roadmap section: Potential Improvements & Future Plans */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Potential Improvements */}
              <SectionCard
                icon={<Lightbulb className="h-5 w-5 text-amber-400" />}
                iconBg="bg-amber-500/10"
                label="Potential Improvements"
                accent="amber"
              >
                <ul className="mt-5 space-y-3.5">
                  {projectData.potentialImprovements.map((item, i) => (
                    <li key={i} className="group/li flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/80 transition-transform group-hover/li:scale-125" />
                      <span className="text-xs leading-relaxed text-gray-400 transition-colors group-hover/li:text-gray-300 sm:text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
              {/* Future Plans */}
              <SectionCard
                icon={<Rocket className="h-5 w-5 text-emerald-400" />}
                iconBg="bg-emerald-500/10"
                label="Future Plans"
                accent="emerald"
              >
                <ul className="mt-5 space-y-3.5">
                  {projectData.futurePlans.map((item, i) => (
                    <li key={i} className="group/li flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80 transition-transform group-hover/li:scale-125" />
                      <span className="text-xs leading-relaxed text-gray-400 transition-colors group-hover/li:text-gray-300 sm:text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </div>
          </div>
          {/* ─────────────────────────────────────────
              STICKY SIDEBAR AREA (RIGHT, 30%)
          ───────────────────────────────────────── */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* Main Interactive Action Card */}
            <div className="relative rounded-2xl border border-gray-800 bg-gray-950/40 p-6 shadow-xl backdrop-blur-md">
              {/* Subtle top light effect */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

              <h3 className="mb-4 flex items-center gap-1.5 text-xs font-bold tracking-widest text-gray-500 uppercase">
                <Layers className="h-3.5 w-3.5" />
                <span>Project Deployment</span>
              </h3>
              {/* Dynamic Action Buttons */}
              <div className="space-y-2.5">
                {/* Live Site */}
                {projectData.liveProjectLink === "#" ? (
                  <div className="flex w-full cursor-not-allowed items-center justify-between rounded-xl border border-gray-800 bg-gray-900/30 px-4 py-3 text-xs font-semibold text-gray-500 select-none">
                    <span className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-600" />
                      Local Sandbox / Demo
                    </span>
                    <span className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[9px] font-bold text-amber-500 uppercase">
                      Dev Phase
                    </span>
                  </div>
                ) : (
                  <motion.a
                    href={projectData.liveProjectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-gray-900 shadow-md transition-all duration-300 hover:bg-gray-100"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Launch Live Preview</span>
                  </motion.a>
                )}
                {/* Client Side Code */}
                {projectData.githubRepositoryLinkClientSide === "#" ? (
                  <div className="flex w-full cursor-not-allowed items-center justify-between rounded-xl border border-gray-900/60 bg-gray-900/20 px-4 py-3 text-xs font-medium text-gray-600 select-none">
                    <span className="flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-gray-700" />
                      Frontend Repository
                    </span>
                    <span className="flex items-center">
                      <Lock className="h-3 w-3 text-gray-700" />
                    </span>
                  </div>
                ) : (
                  <motion.a
                    href={projectData.githubRepositoryLinkClientSide}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-800 bg-gray-900/50 px-4 py-3 text-xs font-bold text-gray-200 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900"
                  >
                    <Monitor className="h-4 w-4 text-gray-400" />
                    <span>Client Code Repository</span>
                  </motion.a>
                )}
                {/* Server Side Code */}
                {projectData.githubRepositoryLinkServerSide === "#" ? (
                  <div className="flex w-full cursor-not-allowed items-center justify-between rounded-xl border border-gray-900/60 bg-gray-900/20 px-4 py-3 text-xs font-medium text-gray-600 select-none">
                    <span className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-gray-700" />
                      Backend Engine Code
                    </span>
                    <span className="flex items-center">
                      <Lock className="h-3 w-3 text-gray-700" />
                    </span>
                  </div>
                ) : (
                  <motion.a
                    href={projectData.githubRepositoryLinkServerSide}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-800 bg-gray-900/50 px-4 py-3 text-xs font-bold text-gray-200 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900"
                  >
                    <Server className="h-4 w-4 text-gray-400" />
                    <span>Server Code Repository</span>
                  </motion.a>
                )}
              </div>
              {/* Technologies Tag Cloud Area */}
              <div className="mt-5 border-t border-gray-900 pt-5">
                <h3 className="mb-3 flex items-center gap-1.5 text-xs font-bold tracking-widest text-gray-500 uppercase">
                  <Code2 className="h-3.5 w-3.5" />
                  <span>Integrated Stack</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.mainTechnologyStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`cursor-default rounded-lg border border-gray-900 bg-gray-950/80 px-3 py-1.5 text-[10px] font-bold tracking-wide text-gray-400 transition-all duration-300 ${getTechGlowColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Meta information parameters */}
              <div className="mt-5 space-y-3.5 border-t border-gray-900 pt-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-gray-500">
                    <Shield className="h-3.5 w-3.5 text-blue-500/70" />
                    Category
                  </span>
                  <span className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-[9px] font-bold text-blue-400 uppercase">
                    {projectData.category}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-gray-500">
                    <Layers className="h-3.5 w-3.5 text-purple-500/70" />
                    Scope
                  </span>
                  <span className="font-semibold text-gray-300">
                    Full Case Study
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-gray-500">
                    <Calendar className="h-3.5 w-3.5 text-emerald-500/70" />
                    Timeline
                  </span>
                  <span className="font-semibold text-gray-300">
                    2026 Production
                  </span>
                </div>
              </div>
            </div>
            {/* Bottom mini informational notice */}
            <div className="rounded-xl border border-dashed border-gray-800 p-4 text-center text-[11px] leading-relaxed text-gray-500">
              This case study documents technical implementation strategies,
              challenges solved, and ongoing architectural improvements.
            </div>
          </aside>
        </div>
        {/* ── Bottom Divider Line ── */}
        <div className="mt-20 flex items-center justify-between border-t border-gray-900 pt-8 text-[11px] text-gray-600">
          <span>© {projectData.name} Case Study — by Rahmatullah</span>
          <div className="flex items-center gap-1.5">
            <GitBranch className="h-3.5 w-3.5 text-gray-700" />
            <span>Production Blueprint</span>
          </div>
        </div>
      </div>
    </section>
  )
}
/* ─────────────────────────────────────────
   REUSABLE ACCENT-COLORED SECTION CARD
───────────────────────────────────────── */
interface SectionCardProps {
  icon: React.ReactNode
  iconBg: string
  label: string
  accent: "blue" | "rose" | "amber" | "emerald" | "purple"
  children: React.ReactNode
}
function SectionCard({
  icon,
  iconBg,
  label,
  accent,
  children,
}: SectionCardProps) {
  const accentBorder = {
    blue: "hover:border-blue-500/30 hover:shadow-blue-500/5",
    rose: "hover:border-rose-500/30 hover:shadow-rose-500/5",
    amber: "hover:border-amber-500/30 hover:shadow-amber-500/5",
    emerald: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
    purple: "hover:border-purple-500/30 hover:shadow-purple-500/5",
  }[accent]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-2xl border border-gray-900 bg-gray-950/20 p-6 backdrop-blur-md transition-all duration-500 hover:bg-gray-950/30 hover:shadow-xl sm:p-7 ${accentBorder} group/card overflow-hidden`}
    >
      {/* Background radial accent flare */}
      <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-white/[0.005] transition-colors group-hover/card:bg-white/[0.015]" />
      <div className="mb-1 flex items-center gap-3">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconBg} border border-gray-900 shadow-sm`}
        >
          {icon}
        </span>
        <h2 className="text-sm font-bold tracking-tight text-white sm:text-base">
          {label}
        </h2>
      </div>
      {children}
    </motion.div>
  )
}
