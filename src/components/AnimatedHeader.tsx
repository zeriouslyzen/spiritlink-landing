"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const brand = "SYN7H[λ]";
const subtitle = "Project: SYN7H[λ]";
const cryptic = "// function for those who refuse to be mapped";

const AnimatedHeader = () => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(brand.slice(0, i + 1));
      i++;
      if (i === brand.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <motion.h1
        className="text-4xl sm:text-6xl font-mono font-bold text-center text-[#00fff7] drop-shadow-[0_0_16px_#00fff7] tracking-widest"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span>{displayed}</span>
        <span className="animate-pulse">|</span>
      </motion.h1>
      <span className="text-blue-400 font-mono text-lg mt-2">{subtitle}</span>
      <span className="text-slate-400 font-mono text-base mt-1">{cryptic}</span>
    </div>
  );
};

export default AnimatedHeader; 