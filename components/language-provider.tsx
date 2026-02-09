"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { dictionaries } from "@/lib/i18n/dictionaries";
import type { Dictionary, Language } from "@/lib/i18n/types";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  dictionary: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "axerio-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === "en" || stored === "sr") {
      return stored;
    }

    const browser = navigator.language.toLowerCase();
    if (browser.startsWith("sr")) {
      return "sr";
    }
    return "en";
  });

  const handleSetLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage: handleSetLanguage,
      dictionary: dictionaries[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
