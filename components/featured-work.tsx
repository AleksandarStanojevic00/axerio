"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Dictionary } from "@/lib/i18n/types";

export function FeaturedWork({ dictionary }: { dictionary: Dictionary }) {
  const previews = ["/work-finpulse.svg", "/work-orion.svg", "/work-medgrid.svg", "/work-vanta.svg"];

  return (
    <section id="work" className="py-20">
      <Container>
        <SectionHeader eyebrow={dictionary.work.eyebrow} title={dictionary.work.title} description={dictionary.work.description} />
        <div className="grid gap-4 md:grid-cols-2">
          {dictionary.work.cases.map((item, index) => (
            <motion.div key={item.name} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card>
                <Image
                  src={previews[index % previews.length]}
                  alt={`${item.name} preview`}
                  width={1200}
                  height={700}
                  className="h-44 w-full rounded-t-3xl object-cover"
                />
                <CardContent>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">{item.name}</h3>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.industry}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[var(--text-secondary)]" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{item.outcome}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
