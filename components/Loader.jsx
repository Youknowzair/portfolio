"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState("Loading");

  // Hide navbar during loading
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const nav = document.querySelector('header');
    if (nav) nav.style.display = 'none';

    return () => {
      document.body.style.overflow = 'unset';
      const nav = document.querySelector('header');
      if (nav) nav.style.display = 'block';
    };
  }, []);

  // Neural Network 5-second loading sequence
  useEffect(() => {
    const start = Date.now();
    const duration = 3000; // 3 seconds - super quick and professional

    const phases = [
      { threshold: 0, text: "Initializing" },
      { threshold: 20, text: "Connecting" },
      { threshold: 40, text: "Processing" },
      { threshold: 60, text: "Optimizing" },
      { threshold: 80, text: "Finalizing" },
      { threshold: 95, text: "Complete" },
      { threshold: 100, text: "Ready" }
    ];

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progressPercent = Math.min(100, (elapsed / duration) * 100);
      setProgress(progressPercent);

      // Update phase based on progress
      const currentPhaseObj = phases.reverse().find(p => progressPercent >= p.threshold);
      if (currentPhaseObj) {
        setCurrentPhase(currentPhaseObj.text);
      }
      phases.reverse(); // Reset order

      if (progressPercent >= 100) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">

      {/* Ultra Advanced Background */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 60px 60px'
          }}
        />

        {/* Floating Orbs */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-[0.02]"
            style={{
              background: `radial-gradient(circle, currentColor 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.01, 0.04, 0.01]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}

        {/* Scanning Lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(var(--text-rgb, 14, 16, 20), 0.01) 100px, rgba(var(--text-rgb, 14, 16, 20), 0.01) 102px)',
          }}
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Loader Container */}
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        {/* ULTRA ADVANCED NEURAL NETWORK */}
        <div className="relative w-48 h-48">
          {/* Outer Quantum Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-text/25"
            style={{
              background: `conic-gradient(from ${progress * 3.6}deg, transparent, rgba(var(--text-rgb, 14, 16, 20), 0.1), transparent)`
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Middle Plasma Ring */}
          <motion.div
            className="absolute inset-6 rounded-full border border-text/20"
            style={{
              background: `conic-gradient(from ${-progress * 2.4}deg, transparent, rgba(var(--text-rgb, 14, 16, 20), 0.08), transparent)`
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Energy Ring */}
          <motion.div
            className="absolute inset-12 rounded-full border border-text/15"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Neural Nodes - More sophisticated positioning */}
          {[
            { x: 20, y: 8, size: 3, delay: 0, intensity: 1 },
            { x: 32, y: 4, size: 2, delay: 0.1, intensity: 0.8 },
            { x: 48, y: 12, size: 4, delay: 0.2, intensity: 1.2 },
            { x: 64, y: 8, size: 2, delay: 0.3, intensity: 0.9 },
            { x: 80, y: 16, size: 3, delay: 0.4, intensity: 1 },
            { x: 96, y: 12, size: 2, delay: 0.5, intensity: 0.7 },
            { x: 112, y: 20, size: 3, delay: 0.6, intensity: 1.1 },
            { x: 8, y: 32, size: 2, delay: 0.7, intensity: 0.8 },
            { x: 24, y: 40, size: 3, delay: 0.8, intensity: 1 },
            { x: 48, y: 36, size: 4, delay: 0.9, intensity: 1.3 },
            { x: 72, y: 44, size: 3, delay: 1.0, intensity: 1 },
            { x: 96, y: 40, size: 2, delay: 1.1, intensity: 0.9 },
            { x: 120, y: 48, size: 3, delay: 1.2, intensity: 1.1 },
            { x: 16, y: 64, size: 2, delay: 1.3, intensity: 0.8 },
            { x: 40, y: 68, size: 3, delay: 1.4, intensity: 1 },
            { x: 64, y: 72, size: 4, delay: 1.5, intensity: 1.2 },
            { x: 88, y: 68, size: 3, delay: 1.6, intensity: 1 },
            { x: 112, y: 72, size: 2, delay: 1.7, intensity: 0.9 },
            { x: 20, y: 96, size: 3, delay: 1.8, intensity: 1 },
            { x: 44, y: 100, size: 2, delay: 1.9, intensity: 0.8 },
            { x: 68, y: 104, size: 3, delay: 2.0, intensity: 1.1 },
            { x: 92, y: 100, size: 4, delay: 2.1, intensity: 1.2 },
            { x: 116, y: 96, size: 2, delay: 2.2, intensity: 0.9 },
            { x: 32, y: 120, size: 3, delay: 2.3, intensity: 1 },
            { x: 56, y: 124, size: 2, delay: 2.4, intensity: 0.8 },
            { x: 80, y: 128, size: 3, delay: 2.5, intensity: 1.1 },
            { x: 104, y: 124, size: 2, delay: 2.6, intensity: 0.9 },
          ].map((node, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-text"
              style={{
                left: node.x,
                top: node.y,
                width: node.size,
                height: node.size
              }}
              animate={{
                scale: [1, node.intensity * 1.5, 1],
                opacity: [0.3, 1, 0.3],
                boxShadow: [
                  `0 0 0px rgba(var(--text-rgb, 14, 16, 20), 0.3)`,
                  `0 0 ${node.size * 3}px rgba(var(--text-rgb, 14, 16, 20), 0.8)`,
                  `0 0 0px rgba(var(--text-rgb, 14, 16, 20), 0.3)`
                ]
              }}
              transition={{
                duration: 2.5,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Advanced Neural Connections */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.1"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Complex Neural Network Connections */}
            {[
              // Layer 1 to Layer 2
              { x1: 20, y1: 8, x2: 48, y2: 36, delay: 0 },
              { x1: 32, y1: 4, x2: 72, y2: 44, delay: 0.1 },
              { x1: 48, y1: 12, x2: 96, y2: 40, delay: 0.2 },
              { x1: 64, y1: 8, x2: 48, y2: 36, delay: 0.3 },
              { x1: 80, y1: 16, x2: 72, y2: 44, delay: 0.4 },
              { x1: 96, y1: 12, x2: 96, y2: 40, delay: 0.5 },

              // Layer 2 to Layer 3
              { x1: 24, y1: 40, x2: 64, y2: 72, delay: 0.6 },
              { x1: 48, y1: 36, x2: 88, y2: 68, delay: 0.7 },
              { x1: 72, y1: 44, x2: 64, y2: 72, delay: 0.8 },
              { x1: 96, y1: 40, x2: 88, y2: 68, delay: 0.9 },

              // Layer 3 to Layer 4
              { x1: 40, y1: 68, x2: 68, y2: 104, delay: 1.0 },
              { x1: 64, y1: 72, x2: 92, y2: 100, delay: 1.1 },
              { x1: 88, y1: 68, x2: 68, y2: 104, delay: 1.2 },

              // Cross connections for complexity
              { x1: 20, y1: 8, x2: 72, y2: 44, delay: 1.3 },
              { x1: 48, y1: 12, x2: 88, y2: 68, delay: 1.4 },
              { x1: 24, y1: 40, x2: 92, y2: 100, delay: 1.5 },
              { x1: 64, y1: 8, x2: 64, y2: 72, delay: 1.6 },
              { x1: 48, y1: 36, x2: 68, y2: 104, delay: 1.7 },
            ].map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="url(#neuralGradient)"
                strokeWidth="0.5"
                filter="url(#glow)"
                animate={{
                  opacity: [0.1, 0.8, 0.1],
                  strokeWidth: [0.3, 1.2, 0.3]
                }}
                transition={{
                  duration: 4,
                  delay: line.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Multiple Data Pulses */}
            {[
              { path: [[20, 8], [48, 36], [64, 72], [68, 104]], delay: 0, color: "currentColor" },
              { path: [[80, 16], [72, 44], [88, 68], [92, 100]], delay: 1.5, color: "currentColor" },
              { path: [[48, 12], [96, 40], [64, 72], [68, 104]], delay: 3, color: "currentColor" },
            ].map((pulse, i) => (
              <motion.circle
                key={i}
                r="1.5"
                fill={pulse.color}
                opacity="0.9"
                filter="url(#glow)"
                animate={{
                  cx: pulse.path.map(p => p[0]),
                  cy: pulse.path.map(p => p[1]),
                  scale: [1, 1.5, 1, 1.5, 1]
                }}
                transition={{
                  duration: 6,
                  delay: pulse.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>

          {/* Advanced Central Processing Core */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-6 h-6 -mt-3 -ml-3 rounded-full bg-text border border-background/50"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
              boxShadow: [
                '0 0 0px rgba(var(--text-rgb, 14, 16, 20), 0.3)',
                '0 0 20px rgba(var(--text-rgb, 14, 16, 20), 0.9)',
                '0 0 0px rgba(var(--text-rgb, 14, 16, 20), 0.3)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Core Inner Ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full border border-text/40"
            animate={{
              scale: [0.8, 1.2, 0.8],
              rotate: [360, 0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Progress-based Core Intensity */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-1 -mt-0.5 -ml-0.5 rounded-full bg-text"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* ULTRA HIGH-END Progress Section */}
        <div className="w-[500px] space-y-6">
          <div className="flex justify-between items-center">
            <motion.div className="flex items-center space-x-3">
              <motion.div
                className="w-2 h-2 rounded-full bg-text"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <motion.span
                className="text-xl font-semibold text-text tracking-wide"
                animate={{
                  opacity: [0.8, 1, 0.8],
                  y: [0, -1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {currentPhase}
              </motion.span>
            </motion.div>

            <motion.div className="flex items-baseline space-x-1">
              <motion.span
                className="text-3xl font-mono font-bold text-text"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                {Math.round(progress)}
              </motion.span>
              <span className="text-lg text-text-secondary font-mono">%</span>
            </motion.div>
          </div>

          {/* ULTIMATE Progress Bar */}
          <div className="relative">
            {/* Progress Track */}
            <div className="w-full h-3 bg-divider/30 rounded-full overflow-hidden backdrop-blur-sm border border-text/10">
              <motion.div
                className="h-full rounded-full relative overflow-hidden"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg,
                    rgba(var(--text-rgb, 14, 16, 20), 0.9) 0%,
                    rgba(var(--text-rgb, 14, 16, 20), 1) 50%,
                    rgba(var(--text-rgb, 14, 16, 20), 0.8) 100%)`
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Animated Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                  animate={{
                    x: ['-200%', '200%']
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Progress Pulse */}
                <motion.div
                  className="absolute right-0 top-0 w-1 h-full bg-white/60 rounded-full"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scaleY: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>

            {/* Progress Glow */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: `0 0 20px rgba(var(--text-rgb, 14, 16, 20), ${progress / 400})`
              }}
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Progress Milestones */}
          <div className="flex justify-between text-xs text-text-muted font-mono">
            {[0, 25, 50, 75, 100].map((milestone) => (
              <motion.span
                key={milestone}
                className={`${progress >= milestone ? 'text-text opacity-100' : 'opacity-40'}`}
                animate={{
                  scale: progress >= milestone ? [1, 1.1, 1] : 1,
                  opacity: progress >= milestone ? [0.7, 1, 0.7] : 0.4
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {milestone}%
              </motion.span>
            ))}
          </div>
        </div>

        {/* Professional Activity Indicators */}
        <div className="flex space-x-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-text/60"
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.4, 0.8],
                y: [0, -4, 0]
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Status Indicator */}
        <motion.div
          className="flex items-center space-x-2 mt-4"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 rounded-full bg-text animate-pulse" />
          <span className="text-xs text-text-secondary font-mono tracking-wider uppercase">
            Neural Network Active
          </span>
        </motion.div>
      </motion.div>

      {/* Subtle Ambient Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(var(--text-rgb, 14, 16, 20), 0.02) 0%, transparent 70%)`
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
