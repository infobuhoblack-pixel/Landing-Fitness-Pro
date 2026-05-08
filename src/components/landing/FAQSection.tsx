import { useSite } from "@/contexts/SiteContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
  const { content, language } = useSite();
  return (
    <section className="py-24 bg-card" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient">
          {language === "es" ? "Preguntas frecuentes" : language === "en" ? "FAQ" : "Questions fréquentes"}
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {content.faq.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-xl px-6 bg-background">
              <AccordionTrigger className="text-left font-display font-bold text-lg">
                {f.question[language]}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.answer[language]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
