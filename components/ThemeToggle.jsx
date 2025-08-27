"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function ThemeToggle() {
  // null = not initialized yet (prevents flashes), boolean afterwards
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = saved ? saved === "dark" : prefersDark;
    setDark(useDark);
    if (typeof document !== "undefined") document.documentElement.classList.toggle("dark", useDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      aria-pressed={dark}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className={clsx(
        "relative inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "w-14 h-8 rounded-full transition-colors duration-300",
        dark ? "bg-gradient-to-r from-indigo-600 to-pink-500" : "bg-gray-200 dark:bg-gray-700"
      )}
    >
      {/* track inner glow */}
      <span className={clsx("sr-only")}>{dark ? "Dark mode" : "Light mode"}</span>

      {/* knob */}
      <span
        className={clsx(
          "transform-gpu transition-transform duration-300 ease-in-out",
          "inline-block w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-md",
          dark ? "translate-x-6" : "translate-x-1"
        )}
      >
        {/* icons inside knob: sun & moon crossfade */}
        <svg
          viewBox="0 0 24 24"
          className={clsx("w-4 h-4 m-1 transition-opacity duration-300", dark ? "opacity-0" : "opacity-100")}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
          <g strokeWidth="2">
            <path d="M12 4v1" />
            <path d="M12 19v1" />
            <path d="M4 12H3" />
            <path d="M21 12h-1" />
            <path d="M5.6 5.6L4.5 4.5" />
            <path d="M19.5 19.5l-1.1-1.1" />
            <path d="M5.6 18.4l-1.1 1.1" />
            <path d="M19.5 4.5l-1.1 1.1" />
          </g>
        </svg>

        <svg
          viewBox="0 0 24 24"
          className={clsx("w-4 h-4 m-1 absolute left-0 top-0 transition-opacity duration-300", dark ? "opacity-100" : "opacity-0")}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </span>

  {/* decorative end icons removed — knob contains the single authoritative icon */}
    </button>
  );
}
