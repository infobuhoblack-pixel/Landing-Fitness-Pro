import { useEditor } from "./useEditor";
import { SaveBar } from "@/components/admin/SaveBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FooterEdit() {
  const { draft, update, save, busy, dirty } = useEditor();
  const f = draft.footer;
  const fields: Array<{ key: keyof typeof f; label: string }> = [
    { key: "email", label: "Email" },
    { key: "phone", label: "Teléfono" },
    { key: "instagram", label: "Instagram URL" },
    { key: "facebook", label: "Facebook URL" },
    { key: "youtube", label: "YouTube URL" },
  ];
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-display font-bold">Footer</h1>
      <div className="space-y-4 p-6 rounded-xl bg-card border border-border">
        {fields.map(({ key, label }) => (
          <div key={key} className="space-y-2">
            <Label>{label}</Label>
            <Input value={f[key]} onChange={(e) => update((d) => ({ ...d, footer: { ...d.footer, [key]: e.target.value } }))} />
          </div>
        ))}
      </div>
      <SaveBar onSave={save} busy={busy} dirty={dirty} />
    </div>
  );
}
