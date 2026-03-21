import { useSite } from "@/contexts/SiteContext";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { useInView } from "@/hooks/useInView";

export function GallerySection() {
  const { content, setContent, language, editMode } = useSite();
  const [newImageUrl, setNewImageUrl] = useState("");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  const addImage = () => {
    if (!newImageUrl) return;
    setContent((prev) => ({
      ...prev,
      gallery: [...prev.gallery, { src: newImageUrl, alt: "Gallery image" }],
    }));
    setNewImageUrl("");
  };

  const removeImage = (index: number) => {
    setContent((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index),
    }));
  };

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
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {editMode && (
                <button
                  onClick={() => removeImage(i)}
                  className="absolute top-3 right-3 bg-destructive text-destructive-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {editMode && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <input
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              placeholder="URL de imagen..."
              className="bg-muted text-foreground border border-border rounded-lg px-4 py-2 w-80"
              onKeyDown={(e) => e.key === "Enter" && addImage()}
            />
            <Button variant="cta" onClick={addImage}>
              <Plus className="h-4 w-4 mr-1" />
              {language === "es" ? "Añadir" : language === "en" ? "Add" : "Ajouter"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
