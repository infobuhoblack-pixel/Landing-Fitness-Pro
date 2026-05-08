import { Link } from "react-router-dom";
import { useSite } from "@/contexts/SiteContext";
import { Sparkles, Layers, Image as ImageIcon, MessageSquare, HelpCircle, Megaphone, Phone } from "lucide-react";

const cards = [
  { title: "Hero", url: "/admin/hero", icon: Sparkles, desc: "Título principal y CTA" },
  { title: "Beneficios", url: "/admin/benefits", icon: Layers, desc: "Por qué elegirnos" },
  { title: "Programas", url: "/admin/programs", icon: Layers, desc: "Planes y precios" },
  { title: "Galería", url: "/admin/gallery", icon: ImageIcon, desc: "Imágenes" },
  { title: "Testimonios", url: "/admin/testimonials", icon: MessageSquare, desc: "Opiniones de clientes" },
  { title: "FAQ", url: "/admin/faq", icon: HelpCircle, desc: "Preguntas frecuentes" },
  { title: "CTA Final", url: "/admin/cta", icon: Megaphone, desc: "Bloque de cierre" },
  { title: "Footer", url: "/admin/footer", icon: Phone, desc: "Contacto y redes" },
];

export default function Dashboard() {
  const { content } = useSite();
  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-3xl font-display font-bold text-gradient">Bienvenido</h1>
        <p className="text-muted-foreground">Gestiona el contenido del sitio en vivo. Los cambios se publican al instante.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <Link key={c.url} to={c.url} className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <c.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-lg">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </Link>
        ))}
      </div>
      <div className="text-xs text-muted-foreground">
        Secciones cargadas: {content.benefits.length} beneficios · {content.programs.length} programas · {content.gallery.length} imágenes · {content.testimonials.length} testimonios · {content.faq.length} FAQs
      </div>
    </div>
  );
}
