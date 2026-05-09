import { useSite } from "@/contexts/SiteContext";
import { EditableText } from "./EditableText";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function ProgramsSection() {
  const { content, setContent, language, editMode } = useSite();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-24" id="programas">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient">
          {language === "es" ? "Nuestros Programas" : language === "en" ? "Our Programs" : "Nos Programmes"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {content.programs.map((program, i) => (
            <div
              key={i}
              className={cn(
                "relative p-8 rounded-2xl border transition-all duration-300",
                program.highlighted
                  ? "bg-gradient-to-b from-primary/10 to-background border-primary shadow-glow md:scale-105"
                  : "bg-card border-border/50 hover:border-primary/30",
                inView ? "animate-fade-in-up" : "opacity-0"
              )}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {program.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 text-primary-foreground fill-current" />
                  <span className="text-sm font-bold text-primary-foreground">
                    {language === "es" ? "Popular" : "Popular"}
                  </span>
                </div>
              )}

              <EditableText
                value={program.name[language]}
                onSave={(v) => {
                  const p = [...content.programs];
                  p[i] = { ...p[i], name: { ...p[i].name, [language]: v } };
                  setContent((prev) => ({ ...prev, programs: p }));
                }}
                as="h3"
                className="text-2xl font-display font-bold mb-2"
              />

              {editMode ? (
                <input
                  value={program.price}
                  onChange={(e) => {
                    const p = [...content.programs];
                    p[i] = { ...p[i], price: e.target.value };
                    setContent((prev) => ({ ...prev, programs: p }));
                  }}
                  className="text-4xl font-display font-bold text-primary bg-transparent border-b border-primary/50 mb-6 w-full editable-highlight"
                />
              ) : (
                <p className="text-4xl font-display font-bold text-primary mb-6">{program.price}</p>
              )}

              <ul className="space-y-3 mb-8">
                {program.features[language].split("\n").map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {editMode ? (
                <div className="space-y-2">
                  <Button variant={program.highlighted ? "hero" : "cta"} className="w-full">
                    {program.cta[language]}
                  </Button>
                  <input
                    value={program.ctaUrl}
                    onChange={(e) => {
                      const p = [...content.programs];
                      p[i] = { ...p[i], ctaUrl: e.target.value };
                      setContent((prev) => ({ ...prev, programs: p }));
                    }}
                    className="w-full bg-muted text-foreground border border-border rounded px-3 py-1 text-sm text-center"
                    placeholder="URL"
                  />
                </div>
              ) : (
                <a href={program.ctaUrl} className="block">
                  <Button variant={program.highlighted ? "hero" : "cta"} className="w-full">
                    {program.cta[language]}
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
