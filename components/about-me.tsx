"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Heart,
  Lightbulb,
  Target,
  Gamepad2,
  Coffee,
  BookOpen,
} from "lucide-react";

export function AboutMe() {

  return (
    <section id="about">
      <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Section Header */}
        <motion.div className="text-center inter-fonts mb-16" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-purple-400">
              Me
            </span>
          </h2>
          <motion.div className="w-24 h-1 bg-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <motion.div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Side - About Me Content */}
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} viewport={{ once: true }} className="space-y-8">
            <motion.div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Code2 className="w-6 h-6 text-blue-400
                " />
                My Programming Journey
              </h3>
              <motion.div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  After completing my HSC, I became interested in learning an
                  online skill, which eventually introduced me to programming.
                  That’s when I started learning HTML, CSS, and JavaScript from
                  YouTube and online resources.
                </p>

                <p>
                  At first, everything felt confusing, and even small bugs took
                  hours to solve. But gradually, I started enjoying the process
                  of building things with code, which pushed me deeper into web
                  development.
                </p>

                <p>
                  Over the last 2 years, I’ve been continuously learning and
                  building full-stack web applications using technologies like
                  Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and
                  Prisma ORM.
                </p>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Heart className="w-6 h-6 text-purple-400" />
                What I Love Doing
              </h3>
              <motion.div className="text-gray-300 leading-relaxed space-y-4">
                <motion.div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    I enjoy building modern, responsive, and scalable web
                    applications that provide clean user experiences and solve
                    real-world problems.
                  </p>

                  <p>
                    I’m passionate about both frontend and backend development —
                    from designing intuitive interfaces to building secure and
                    maintainable backend systems.
                  </p>

                  <p>
                    I also enjoy learning new technologies, improving my skills,
                    and continuously challenging myself with new ideas and projects.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Cards */}
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 20 }} viewport={{ once: true }} className="space-y-6">
            {/* Personality Card */}
            <motion.div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
              <motion.div className="flex items-center space-x-3 mb-4">
                <motion.div className="p-2 bg-purple-500/10 backdrop-blur-md border border-purple-500/20 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-purple-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white">
                  My Personality
                </h3>
              </motion.div>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m a detail-oriented problem solver who believes in
                continuous learning. I love collaborating with teams, sharing
                knowledge, and turning complex ideas into user-friendly
                solutions.
              </p>
            </motion.div>

            {/* Hobbies Card */}
            <motion.div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
              <motion.div className="flex items-center space-x-3 mb-4">
                <motion.div className="p-2 bg-purple-500/10 backdrop-blur-md border border-purple-500/20 rounded-lg">
                  <Target className="w-5 h-5 text-purple-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white">
                  Beyond Coding
                </h3>
              </motion.div>

              <motion.div className="space-y-3">
                {[
                  { icon: Gamepad2, text: "Gaming & Interactive Media" },
                  { icon: Coffee, text: "Coffee & Late Night Coding" },
                  { icon: BookOpen, text: "Reading Tech Articles" },
                ].map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 group cursor-pointer"
                  >
                    <motion.div className="p-2 bg-purple-500/10 backdrop-blur-md border border-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <hobby.icon className="w-4 h-4 text-purple-400" />
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {hobby.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Quote Card */}
            <motion.div className="bg-linear-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6">
              <motion.div className="text-center space-y-3">
                <motion.div className="text-3xl text-indigo-400">&quot;</motion.div>
                <p className="text-indigo-200 italic leading-relaxed">
                  “First, solve the problem. Then, write the code.”
                </p>
                <motion.div className="text-sm text-indigo-300">— John Johnson</motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
