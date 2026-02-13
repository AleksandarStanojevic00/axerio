"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import type { Dictionary } from "@/lib/i18n/types";

export function Process({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="process" className="py-20">
      <Container>
        <SectionHeader
          eyebrow={dictionary.process.eyebrow}
          title={dictionary.process.title}
          description={dictionary.process.description}
        />
        <ol className="grid gap-4 md:grid-cols-4">
          {dictionary.process.steps.map((step, index) => (
            <motion.li
              key={step.title}
              className="mobile-focus-frame relative rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]"
              whileHover={{ y: -3 }}
            >
              <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-primary)]">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

