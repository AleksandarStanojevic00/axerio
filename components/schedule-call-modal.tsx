"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScheduleCallModal({
  open,
  onClose,
  title,
  description,
  cta,
  closeLabel,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  cta: string;
  closeLabel: string;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            className="w-full max-w-xl rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-hover)]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">{title}</h3>
              <Button variant="ghost" size="sm" onClick={onClose} aria-label={closeLabel}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="mb-6 text-[var(--text-secondary)]">{description}</p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--accent-primary)] px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              {cta}
            </a>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
