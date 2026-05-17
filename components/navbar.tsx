"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Code,
  FolderOpen,
  Mail,
  Terminal,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number }>;
}

const navItems: NavItem[] = [
  { id: "home", name: "Home", icon: Home },
  { id: "about", name: "About", icon: User },
  { id: "skills", name: "Skills", icon: Code },
  // { id: "education", name: "Education", icon: GraduationCap },
  { id: "projects", name: "Projects", icon: FolderOpen },
  { id: "contact", name: "Contact", icon: Mail },
];

export function Navbar() {
  const [activeRoute, setActiveRoute] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveRoute(sectionId);
    setIsMobileMenuOpen(false);
  };


  return (
    <>
      {/* Desktop Navbar */}
      <nav className="max-w-7xl mx-auto rounded-2xl mt-4 fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md">
        <motion.div className="px-4 sm:px-6 lg:px-8">
          <motion.div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 cursor-pointer font-mono text-white"
                onClick={() => handleNavClick("home")}
              >
                <Terminal className="text-green-400" size={24} />
                <span className="text-xl font-bold">
                  <span className="text-green-400">const</span>{" "}
                  <span className="text-purple-400">developer</span>{" "}
                  <span className="text-pink-400">=</span>
                  <span className="text-yellow-400">&quot;rahmot&quot;</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeRoute === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`group relative flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <motion.div
                      className={`transition-all duration-300 ${
                        isActive ? "scale-100" : "group-hover:scale-110"
                      }`}
                    >
                      <IconComponent size={18} />
                    </motion.div>

                    <span
                      className={`ml-2 transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
                        isActive
                          ? "max-w-24 opacity-100"
                          : "max-w-0 opacity-0 group-hover:max-w-24 group-hover:opacity-100"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Underline indicator */}
                    <motion.div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                        isActive ? "w-6" : "w-0 group-hover:w-6"
                      }`}
                    />
                  </button>
                );
              })}
            </motion.div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <motion.div
          className={`absolute top-0 right-0 h-full w-80 max-w-sm bg-gray-900 shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <motion.div className="p-6 pt-20">
            <motion.div className="space-y-2 mb-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeRoute === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <IconComponent size={20} />
                    <span className="ml-3 font-medium">{item.name}</span>
                    {isActive && (
                      <motion.div className="ml-auto w-2 h-2 bg-green-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
