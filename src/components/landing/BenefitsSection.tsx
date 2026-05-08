import { useSite } from "@/contexts/SiteContext";
import { Zap, Target, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useRef } from "react";

const iconMap: Record<string, React.ComponentType<any>> = { Zap, Target, TrendingUp };

export function BenefitsSection() {
  const { content, language } = useSite();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-24 bg-card" id="beneficios">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient">
          {language === "es" ? "¿Por qué elegirnos?" : language === "en" ? "Why choose us?" : "Pourquoi nous choisir?"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {content.benefits.map((b, i) => {
            const Icon = iconMap[b.icon] || Zap;
            return (
              <div
                key={i}
                className={`p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group ${
                  inView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{b.title[language]}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.description[language]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
