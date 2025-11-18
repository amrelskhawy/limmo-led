import { createContext, useContext, useState, useEffect } from "react";
import type { Language, Translations } from "./index";
import { en } from "./translations/en";
import { ar } from "./translations/ar";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
  dir: string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations = { en, ar };

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // Update CSS variables for RTL
    document.documentElement.style.setProperty(
      "--reading-direction",
      lang === "ar" ? "rtl" : "ltr"
    );
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLanguage(savedLang);
    } else {
      // Auto-detect language from browser
      const browserLang = navigator.language.toLowerCase();
      const detectedLang = browserLang.startsWith("ar") ? "ar" : "en";
      setLanguage(detectedLang);
    }
  }, []);

  const isRTL = language === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language],
    isRTL,
    dir,
  };

  return (
    <I18nContext.Provider value={value}>
      <div dir={dir} className={isRTL ? "rtl" : "ltr"}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within I18nProvider");
  }
  return context;
}
