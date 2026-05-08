import { useEditor } from "./useEditor";
import { MultilangField } from "@/components/admin/MultilangField";
import { SaveBar } from "@/components/admin/SaveBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

export default function BenefitsEdit() {
  const { draft, update, save, busy, dirty } = useEditor();
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-display font-bold">Beneficios</h1>
        <Button variant="outline" onClick={() => update((d) => ({
          ...d,
          benefits: [...d.benefits, { icon: "Zap", title: { es: "", en: "", fr: "" }, description: { es: "", en: "", fr: "" } }],
        }))}>
          <Plus className="h-4 w-4 mr-1" /> Añadir
        </Button>
      </div>
      <div className="space-y-4">
        {draft.benefits.map((b, i) => (
          <div key={i} className="p-6 rounded-xl bg-card border border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-bold">Beneficio #{i + 1}</span>
              <Button variant="ghost" size="sm" onClick={() => update((d) => ({ ...d, benefits: d.benefits.filter((_, j) => j !== i) }))}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Icono (Zap, Target, TrendingUp)</Label>
              <Input value={b.icon} onChange={(e) => update((d) => { d.benefits[i].icon = e.target.value; return d; })} />
            </div>
            <MultilangField label="Título" value={b.title} onChange={(v) => update((d) => { d.benefits[i].title = v; return d; })} />
            <MultilangField label="Descripción" value={b.description} multiline onChange={(v) => update((d) => { d.benefits[i].description = v; return d; })} />
          </div>
        ))}
      </div>
      <SaveBar onSave={save} busy={busy} dirty={dirty} />
    </div>
  );
}
