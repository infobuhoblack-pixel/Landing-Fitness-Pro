import { useSite } from "@/contexts/SiteContext";
import { EditableText } from "./EditableText";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const { content, setContent, language, editMode } = useSite();
  const cta = content.ctaFinal;

  return (
    <section className="py-24 relative overflow-hidden" id="contacto">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <EditableText
            value={cta.title[language]}
            onSave={(v) =>
              setContent((prev) => ({
                ...prev,
                ctaFinal: { ...prev.ctaFinal, title: { ...prev.ctaFinal.title, [language]: v } },
              }))
            }
            as="h2"
            className="text-4xl md:text-6xl font-display font-bold text-gradient"
          />
          <EditableText
            value={cta.subtitle[language]}
            onSave={(v) =>
              setContent((prev) => ({
                ...prev,
                ctaFinal: { ...prev.ctaFinal, subtitle: { ...prev.ctaFinal.subtitle, [language]: v } },
              }))
            }
            as="p"
            className="text-xl text-muted-foreground"
          />
          <div className="pt-4">
            {editMode ? (
              <div className="flex flex-col items-center gap-2">
                <Button variant="hero" size="xl">
                  {cta.cta[language]}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <input
                  value={cta.ctaUrl}
                  onChange={(e) =>
                    setContent((prev) => ({
                      ...prev,
                      ctaFinal: { ...prev.ctaFinal, ctaUrl: e.target.value },
                    }))
                  }
                  className="bg-muted text-foreground border border-border rounded px-3 py-1 text-sm w-64 text-center"
                  placeholder="URL"
                />
              </div>
            ) : (
              <a href={cta.ctaUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="animate-glow-pulse">
                  {cta.cta[language]}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
