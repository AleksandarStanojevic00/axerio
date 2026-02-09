"use client";

import Link from "next/link";
import { Dribbble, Instagram, Linkedin } from "lucide-react";
import { Container } from "@/components/container";
import type { Dictionary } from "@/lib/i18n/types";

export function Footer({ dictionary }: { dictionary: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-[var(--text-primary)]">{dictionary.footer.brand}</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">{dictionary.footer.statement}</p>
          <p className="mt-2 text-xs text-[var(--text-secondary)]">
            {year} {dictionary.footer.brand}. {dictionary.footer.rights}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            {dictionary.footer.links.privacy}
          </Link>
          <Link href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            {dictionary.footer.links.terms}
          </Link>
          <a href="#" aria-label={dictionary.footer.links.linkedin} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" aria-label={dictionary.footer.links.instagram} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label={dictionary.footer.links.dribbble} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            <Dribbble className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
