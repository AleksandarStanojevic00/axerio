"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/types";

export default function Pricing({
  dictionary,
  onBookCall,
}: {
  dictionary: Dictionary;
  onBookCall: () => void;
}) {
  return (
    <section id="pricing" className="py-20">
      <Container>
        <SectionHeader eyebrow={dictionary.pricing.eyebrow} title={dictionary.pricing.title} description={dictionary.pricing.description} />
        <div className="grid gap-4 lg:grid-cols-3">
          {dictionary.pricing.tiers.map((tier) => (
            <motion.div key={tier.name} whileHover={{ y: -3 }}>
              <Card className={cn(tier.featured ? "border-[var(--accent-primary)]" : "", "h-full")}>
                <CardContent className="flex h-full flex-col">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">{tier.name}</h3>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)]">{tier.price}</p>
                  <p className="mt-3 text-sm text-[var(--text-secondary)]">{tier.description}</p>
                  <ul className="mt-5 space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Check className="mt-0.5 h-4 w-4 text-[var(--accent-primary)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6" variant={tier.featured ? "default" : "secondary"} onClick={onBookCall}>
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
