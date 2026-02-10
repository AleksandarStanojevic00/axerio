"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Rocket, Search, ShoppingCart, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import type { Dictionary } from "@/lib/i18n/types";

const icons = [Code2, ShoppingCart, Search, Palette, Wrench, ShieldCheck];

export function Services({ dictionary }: { dictionary: Dictionary }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const launchRocket = useInView(sectionRef, { once: true, amount: 0.35 });

  return (
    <section id="services" className="relative overflow-hidden py-20" ref={sectionRef}>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-52 lg:block">
        <motion.svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          animate={launchRocket ? { opacity: 1 } : { opacity: 0 }}
        >
          <defs>
            <linearGradient id="rocketTrail" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(16,185,129,0)" />
              <stop offset="38%" stopColor="rgba(16,185,129,0.22)" />
              <stop offset="75%" stopColor="rgba(16,185,129,0.44)" />
              <stop offset="100%" stopColor="rgba(16,185,129,0.18)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M140 165 C 360 32, 620 90, 865 55 C 990 40, 1080 36, 1160 42"
            fill="none"
            stroke="url(#rocketTrail)"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={launchRocket ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
        </motion.svg>

        <motion.div
          className="absolute left-[9%] top-[138px] h-2 w-11 rounded-full bg-[var(--accent-primary)]/35 blur-[2px]"
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={launchRocket ? { opacity: [0, 0.95, 0], scaleX: [0.4, 1.45, 0.9] } : { opacity: 0, scaleX: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.div
          className="absolute left-[10%] top-[132px] text-[var(--accent-primary)]"
          initial={{ x: 0, y: 0, rotate: -25, opacity: 0 }}
          animate={
            launchRocket
              ? {
                  x: [0, 190, 420, 700, 930],
                  y: [0, -70, -98, -120, -120],
                  rotate: [-25, -12, -6, -2, 4],
                  opacity: [0, 1, 1, 1, 0],
                }
              : { x: 0, y: 0, rotate: -25, opacity: 0 }
          }
          transition={{ duration: 1.95, ease: [0.18, 0.8, 0.24, 1] }}
        >
          <div className="relative">
            <Rocket className="h-8 w-8 drop-shadow-[0_0_14px_rgba(16,185,129,0.42)]" />
            <motion.span
              className="absolute -left-5 top-1/2 h-2 w-5 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/80 blur-[1px]"
              animate={launchRocket ? { scaleX: [0.4, 1.55, 0.45], opacity: [0.3, 1, 0.2] } : { opacity: 0.2 }}
              transition={{ duration: 0.22, repeat: launchRocket ? 7 : 0 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute left-[9.2%] top-[132px] h-12 w-12 rounded-full bg-[var(--accent-primary)]/15 blur-xl"
          initial={{ opacity: 0 }}
          animate={launchRocket ? { opacity: [0, 0.65, 0] } : { opacity: 0 }}
          transition={{ duration: 0.9 }}
        />
      </div>
      <Container>
        <SectionHeader
          eyebrow={dictionary.services.eyebrow}
          title={dictionary.services.title}
          description={dictionary.services.description}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dictionary.services.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div key={item.title} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="h-full">
                  <CardContent>
                    <div className="mb-4 inline-flex rounded-xl bg-[var(--surface)] p-2">
                      <Icon className="h-5 w-5 text-[var(--accent-primary)]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
