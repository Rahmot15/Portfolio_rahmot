"use client";

import { useState, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiAxios,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiJsonwebtokens,
  SiZod,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiNotion,
  SiJira,
  SiMongodb,
  SiNpm,
  SiReactquery,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { MdSecurity } from "react-icons/md";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  Icon: IconType;
  color: string;
}

interface SkillCategory {
  category: string;
  accent: string;
  glow: string;
  label: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    accent: "#6366f1",
    glow: "rgba(99,102,241,0.15)",
    label: "FE",
    skills: [
      { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "shadcn/ui", Icon: SiShadcnui, color: "#ffffff" },
      { name: "TanStack Query", Icon: SiReactquery, color: "#FF4154" },
      { name: "Axios", Icon: SiAxios, color: "#5A29E4" },
      { name: "Framer Motion", Icon: SiFramer, color: "#ffffff" },
    ],
  },
  {
    category: "Backend",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.15)",
    label: "BE",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress, color: "#ffffff" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma ORM", Icon: SiPrisma, color: "#ffffff" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Better Auth", Icon: MdSecurity, color: "#f59e0b" },
      { name: "JWT Auth", Icon: SiJsonwebtokens, color: "#F59E0B" },
      { name: "REST API", Icon: SiPostman, color: "#FF6C37" },
      { name: "Zod", Icon: SiZod, color: "#3068b7" },
    ],
  },
  {
    category: "Tools",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.15)",
    label: "TL",
    skills: [
      { name: "Git & GitHub", Icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
      { name: "Notion", Icon: SiNotion, color: "#ffffff" },
      { name: "Jira", Icon: SiJira, color: "#0052CC" },
      { name: "MongoDB Atlas", Icon: SiMongodb, color: "#47A248" },
      { name: "npm", Icon: SiNpm, color: "#CB3837" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: "easeOut" },
  }),
};

function SkillCard({
  skill,
  accent,
  glow,
}: {
  skill: Skill;
  accent: string;
  glow: string;
}) {
  const { Icon, name, color } = skill;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-2xl flex flex-col items-center justify-center gap-2 cursor-default overflow-hidden transition-all duration-300 min-h-27.5 sm:px-3 px-2 py-4 border ${hovered
        ? "bg-linear-to-br from-white/10 to-white/5 border-white/20 shadow-lg"
        : "bg-white/5 border-white/10"
        }`}
      style={{
        boxShadow: hovered ? `0 10px 30px -10px ${glow}` : "none",
        borderColor: hovered ? `${accent}77` : "rgba(255,255,255,0.1)",
      }}
    >
      {/* glow effect */}
      {hovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background: `radial-gradient(circle at top, ${glow}, transparent 70%)`,
          }}
        />
      )}

      <motion.div
        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${hovered
          ? "bg-white/10 scale-110 -translate-y-0.5 shadow-md"
          : "bg-white/5 scale-100"
          }`}
      >
        <Icon className="text-[28px]" style={{ color }} />
      </motion.div>

      <span
        className={`text-[13px] font-semibold text-center leading-tight transition-colors duration-300 tracking-wide ${hovered ? "text-slate-50" : "text-slate-300"
          }`}
        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
      >
        {name}
      </span>
    </motion.div>
  );
}

function CategorySection({
  data,
  index,
}: {
  data: SkillCategory;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      className="mb-16"
    >
      {/* Category header */}
      <motion.div className="flex items-center gap-4 mb-8">
        <motion.div
          className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[12px] tracking-widest border"
          style={{
            background: `${data.accent}22`,
            borderColor: `${data.accent}44`,
            color: data.accent,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {data.label}
        </motion.div>

        <motion.div className="flex items-center gap-3 flex-1">
          <h3
            className="text-base font-bold text-slate-100 tracking-widest uppercase m-0"
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
          >
            {data.category}
          </h3>
          <motion.div
            className="h-px flex-1 max-w-50"
            style={{
              background: `linear-gradient(90deg, ${data.accent}66, transparent)`,
            }}
          />
          <span className="font-mono text-[12px] text-slate-500 font-medium">
            {data.skills.length} skills
          </span>
        </motion.div>
      </motion.div>

      {/* Skills grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3"
      >
        {data.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            accent={data.accent}
            glow={data.glow}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen pt-30 pb-25 overflow-hidden bg-transparent"
    >
      {/* Subtle background grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient glows */}
      <motion.div className="absolute top-[10%] left-[-10%] w-100 h-100 rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />
      <motion.div className="absolute bottom-[10%] right-[-10%] w-125 h-125 rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-5 tracking-tight flex items-center justify-center gap-4 inter-fonts">
            My
            <span className="text-purple-400">
              Skills
            </span>
          </h2>

          <motion.div className="w-30 h-1 bg-purple-400 mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.3)]" />
        </motion.div>

        {/* Category Sections */}
        {skillsData.map((data, index) => (
          <CategorySection key={data.category} data={data} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
