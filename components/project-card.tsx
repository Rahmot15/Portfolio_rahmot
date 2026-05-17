"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Server, LayoutTemplate } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { projects } from "@/lib/data";
import { getImageSizes, BLUR_DATA_URL } from "@/lib/image-config";

// Tailwind color maps for technical badges
const getTechColor = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes('react')) return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
  if (t.includes('node') || t.includes('express')) return 'text-green-400 border-green-400/30 bg-green-400/10';
  if (t.includes('mongo')) return 'text-purple-400 border-emerald-400/30 bg-emerald-400/10';
  if (t.includes('tailwind')) return 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10';
  if (t.includes('next')) return 'text-white border-gray-400/30 bg-gray-400/10';
  if (t.includes('jwt') || t.includes('auth')) return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
  return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
};

export function ProjectCard() {

  return (
    <section id="projects">
      <div className="relative z-10 container mx-auto px-4 pt-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl inter-fonts md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-purple-400">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2500}
                className="h-full group relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-500 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
              >
                {/* Project Image Container */}
                <div className="relative h-64 overflow-hidden image-scroll-hover shrink-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes={getImageSizes('projectCard')}
                      className="w-full h-full object-cover"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      priority={false}
                      quality={85}
                      loading="lazy"
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/95 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating action buttons with Tooltips */}
                  <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">

                    {/* Client Code Link */}
                    <div className="relative group/btn">
                      <motion.a
                        href={project.githubRepositoryLinkClientSide}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-blue-600/90 border border-gray-600 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <LayoutTemplate className="w-4 h-4 text-white" />
                      </motion.a>
                      {/* Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Client Code
                      </div>
                    </div>

                    {/* Server Code Link */}
                    <div className="relative group/btn">
                      <motion.a
                        href={project.githubRepositoryLinkServerSide}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-green-600/90 border border-gray-600 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Server className="w-4 h-4 text-white" />
                      </motion.a>
                      {/* Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        API Code
                      </div>
                    </div>

                    {/* Live Link */}
                    <div className="relative group/btn">
                      <motion.a
                        href={project.liveProjectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 bg-blue-600/90 backdrop-blur-sm rounded-full hover:bg-blue-500/90 border border-blue-400/50 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.a>
                      {/* Tooltip */}
                      <div className="absolute -bottom-8 right-0 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                        Live Site
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <motion.h3
                      className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300"
                      layoutId={`title-${project.id}`}
                    >
                      {project.name}
                    </motion.h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.briefDescription}
                  </p>

                  {/* Technology badges mapped with colors */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.mainTechnologyStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md border ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.mainTechnologyStack.length > 4 && (
                      <span className="px-2.5 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-md border border-gray-700">
                        +{project.mainTechnologyStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <motion.div
                    className="group/detailbtn w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex w-full py-3 px-4 items-center justify-center gap-2 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/50 text-blue-400 rounded-xl font-semibold backdrop-blur-md transition-all duration-300"
                    >
                      View Case Study
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
