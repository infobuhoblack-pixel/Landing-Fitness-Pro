import { useEditor } from "./useEditor";
import { MultilangField } from "@/components/admin/MultilangField";
import { SaveBar } from "@/components/admin/SaveBar";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

export default function FAQEdit() {
  const { draft, update, save, busy, dirty } = useEditor();
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-display font-bold">Preguntas frecuentes</h1>
        <Button variant="outline" onClick={() => update((d) => ({
          ...d, faq: [...d.faq, { question: { es: "", en: "", fr: "" }, answer: { es: "", en: "", fr: "" } }],
        }))}>
          <Plus className="h-4 w-4 mr-1" /> Añadir
        </Button>
      </div>
      <div className="space-y-4">
        {draft.faq.map((f, i) => (
          <div key={i} className="p-6 rounded-xl bg-card border border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-bold">FAQ #{i + 1}</span>
              <Button variant="ghost" size="sm" onClick={() => update((d) => ({ ...d, faq: d.faq.filter((_, j) => j !== i) }))}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <MultilangField label="Pregunta" value={f.question} onChange={(v) => update((d) => { d.faq[i].question = v; return d; })} />
            <MultilangField label="Respuesta" value={f.answer} multiline onChange={(v) => update((d) => { d.faq[i].answer = v; return d; })} />
          </div>
        ))}
      </div>
      <SaveBar onSave={save} busy={busy} dirty={dirty} />
    </div>
  );
}
