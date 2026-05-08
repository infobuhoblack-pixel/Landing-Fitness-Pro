import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { Lang } from "@/lib/i18n";
import { SiteContent, defaultContent } from "@/lib/siteContent";
import { supabase } from "@/integrations/supabase/client";

interface SiteContextType {
  content: SiteContent;
  loading: boolean;
  saveContent: (next: SiteContent) => Promise<{ error: string | null }>;
  language: Lang;
  setLanguage: (lang: Lang) => void;
}

const SiteContext = createContext<SiteContextType>(null!);
export const useSite = () => useContext(SiteContext);

const LANG_KEY = "fitness-lang";

function mergeContent(saved: any): SiteContent {
  if (!saved || typeof saved !== "object" || Object.keys(saved).length === 0) return defaultContent;
  return { ...defaultContent, ...saved };
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [language, setLangState] = useState<Lang>(
    () => (localStorage.getItem(LANG_KEY) as Lang) || "es"
  );

  // Initial fetch
  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("content")
        .limit(1)
        .maybeSingle();
      if (mounted) {
        if (!error && data) setContent(mergeContent(data.content));
        setLoading(false);
      }
    })();

    // Realtime subscription so admin changes appear instantly
    const channel = supabase
      .channel("site_content_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "site_content" },
        (payload) => {
          const next = (payload.new as any)?.content;
          if (next) setContent(mergeContent(next));
        }
      )
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  const setLanguage = useCallback((lang: Lang) => {
    setLangState(lang);
    localStorage.setItem(LANG_KEY, lang);
  }, []);

  const saveContent = useCallback(async (next: SiteContent) => {
    // Get the singleton row id
    const { data: existing } = await supabase
      .from("site_content")
      .select("id")
      .limit(1)
      .maybeSingle();
    if (existing?.id) {
      const { error } = await supabase
        .from("site_content")
        .update({ content: next as any, updated_at: new Date().toISOString() })
        .eq("id", existing.id);
      if (error) return { error: error.message };
    } else {
      const { error } = await supabase.from("site_content").insert({ content: next as any });
      if (error) return { error: error.message };
    }
    setContent(next);
    return { error: null };
  }, []);

  return (
    <SiteContext.Provider value={{ content, loading, saveContent, language, setLanguage }}>
      {children}
    </SiteContext.Provider>
  );
}
