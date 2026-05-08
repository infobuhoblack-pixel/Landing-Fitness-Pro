import { useSite } from "@/contexts/SiteContext";
import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

export function FooterSection() {
  const { content, language } = useSite();
  const footer = content.footer;

  return (
    <footer className="py-16 bg-card border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient mb-4">FITNESS PRO</h3>
            <p className="text-muted-foreground">
              {language === "es"
                ? "Tu transformación empieza aquí."
                : language === "en"
                ? "Your transformation starts here."
                : "Ta transformation commence ici."}
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold mb-4">{language === "es" ? "Contacto" : "Contact"}</h4>
            <div className="space-y-3">
              <a href={`mailto:${footer.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                {footer.email}
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>{footer.phone}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold mb-4">
              {language === "es" ? "Redes Sociales" : language === "en" ? "Social Media" : "Réseaux Sociaux"}
            </h4>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, url: footer.instagram, label: "Instagram" },
                { Icon: Facebook, url: footer.facebook, label: "Facebook" },
                { Icon: Youtube, url: footer.youtube, label: "YouTube" },
              ].map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          © 2026 Fitness Pro. {language === "es" ? "Todos los derechos reservados." : language === "en" ? "All rights reserved." : "Tous droits réservés."}
        </div>
      </div>
    </footer>
  );
}
