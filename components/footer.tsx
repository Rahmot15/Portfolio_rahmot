"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Rahmot15",
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/mdrahmatullah-dev",
    color: "hover:text-purple-400",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://x.com/MdRahmatul59907",
    color: "hover:text-sky-400",
  },
];

export function Footer() {
  return (
    <footer className="relative py-12 mt-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Name Section */}
        <div className="flex transform hover:scale-110 transition-all duration-300 items-center justify-center text-center mb-8">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2 cursor-pointer font-mono text-white"
          >
            <Terminal className="text-green-400" size={24} />
            <span className="text-xl font-bold">
              <span className="text-green-400">const</span>{" "}
              <span className="text-purple-400">developer</span>{" "}
              <span className="text-pink-400">=</span>
              <span className="text-yellow-400">\&quot;rahmot\&quot;</span>
            </span>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-8 mb-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transform hover:scale-110 transition-all duration-300`}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                aria-label={social.name}
              >
                <IconComponent size={28} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider Line */}
        <motion.div
          className="border-t border-gray-700 mb-6"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        ></motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rahmatullah. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Made with ❤️ and Next.js
          </p>
        </motion.div>


      </div>
    </footer>
  );
}
