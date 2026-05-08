import { useSite } from "@/contexts/SiteContext";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const { content, language } = useSite();
  const hero = content.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero.image} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-gradient animate-fade-in-up">
            {hero.title[language]}
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: "200ms" }}
          >
            {hero.subtitle[language]}
          </p>
          <div className="animate-fade-in-up opacity-0 pt-4" style={{ animationDelay: "400ms" }}>
            <a href={hero.ctaUrl}>
              <Button variant="hero" size="xl" className="animate-glow-pulse">
                {hero.cta[language]}
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
}
