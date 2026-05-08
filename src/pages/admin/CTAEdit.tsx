import { useEditor } from "./useEditor";
import { MultilangField } from "@/components/admin/MultilangField";
import { SaveBar } from "@/components/admin/SaveBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CTAEdit() {
  const { draft, update, save, busy, dirty } = useEditor();
  const c = draft.ctaFinal;
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-3xl font-display font-bold">CTA Final</h1>
      <div className="space-y-5 p-6 rounded-xl bg-card border border-border">
        <MultilangField label="Título" value={c.title} onChange={(v) => update((d) => ({ ...d, ctaFinal: { ...d.ctaFinal, title: v } }))} />
        <MultilangField label="Subtítulo" value={c.subtitle} multiline onChange={(v) => update((d) => ({ ...d, ctaFinal: { ...d.ctaFinal, subtitle: v } }))} />
        <MultilangField label="Texto botón" value={c.cta} onChange={(v) => update((d) => ({ ...d, ctaFinal: { ...d.ctaFinal, cta: v } }))} />
        <div className="space-y-2">
          <Label>URL botón (ej. WhatsApp)</Label>
          <Input value={c.ctaUrl} onChange={(e) => update((d) => ({ ...d, ctaFinal: { ...d.ctaFinal, ctaUrl: e.target.value } }))} />
        </div>
      </div>
      <SaveBar onSave={save} busy={busy} dirty={dirty} />
    </div>
  );
}
