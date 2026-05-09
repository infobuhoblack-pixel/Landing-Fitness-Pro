import { useSite } from "@/contexts/SiteContext";
import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

export function FooterSection() {
  const { content, setContent, language, editMode } = useSite();
  const footer = content.footer;

  const updateFooter = (key: string, value: string) => {
    setContent((prev) => ({ ...prev, footer: { ...prev.footer, [key]: value } }));
  };

  return (
    <footer className="py-16 bg-card border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
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

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">
              {language === "es" ? "Contacto" : "Contact"}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                {editMode ? (
                  <input
                    value={footer.email}
                    onChange={(e) => updateFooter("email", e.target.value)}
                    className="bg-transparent border-b border-border text-foreground text-sm"
                  />
                ) : (
                  <a href={`mailto:${footer.email}`} className="hover:text-primary transition-colors">
                    {footer.email}
                  </a>
                )}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                {editMode ? (
                  <input
                    value={footer.phone}
                    onChange={(e) => updateFooter("phone", e.target.value)}
                    className="bg-transparent border-b border-border text-foreground text-sm"
                  />
                ) : (
                  <span>{footer.phone}</span>
                )}
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">
              {language === "es" ? "Redes Sociales" : language === "en" ? "Social Media" : "Réseaux Sociaux"}
            </h4>
            <div className="flex gap-4">
              {([
                { icon: Instagram, key: "instagram" as const },
                { icon: Facebook, key: "facebook" as const },
                { icon: Youtube, key: "youtube" as const },
              ] as const).map(({ icon: Icon, key }) => (
                <div key={key}>
                  {editMode ? (
                    <div className="flex flex-col gap-1">
                      <Icon className="h-6 w-6 text-primary" />
                      <input
                        value={footer[key]}
                        onChange={(e) => updateFooter(key, e.target.value)}
                        className="bg-transparent border-b border-border text-foreground text-xs w-32"
                      />
                    </div>
                  ) : (
                    <a
                      href={footer[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          © 2026 Fitness Pro.{" "}
          {language === "es"
            ? "Todos los derechos reservados."
            : language === "en"
            ? "All rights reserved."
            : "Tous droits réservés."}
        </div>
      </div>
    </footer>
  );
}
