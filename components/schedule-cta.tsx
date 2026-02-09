"use client";

import { CalendarClock } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/lib/i18n/types";

export function ScheduleCta({
  dictionary,
  onBookCall,
}: {
  dictionary: Dictionary;
  onBookCall: () => void;
}) {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:flex md:items-center md:justify-between md:p-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">{dictionary.schedule.title}</h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{dictionary.schedule.description}</p>
          </div>
          <Button className="mt-4 md:mt-0" onClick={onBookCall}>
            <CalendarClock className="mr-2 h-4 w-4" />
            {dictionary.schedule.button}
          </Button>
        </div>
      </Container>
    </section>
  );
}
