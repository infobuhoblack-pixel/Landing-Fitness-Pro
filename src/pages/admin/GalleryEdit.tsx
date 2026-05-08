import { useEditor } from "./useEditor";
import { SaveBar } from "@/components/admin/SaveBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

export default function GalleryEdit() {
  const { draft, update, save, busy, dirty } = useEditor();
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-display font-bold">Galería</h1>
        <Button variant="outline" onClick={() => update((d) => ({ ...d, gallery: [...d.gallery, { src: "", alt: "Imagen" }] }))}>
          <Plus className="h-4 w-4 mr-1" /> Añadir
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {draft.gallery.map((img, i) => (
          <div key={i} className="p-4 rounded-xl bg-card border border-border space-y-3">
            {img.src && <img src={img.src} alt={img.alt} className="w-full aspect-video object-cover rounded-lg" />}
            <div className="space-y-2">
              <Label>URL de la imagen / GIF</Label>
              <Input value={img.src} onChange={(e) => update((d) => { d.gallery[i].src = e.target.value; return d; })} placeholder="https://..." />
            </div>
            <div className="space-y-2">
              <Label>Texto alternativo</Label>
              <Input value={img.alt} onChange={(e) => update((d) => { d.gallery[i].alt = e.target.value; return d; })} />
            </div>
            <Button variant="ghost" size="sm" onClick={() => update((d) => ({ ...d, gallery: d.gallery.filter((_, j) => j !== i) }))}>
              <Trash2 className="h-4 w-4 mr-1" /> Eliminar
            </Button>
          </div>
        ))}
      </div>
      <SaveBar onSave={save} busy={busy} dirty={dirty} />
    </div>
  );
}
