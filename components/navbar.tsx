"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/container";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionIds = ["services", "work", "process", "pricing", "faq", "contact"] as const;

export function Navbar({ onBookCall }: { onBookCall: () => void }) {
  const { dictionary } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    dictionary.nav.services,
    dictionary.nav.work,
    dictionary.nav.process,
    dictionary.nav.pricing,
    dictionary.nav.faq,
    dictionary.nav.contact,
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background-rgb)]/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
          Axerio
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((label, index) => (
            <a
              key={sectionIds[index]}
              href={`#${sectionIds[index]}`}
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle label={dictionary.languageLabel} />
          <ThemeToggle label={dictionary.themeLabel} />
          <Button onClick={onBookCall}>{dictionary.nav.bookCall}</Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle label={dictionary.themeLabel} />
          <Button variant="ghost" size="sm" onClick={() => setMobileOpen((prev) => !prev)} aria-expanded={mobileOpen} aria-controls="mobile-nav">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </Container>
      <div
        id="mobile-nav"
        className={cn(
          "border-t border-[var(--border)] bg-[var(--background)] transition-all lg:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        )}
      >
        <Container className="flex flex-col gap-2 py-4">
          {links.map((label, index) => (
            <a
              key={sectionIds[index]}
              href={`#${sectionIds[index]}`}
              className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <LanguageToggle label={dictionary.languageLabel} />
          <Button onClick={onBookCall}>{dictionary.nav.bookCall}</Button>
        </Container>
      </div>
    </header>
  );
}
