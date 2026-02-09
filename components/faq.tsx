"use client";

import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Dictionary } from "@/lib/i18n/types";

export default function FAQ({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="faq" className="py-20">
      <Container>
        <SectionHeader eyebrow={dictionary.faq.eyebrow} title={dictionary.faq.title} description={dictionary.faq.description} />
        <Accordion type="single" collapsible className="space-y-3">
          {dictionary.faq.items.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
