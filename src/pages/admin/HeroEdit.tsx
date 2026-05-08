import { useEditor } from "./useEditor";
import { MultilangField } from "@/components/admin/MultilangField";
import { SaveBar } from "@/components/admin/SaveBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HeroEdit() {
  const { draft, update, save, busy, dirty } = useEditor();
  const h = draft.hero;
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-3xl font-display font-bold">Sección Hero</h1>
      <div className="space-y-5 p-6 rounded-xl bg-card border border-border">
        <MultilangField label="Título" value={h.title} onChange={(v) => update((d) => ({ ...d, hero: { ...d.hero, title: v } }))} />
        <MultilangField label="Subtítulo" value={h.subtitle} multiline onChange={(v) => update((d) => ({ ...d, hero: { ...d.hero, subtitle: v } }))} />
        <MultilangField label="Texto del botón" value={h.cta} onChange={(v) => update((d) => ({ ...d, hero: { ...d.hero, cta: v } }))} />
        <div className="space-y-2">
          <Label>URL del botón</Label>
          <Input value={h.ctaUrl} onChange={(e) => update((d) => ({ ...d, hero: { ...d.hero, ctaUrl: e.target.value } }))} />
        </div>
        <div className="space-y-2">
          <Label>URL imagen de fondo</Label>
          <Input value={h.image} onChange={(e) => update((d) => ({ ...d, hero: { ...d.hero, image: e.target.value } }))} />
          {h.image && <img src={h.image} alt="preview" className="mt-2 max-h-48 rounded-lg object-cover" />}
        </div>
      </div>
      <SaveBar onSave={save} busy={busy} dirty={dirty} />
    </div>
  );
}
