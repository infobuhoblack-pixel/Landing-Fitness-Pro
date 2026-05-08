import { useSite } from "@/contexts/SiteContext";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function ProgramsSection() {
  const { content, language } = useSite();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-24" id="programas">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient">
          {language === "es" ? "Nuestros Programas" : language === "en" ? "Our Programs" : "Nos Programmes"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {content.programs.map((p, i) => (
            <div
              key={i}
              className={cn(
                "relative p-8 rounded-2xl border transition-all duration-300",
                p.highlighted
                  ? "bg-gradient-to-b from-primary/10 to-background border-primary shadow-glow md:scale-105"
                  : "bg-card border-border/50 hover:border-primary/30",
                inView ? "animate-fade-in-up" : "opacity-0"
              )}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {p.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 text-primary-foreground fill-current" />
                  <span className="text-sm font-bold text-primary-foreground">Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-display font-bold mb-2">{p.name[language]}</h3>
              <p className="text-4xl font-display font-bold text-primary mb-6">{p.price}</p>
              <ul className="space-y-3 mb-8">
                {p.features[language].split("\n").map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={p.ctaUrl} className="block">
                <Button variant={p.highlighted ? "hero" : "cta"} className="w-full">
                  {p.cta[language]}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
