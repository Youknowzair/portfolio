"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = saved ? saved === "dark" : prefersDark;
    setDark(useDark);
    document.documentElement.classList.toggle("dark", useDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  if (!mounted) {
    return <div className="w-8 h-8 rounded-full bg-divider/20 animate-pulse" />;
  }

  return (
    <motion.button
      type="button"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className="relative w-10 h-10 rounded-lg bg-surface border border-divider/50 hover:border-divider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-text/20 focus:ring-offset-2 focus:ring-offset-background group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Light Mode - Clean Sun Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: dark ? 0 : 1,
          scale: dark ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      </motion.div>

      {/* Dark Mode - Clean Moon Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: dark ? 1 : 0,
          scale: dark ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-text"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </motion.div>

      {/* Subtle Hover Background */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-text/5 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}
