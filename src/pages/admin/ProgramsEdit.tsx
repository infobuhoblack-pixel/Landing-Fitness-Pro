import { useEditor } from "./useEditor";
import { MultilangField } from "@/components/admin/MultilangField";
import { SaveBar } from "@/components/admin/SaveBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2 } from "lucide-react";

export default function ProgramsEdit() {
  const { draft, update, save, busy, dirty } = useEditor();
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-display font-bold">Programas</h1>
        <Button variant="outline" onClick={() => update((d) => ({
          ...d,
          programs: [...d.programs, {
            name: { es: "", en: "", fr: "" }, price: "€0/mes",
            features: { es: "", en: "", fr: "" }, cta: { es: "Elegir", en: "Choose", fr: "Choisir" },
            ctaUrl: "#contacto", highlighted: false,
          }],
        }))}>
          <Plus className="h-4 w-4 mr-1" /> Añadir
        </Button>
      </div>
      <div className="space-y-4">
        {draft.programs.map((p, i) => (
          <div key={i} className="p-6 rounded-xl bg-card border border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-bold">Plan #{i + 1}</span>
              <Button variant="ghost" size="sm" onClick={() => update((d) => ({ ...d, programs: d.programs.filter((_, j) => j !== i) }))}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <MultilangField label="Nombre" value={p.name} onChange={(v) => update((d) => { d.programs[i].name = v; return d; })} />
            <div className="space-y-2">
              <Label>Precio</Label>
              <Input value={p.price} onChange={(e) => update((d) => { d.programs[i].price = e.target.value; return d; })} />
            </div>
            <MultilangField label="Características (una por línea)" value={p.features} multiline rows={4}
              onChange={(v) => update((d) => { d.programs[i].features = v; return d; })} />
            <MultilangField label="Texto botón" value={p.cta} onChange={(v) => update((d) => { d.programs[i].cta = v; return d; })} />
            <div className="space-y-2">
              <Label>URL botón</Label>
              <Input value={p.ctaUrl} onChange={(e) => update((d) => { d.programs[i].ctaUrl = e.target.value; return d; })} />
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={p.highlighted} onCheckedChange={(c) => update((d) => { d.programs[i].highlighted = c; return d; })} />
              <Label>Destacar como popular</Label>
            </div>
          </div>
        ))}
      </div>
      <SaveBar onSave={save} busy={busy} dirty={dirty} />
    </div>
  );
}
