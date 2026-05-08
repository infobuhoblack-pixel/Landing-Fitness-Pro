import { useEditor } from "./useEditor";
import { MultilangField } from "@/components/admin/MultilangField";
import { SaveBar } from "@/components/admin/SaveBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

export default function TestimonialsEdit() {
  const { draft, update, save, busy, dirty } = useEditor();
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-display font-bold">Testimonios</h1>
        <Button variant="outline" onClick={() => update((d) => ({
          ...d, testimonials: [...d.testimonials, { name: "", initials: "??", text: { es: "", en: "", fr: "" }, rating: 5 }],
        }))}>
          <Plus className="h-4 w-4 mr-1" /> Añadir
        </Button>
      </div>
      <div className="space-y-4">
        {draft.testimonials.map((t, i) => (
          <div key={i} className="p-6 rounded-xl bg-card border border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-bold">Testimonio #{i + 1}</span>
              <Button variant="ghost" size="sm" onClick={() => update((d) => ({ ...d, testimonials: d.testimonials.filter((_, j) => j !== i) }))}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="space-y-2 sm:col-span-2">
                <Label>Nombre</Label>
                <Input value={t.name} onChange={(e) => update((d) => { d.testimonials[i].name = e.target.value; return d; })} />
              </div>
              <div className="space-y-2">
                <Label>Iniciales</Label>
                <Input value={t.initials} maxLength={3} onChange={(e) => update((d) => { d.testimonials[i].initials = e.target.value; return d; })} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Estrellas (1-5)</Label>
              <Input type="number" min={1} max={5} value={t.rating}
                onChange={(e) => update((d) => { d.testimonials[i].rating = Math.max(1, Math.min(5, +e.target.value || 5)); return d; })} />
            </div>
            <MultilangField label="Texto" value={t.text} multiline onChange={(v) => update((d) => { d.testimonials[i].text = v; return d; })} />
          </div>
        ))}
      </div>
      <SaveBar onSave={save} busy={busy} dirty={dirty} />
    </div>
  );
}
