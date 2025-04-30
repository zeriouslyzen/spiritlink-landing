"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  plain: string;
};

const glitchVariants: Variants = {
  initial: { opacity: 1, x: 0, filter: "none" },
  glitch: {
    opacity: [1, 0.7, 1],
    x: [0, -2, 2, 0],
    filter: [
      "none",
      "drop-shadow(0 0 2px #00fff7)",
      "drop-shadow(0 0 4px #00fff7)",
      "none",
    ],
    transition: { duration: 0.25, repeat: 1, repeatType: "mirror" },
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, plain }) => {
  const [hovered, setHovered] = useState(false);
  const [glitching, setGlitching] = useState(false);

  const handleMouseEnter = () => {
    setGlitching(true);
    setTimeout(() => {
      setGlitching(false);
      setHovered(true);
    }, 250);
  };
  const handleMouseLeave = () => {
    setGlitching(true);
    setTimeout(() => {
      setGlitching(false);
      setHovered(false);
    }, 250);
  };

  return (
    <div
      className="bg-gradient-to-br from-[#181a2a] to-[#0a0a1a] border border-[#00fff7]/40 rounded-xl p-6 shadow-lg hover:shadow-[#00fff7]/30 transition-shadow duration-300 hover:scale-[1.025] focus-within:ring-2 focus-within:ring-[#00fff7] outline-none min-w-[220px] max-w-xs w-full cursor-pointer font-mono"
      tabIndex={0}
      aria-label={title}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        variants={glitchVariants}
        animate={glitching ? "glitch" : "initial"}
        className="text-lg font-bold text-[#00fff7] mb-2 min-h-[2.5rem]"
      >
        <AnimatePresence mode="wait" initial={false}>
          {!hovered ? (
            <motion.span
              key="cryptic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
            >
              {title}
            </motion.span>
          ) : (
            <motion.span
              key="plain"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
              className="text-blue-200"
            >
              {plain}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <p className="text-slate-200 text-sm leading-relaxed mt-2 min-h-[3.5rem]">{description}</p>
    </div>
  );
};

export default ServiceCard; 