import React, { createContext, useContext, useEffect, useState } from "react";
import { getSiteContent, Language, SiteContent } from "../content/siteContent";

const STORAGE_KEY = "site-language";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: SiteContent;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "he" ? "he" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  useEffect(() => {
    document.documentElement.lang = language === "he" ? "he" : "en";
    document.documentElement.dir = language === "he" ? "rtl" : "ltr";
    document.documentElement.classList.toggle("rtl", language === "he");
  }, [language]);

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t: getSiteContent(language),
    isRtl: language === "he",
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
