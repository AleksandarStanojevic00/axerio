"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export function LanguageToggle({ label }: { label: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1" aria-label={label}>
      <Button
        size="sm"
        variant={language === "en" ? "default" : "ghost"}
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </Button>
      <Button
        size="sm"
        variant={language === "sr" ? "default" : "ghost"}
        onClick={() => setLanguage("sr")}
        aria-pressed={language === "sr"}
      >
        SR
      </Button>
    </div>
  );
}
