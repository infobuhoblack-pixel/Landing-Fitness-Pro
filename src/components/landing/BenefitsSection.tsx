import { useSite } from "@/contexts/SiteContext";
import { EditableText } from "./EditableText";
import { Zap, Target, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useRef } from "react";

const iconMap: Record<string, React.ComponentType<any>> = { Zap, Target, TrendingUp };

export function BenefitsSection() {
  const { content, setContent, language } = useSite();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-24 bg-card" id="beneficios">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient">
          {language === "es" ? "¿Por qué elegirnos?" : language === "en" ? "Why choose us?" : "Pourquoi nous choisir?"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {content.benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] || Zap;
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
                <EditableText
                  value={benefit.title[language]}
                  onSave={(v) => {
                    const newBenefits = [...content.benefits];
                    newBenefits[i] = { ...newBenefits[i], title: { ...newBenefits[i].title, [language]: v } };
                    setContent((prev) => ({ ...prev, benefits: newBenefits }));
                  }}
                  as="h3"
                  className="text-2xl font-display font-bold mb-3"
                />
                <EditableText
                  value={benefit.description[language]}
                  onSave={(v) => {
                    const newBenefits = [...content.benefits];
                    newBenefits[i] = { ...newBenefits[i], description: { ...newBenefits[i].description, [language]: v } };
                    setContent((prev) => ({ ...prev, benefits: newBenefits }));
                  }}
                  as="p"
                  className="text-muted-foreground leading-relaxed"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
