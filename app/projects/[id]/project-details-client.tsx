"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Server,
  Monitor,
  ArrowLeft,
  ExternalLink,
  Target,
  Code,
  Lightbulb,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Project } from "@/lib/data";
import { getImageSizes, BLUR_DATA_URL } from "@/lib/image-config";

interface ProjectDetailsClientProps {
  projectData: Project;
}

export default function ProjectDetailsClient({
  projectData,
}: ProjectDetailsClientProps) {
  const router = useRouter();

  if (!projectData) {
    return (
      <motion.div className="min-h-screen flex items-center justify-center text-white">
        <motion.div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-blue-600 rounded-xl text-white"
          >
            Go Back
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <section>
      <motion.div className="relative z-10 container mx-auto px-4 md:py-36 py-26">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.button
            className="group flex items-center gap-3 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              router.back();
            }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:text-purple-400 transition-colors duration-300" />
            <span className="font-medium">Back to Projects</span>
          </motion.button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inter-fonts">
              {projectData.name}
            </span>
          </h1>

          {/* Action Buttons */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.a
              href={projectData.liveProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-5 h-5" />
              Live Preview
            </motion.a>

            <motion.a
              href={projectData.githubRepositoryLinkClientSide}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-xl font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Monitor className="w-5 h-5" />
              Client Code
            </motion.a>

            <motion.a
              href={projectData.githubRepositoryLinkServerSide}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Server className="w-5 h-5" />
              Server Code
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div className="max-w-7xl mx-auto space-y-12">
          {/* Project Image & Overview */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left Side: Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              className="lg:col-span-1 order-1"
            >
              <motion.div className="relative group bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50">
                <Image
                  src={projectData.image}
                  alt={projectData.name}
                  width={400}
                  height={300}
                  sizes={getImageSizes("projectCard")}
                  className="w-full h-auto object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  quality={85}
                  priority={false}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Right Side: All 3 Cards */}
            <motion.div className="lg:col-span-2 flex flex-col gap-4 order-2">
              {/* Project Overview */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <motion.div className="p-2 bg-blue-600/20 rounded-lg">
                    <Target className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  Project Overview
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {projectData.briefDescription}
                </p>
              </motion.div>

              {/* Technology Stack */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <motion.div className="p-2 bg-purple-600/20 rounded-lg">
                    <Code className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  Technology Stack
                </h2>
                <motion.div className="grid grid-cols-2 gap-3">
                  {projectData.mainTechnologyStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="group p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                      whileHover={{ scale: 1.05, y: -3 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300 text-sm">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Challenges Faced */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <motion.div className="p-2 bg-red-600/20 rounded-lg">
                    <Target className="w-6 h-6 text-red-400" />
                  </motion.div>
                  Challenges Faced
                </h2>
                <motion.div className="space-y-3">
                  {projectData.challengesFaced.map((challenge, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-red-500/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div className="p-1 bg-red-600/20 rounded-full shrink-0 mt-1">
                        <CheckCircle className="w-3 h-3 text-red-400" />
                      </motion.div>
                      <span className="text-gray-300 leading-relaxed text-sm">
                        {challenge}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Improvements & Future Plans */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Potential Improvements */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <motion.div className="p-2 bg-yellow-600/20 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                </motion.div>
                Potential Improvements
              </h2>
              <motion.div className="space-y-3">
                {projectData.potentialImprovements.map((improvement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div className="p-1 bg-yellow-600/20 rounded-full shrink-0 mt-1">
                      <Lightbulb className="w-3 h-3 text-yellow-400" />
                    </motion.div>
                    <span className="text-gray-300 leading-relaxed text-sm">
                      {improvement}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Future Plans */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <motion.div className="p-2 bg-green-600/20 rounded-lg">
                  <Rocket className="w-6 h-6 text-green-400" />
                </motion.div>
                Future Plans
              </h2>
              <motion.div className="space-y-3">
                {projectData.futurePlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-green-500/30 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -3 }}
                  >
                    <motion.div className="p-1 bg-green-600/20 rounded-full shrink-0 mt-1">
                      <Rocket className="w-3 h-3 text-green-400" />
                    </motion.div>
                    <span className="text-gray-300 leading-relaxed text-sm">
                      {plan}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
