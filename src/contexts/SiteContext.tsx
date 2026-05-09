import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { Lang } from "@/lib/i18n";
import { SiteContent, defaultContent } from "@/lib/siteContent";

interface SiteContextType {
  content: SiteContent;
  setContent: React.Dispatch<React.SetStateAction<SiteContent>>;
  resetContent: () => void;
  language: Lang;
  setLanguage: (lang: Lang) => void;
  editMode: boolean;
  setEditMode: (mode: boolean) => void;
}

const SiteContext = createContext<SiteContextType>(null!);

export const useSite = () => useContext(SiteContext);

const STORAGE_KEY = "fitness-site-content";
const LANG_KEY = "fitness-lang";

function loadContent(): SiteContent {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultContent, ...parsed };
    }
  } catch {
    // ignore
  }
  return defaultContent;
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(loadContent);
  const [language, setLangState] = useState<Lang>(
    () => (localStorage.getItem(LANG_KEY) as Lang) || "es"
  );
  const [editMode, setEditMode] = useState(false);

  const setContent: React.Dispatch<React.SetStateAction<SiteContent>> = useCallback((action) => {
    setContentState((prev) => {
      const next = typeof action === "function" ? action(prev) : action;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const setLanguage = useCallback((lang: Lang) => {
    setLangState(lang);
    localStorage.setItem(LANG_KEY, lang);
  }, []);

  const resetContent = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setContentState(defaultContent);
  }, []);

  return (
    <SiteContext.Provider
      value={{ content, setContent, resetContent, language, setLanguage, editMode, setEditMode }}
    >
      {children}
    </SiteContext.Provider>
  );
}
