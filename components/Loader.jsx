"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const dur = 1400;
    const id = setInterval(() => {
      const t = Date.now() - start;
      const p = Math.min(100, Math.floor((t / dur) * 100));
      setProgress(p);
      if (p >= 100) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <svg width="220" height="120" viewBox="0 0 220 120" aria-label="Loading">
        <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" fill="none">
          <line x1="30" y1="60" x2="90" y2="30"/>
          <line x1="90" y1="30" x2="150" y2="45"/>
          <line x1="90" y1="30" x2="150" y2="15"/>
          <line x1="30" y1="60" x2="90" y2="90"/>
          <line x1="90" y1="90" x2="150" y2="70"/>
        </g>
        <g>
          <circle cx="30" cy="60" r="5" fill="currentColor" opacity="0.85"/>
          <circle cx="90" cy="30" r="5" fill="currentColor" opacity="0.85"/>
          <circle cx="150" cy="15" r="5" fill="currentColor" opacity="0.85"/>
          <circle cx="150" cy="45" r="5" fill="currentColor" opacity="0.85"/>
          <circle cx="90" cy="90" r="5" fill="currentColor" opacity="0.85"/>
          <circle cx="150" cy="70" r="5" fill="currentColor" opacity="0.85"/>
        </g>
        <path d="M20 100 L110 20 L200 100" stroke="currentColor" strokeWidth="3" fill="none"
          style={{ strokeDasharray: 120, strokeDashoffset: 120 }} className="animate-dash" />
        <text x="110" y="112" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.6">
          calibrating… {progress}%
        </text>
      </svg>
    </div>
  );
}
