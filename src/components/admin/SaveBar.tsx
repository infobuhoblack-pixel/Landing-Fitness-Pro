import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

export function SaveBar({ onSave, busy, dirty }: { onSave: () => void; busy: boolean; dirty: boolean }) {
  return (
    <div className="sticky bottom-0 -mx-4 md:-mx-8 px-4 md:px-8 py-4 bg-background/90 backdrop-blur border-t border-border flex items-center justify-end gap-3">
      <span className="text-sm text-muted-foreground">
        {dirty ? "Cambios sin publicar" : "Todo guardado"}
      </span>
      <Button onClick={onSave} disabled={busy || !dirty} variant="hero">
        <Save className="h-4 w-4 mr-2" />
        {busy ? "Publicando…" : "Guardar y publicar"}
      </Button>
    </div>
  );
}
