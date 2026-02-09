"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/types";

function parseStatValue(value: string) {
  const numericMatch = value.match(/[0-9]+([.,][0-9]+)?/);
  const numberPortion = numericMatch?.[0] ?? "0";
  const normalized = numberPortion.replace(",", ".");
  const target = Number.parseFloat(normalized);
  const decimals = normalized.includes(".") ? normalized.split(".")[1].length : 0;
  const index = value.indexOf(numberPortion);

  return {
    target: Number.isNaN(target) ? 0 : target,
    decimals,
    prefix: index > 0 ? value.slice(0, index) : "",
    suffix: index >= 0 ? value.slice(index + numberPortion.length) : "",
  };
}

function AnimatedStatValue({ value }: { value: string }) {
  const { target, decimals, prefix, suffix } = parseStatValue(value);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 1200;
    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(target * eased);
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return (
    <span>
      {prefix}
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function splitHeadline(title: string) {
  const parts = title.trim().split(/\s+/);
  if (parts.length <= 2) {
    return { first: "", accent: title };
  }
  return {
    first: parts.slice(0, -2).join(" "),
    accent: parts.slice(-2).join(" "),
  };
}

export function Hero({
  dictionary,
  onBookCall,
}: {
  dictionary: Dictionary;
  onBookCall: () => void;
}) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  const { first, accent } = splitHeadline(dictionary.hero.title);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    setTilt({
      rotateX: py * -8,
      rotateY: px * 10,
      x: px * 10,
      y: py * 8,
    });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-16 md:pt-24">
      <div className="hero-mesh absolute inset-0 -z-20" aria-hidden />
      <motion.div
        className="orb orb-a absolute -top-20 left-[6%] -z-10 h-56 w-56 rounded-full"
        animate={{ y: [0, 14, 0], x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-b absolute right-[10%] top-10 -z-10 h-44 w-44 rounded-full"
        animate={{ y: [0, -12, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
      <Container>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge>{dictionary.hero.badge}</Badge>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.06] tracking-tight text-[var(--text-primary)] md:text-7xl">
              {first ? `${first} ` : ""}
              <span className="bg-gradient-to-r from-[var(--accent-primary)] to-emerald-500 bg-clip-text text-transparent">{accent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] md:text-3xl/10">{dictionary.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={onBookCall}>
                {dictionary.hero.primaryCta}
              </Button>
              <a href="#work" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
                {dictionary.hero.secondaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div
            className="group relative mx-auto w-full max-w-[760px] perspective-[1400px]"
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
          >
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[22px] bg-gradient-to-r from-[var(--accent-primary)] to-emerald-500 shadow-[var(--shadow-hover)]" />
            <motion.div
              className="relative rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-hover)] md:p-8"
              animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
                x: tilt.x,
                y: tilt.y,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="rounded-2xl bg-[var(--surface)] p-4 md:p-5">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-[72%] rounded-full bg-emerald-200/80" />
                  <div className="h-3.5 w-[50%] rounded-full bg-slate-200" />
                  <div className="h-4 w-[62%] rounded-full bg-teal-200/80" />
                  <div className="mt-2 h-28 w-full rounded-xl bg-gradient-to-r from-emerald-100/85 to-teal-100/85 md:h-36" />
                  <div className="flex gap-2">
                    <div className="h-4 w-[45%] rounded-full bg-emerald-200/80" />
                    <div className="h-4 w-[38%] rounded-full bg-teal-200/80" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-3 sm:col-span-2 sm:grid-cols-3">
            {dictionary.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow-soft)]">
                <div className="text-3xl font-bold tracking-tight md:text-4xl">
                  <span className="bg-gradient-to-r from-[var(--accent-primary)] to-emerald-500 bg-clip-text text-transparent">
                    <AnimatedStatValue value={stat.value} />
                  </span>
                </div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
