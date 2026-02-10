"use client";

import { motion } from "framer-motion";

export function DecorativeBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.svg
        className="absolute left-[4%] top-[24%] hidden h-24 w-[38%] md:block"
        viewBox="0 0 600 160"
        fill="none"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.15, 0.36, 0.15], x: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M6 110C75 18 188 152 300 74C397 10 502 76 596 46"
          stroke="var(--accent-primary)"
          strokeOpacity="0.22"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </motion.svg>

      <motion.svg
        className="absolute right-[2%] top-[56%] hidden h-28 w-[40%] lg:block"
        viewBox="0 0 640 180"
        fill="none"
        animate={{ opacity: [0.12, 0.3, 0.12], y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M10 140C90 42 190 30 276 92C368 160 488 52 630 76"
          stroke="var(--accent-primary)"
          strokeOpacity="0.18"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="7 8"
        />
      </motion.svg>

      <motion.svg
        className="absolute left-[18%] top-[78%] hidden h-24 w-[46%] lg:block"
        viewBox="0 0 700 160"
        fill="none"
        animate={{ opacity: [0.1, 0.26, 0.1], x: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M12 62C124 122 229 22 352 68C444 102 566 138 688 54"
          stroke="var(--accent-primary)"
          strokeOpacity="0.2"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.svg>

      <motion.div
        className="absolute left-[8%] top-[40%] h-24 w-20 bg-[var(--accent-primary)]/10 blur-[1px]"
        style={{ clipPath: "polygon(16% 4%, 84% 0%, 100% 46%, 74% 100%, 13% 90%, 0% 44%)" }}
        animate={{ y: [0, 14, 0], rotate: [0, 8, 0], opacity: [0.28, 0.42, 0.28] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[10%] top-[33%] h-28 w-28 bg-[var(--accent-primary)]/10"
        style={{ clipPath: "polygon(22% 0%, 88% 8%, 100% 66%, 66% 100%, 18% 92%, 0% 42%)" }}
        animate={{ x: [0, -12, 0], y: [0, 10, 0], rotate: [0, -10, 0], opacity: [0.24, 0.4, 0.24] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[12%] top-[70%] h-16 w-24 rounded-[34%_66%_60%_40%/42%_30%_70%_58%] bg-[var(--accent-primary)]/9"
        animate={{ x: [0, 10, 0], y: [0, -10, 0], opacity: [0.2, 0.34, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[16%] top-[84%] h-20 w-20 rounded-[58%_42%_37%_63%/47%_67%_33%_53%] bg-[var(--accent-primary)]/10"
        animate={{ y: [0, 8, 0], rotate: [0, 8, 0], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
