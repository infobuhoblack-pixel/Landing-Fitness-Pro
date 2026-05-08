import { useEffect, useState } from "react";
import { useSite } from "@/contexts/SiteContext";
import { SiteContent } from "@/lib/siteContent";
import { toast } from "sonner";

export function useEditor() {
  const { content, saveContent } = useSite();
  const [draft, setDraft] = useState<SiteContent>(content);
  const [busy, setBusy] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (!dirty) setDraft(content);
  }, [content, dirty]);

  const update = (mut: (d: SiteContent) => SiteContent) => {
    setDraft((prev) => {
      const next = mut(structuredClone(prev));
      setDirty(true);
      return next;
    });
  };

  const save = async () => {
    setBusy(true);
    const { error } = await saveContent(draft);
    setBusy(false);
    if (error) {
      toast.error("Error al guardar: " + error);
    } else {
      toast.success("Cambios publicados");
      setDirty(false);
    }
  };

  return { draft, update, save, busy, dirty };
}
