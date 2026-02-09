"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import type { Dictionary } from "@/lib/i18n/types";

export function SocialProof({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="pb-16">
      <Container>
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--text-secondary)]">{dictionary.socialProof.title}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {dictionary.socialProof.logos.map((logo) => (
              <motion.div
                key={logo}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 text-center text-sm font-semibold text-[var(--text-primary)]"
                whileHover={{ y: -2 }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {dictionary.socialProof.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl bg-[var(--surface)] p-4">
                <div className="text-xl font-semibold text-[var(--text-primary)]">{metric.value}</div>
                <div className="text-sm text-[var(--text-secondary)]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
