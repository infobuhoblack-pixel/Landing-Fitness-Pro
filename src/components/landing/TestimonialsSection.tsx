import { useSite } from "@/contexts/SiteContext";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

export function TestimonialsSection() {
  const { content, language } = useSite();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-24" id="testimonios">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient">
          {language === "es" ? "Testimonios" : language === "en" ? "Testimonials" : "Témoignages"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {content.testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed italic">{t.text[language]}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="h-4 w-4 text-secondary fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
