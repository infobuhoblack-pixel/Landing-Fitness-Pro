import { Lang, allLangs, langLabels } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Props {
  label: string;
  value: Record<Lang, string>;
  onChange: (v: Record<Lang, string>) => void;
  multiline?: boolean;
  rows?: number;
}

export function MultilangField({ label, value, onChange, multiline, rows = 3 }: Props) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-bold">{label}</Label>
      <div className="grid gap-2">
        {allLangs.map((l) => (
          <div key={l} className="flex gap-2 items-start">
            <span className="mt-2 inline-flex items-center justify-center w-12 h-8 rounded bg-muted text-xs font-bold uppercase shrink-0">
              {langLabels[l]}
            </span>
            {multiline ? (
              <Textarea
                value={value?.[l] || ""}
                onChange={(e) => onChange({ ...value, [l]: e.target.value })}
                rows={rows}
                className="flex-1"
              />
            ) : (
              <Input
                value={value?.[l] || ""}
                onChange={(e) => onChange({ ...value, [l]: e.target.value })}
                className="flex-1"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
