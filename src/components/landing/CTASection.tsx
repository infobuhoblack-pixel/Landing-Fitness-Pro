import { useSite } from "@/contexts/SiteContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const { content, language } = useSite();
  const cta = content.ctaFinal;

  return (
    <section className="py-24 relative overflow-hidden" id="contacto">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gradient">{cta.title[language]}</h2>
          <p className="text-xl text-muted-foreground">{cta.subtitle[language]}</p>
          <div className="pt-4">
            <a href={cta.ctaUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="animate-glow-pulse">
                {cta.cta[language]}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
