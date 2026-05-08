import { useSite } from "@/contexts/SiteContext";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

export function GallerySection() {
  const { content, language } = useSite();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-24 bg-card" id="galeria">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient">
          {language === "es" ? "Galería" : language === "en" ? "Gallery" : "Galerie"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.gallery.map((img, i) => (
            <div
              key={i}
              className={`relative group rounded-2xl overflow-hidden aspect-square ${
                inView ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
