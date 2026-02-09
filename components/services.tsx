"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Search, ShoppingCart, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import type { Dictionary } from "@/lib/i18n/types";

const icons = [Code2, ShoppingCart, Search, Palette, Wrench, ShieldCheck];

export function Services({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="services" className="py-20">
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
