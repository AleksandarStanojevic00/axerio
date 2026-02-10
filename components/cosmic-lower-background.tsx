"use client";

import { motion } from "framer-motion";

const stars = [
  { x: "4%", y: "8%", size: 14 },
  { x: "9%", y: "22%", size: 12 },
  { x: "14%", y: "14%", size: 13 },
  { x: "19%", y: "30%", size: 11 },
  { x: "24%", y: "10%", size: 12 },
  { x: "29%", y: "24%", size: 14 },
  { x: "34%", y: "12%", size: 12 },
  { x: "39%", y: "28%", size: 11 },
  { x: "44%", y: "9%", size: 13 },
  { x: "49%", y: "20%", size: 12 },
  { x: "54%", y: "12%", size: 14 },
  { x: "59%", y: "26%", size: 11 },
  { x: "64%", y: "10%", size: 13 },
  { x: "69%", y: "18%", size: 12 },
  { x: "74%", y: "11%", size: 13 },
  { x: "79%", y: "25%", size: 12 },
  { x: "84%", y: "15%", size: 14 },
  { x: "89%", y: "9%", size: 11 },
  { x: "94%", y: "20%", size: 12 },
  { x: "7%", y: "56%", size: 13 },
  { x: "13%", y: "66%", size: 12 },
  { x: "18%", y: "74%", size: 14 },
  { x: "23%", y: "60%", size: 11 },
  { x: "28%", y: "80%", size: 12 },
  { x: "33%", y: "68%", size: 13 },
  { x: "38%", y: "76%", size: 11 },
  { x: "43%", y: "62%", size: 12 },
  { x: "48%", y: "82%", size: 13 },
  { x: "53%", y: "70%", size: 12 },
  { x: "58%", y: "78%", size: 14 },
  { x: "63%", y: "64%", size: 11 },
  { x: "68%", y: "84%", size: 12 },
  { x: "73%", y: "72%", size: 13 },
  { x: "78%", y: "62%", size: 11 },
  { x: "83%", y: "80%", size: 12 },
  { x: "88%", y: "70%", size: 13 },
  { x: "93%", y: "60%", size: 11 },
];

export function CosmicLowerBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(15,118,110,0.09),transparent_44%)] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(61,215,195,0.12),transparent_48%)]" />

      <motion.div
        className="absolute left-[8%] top-[16%] h-64 w-64 rounded-full bg-[var(--accent-primary)]/12 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -18, 0], opacity: [0.2, 0.44, 0.2] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
        animate={{ x: [0, -26, 0], y: [0, 16, 0], opacity: [0.18, 0.42, 0.18] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[28%] bottom-[14%] h-56 w-56 rounded-full bg-cyan-300/8 blur-3xl"
        animate={{ x: [0, 22, 0], y: [0, 14, 0], opacity: [0.16, 0.36, 0.16] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[-12%] top-[34%] h-px w-[58%] bg-gradient-to-r from-transparent via-[var(--accent-primary)]/36 to-transparent"
        animate={{ x: [0, 120, 260], opacity: [0, 0.55, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
      />

      <motion.div
        className="absolute right-[-10%] top-[60%] h-px w-[48%] bg-gradient-to-r from-transparent via-emerald-300/35 to-transparent"
        animate={{ x: [0, -100, -240], opacity: [0, 0.48, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.6 }}
      />

      {stars.map((star, index) => (
        <motion.span
          key={`${star.x}-${star.y}-${index}`}
          className="absolute font-bold text-[var(--accent-primary)]/75"
          style={{
            left: star.x,
            top: star.y,
            fontSize: `${star.size}px`,
            lineHeight: 1,
            textShadow: "0 0 10px rgba(16,185,129,0.45)",
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1.2, 0.7], y: [0, -2, 0] }}
          transition={{ duration: 1.25 + (index % 4) * 0.35, repeat: Infinity, ease: "easeInOut" }}
        >
          *
        </motion.span>
      ))}
    </div>
  );
}
