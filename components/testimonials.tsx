"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import type { Dictionary } from "@/lib/i18n/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials({ dictionary }: { dictionary: Dictionary }) {
  const items = dictionary.testimonials.items;
  const [activeIndex, setActiveIndex] = useState(0);

  const platformLabels = useMemo(
    () => (dictionary.languageLabel === "Jezik" ? ["SaaS platforma", "E-commerce", "HealthTech"] : ["SaaS Platform", "E-commerce", "HealthTech"]),
    [dictionary.languageLabel]
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [items.length]);

  const active = items[activeIndex];
  const company = active.role.includes(",") ? active.role.split(",")[1].trim() : active.role;
  const title = active.role.includes(",") ? active.role.split(",")[0].trim() : active.role;

  const prev = () => setActiveIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setActiveIndex((current) => (current + 1) % items.length);

  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow={dictionary.testimonials.eyebrow}
          title={dictionary.testimonials.title}
          description={dictionary.testimonials.description}
        />
        <div className="relative mx-auto max-w-5xl">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text-secondary)] shadow-[var(--shadow-soft)] transition hover:text-[var(--text-primary)] md:-left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text-secondary)] shadow-[var(--shadow-soft)] transition hover:text-[var(--text-primary)] md:-right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Card className="relative overflow-hidden rounded-[24px]">
                <div className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full bg-[var(--accent-soft)]/70" />
                <CardContent className="p-7 md:p-10">
                  <Quote className="mb-3 h-10 w-10 text-[var(--accent-primary)]/35" />
                  <p className="max-w-4xl text-xl leading-relaxed text-[var(--text-primary)] md:text-[34px] md:leading-[1.35]">
                    {active.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-[#f59e0b]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-emerald-500 text-2xl font-semibold text-white">
                      {initials(active.name)}
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-[var(--text-primary)]">{active.name}</p>
                      <p className="text-lg text-[var(--text-secondary)]">
                        {title}, {company}
                      </p>
                      <p className="text-base font-medium text-[var(--accent-primary)]">{platformLabels[activeIndex % platformLabels.length]}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="mt-7 flex items-center justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-3 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-[var(--accent-primary)]" : "w-3 bg-[var(--border)]"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
