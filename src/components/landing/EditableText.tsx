import { useRef, useEffect } from "react";
import { useSite } from "@/contexts/SiteContext";
import { cn } from "@/lib/utils";

interface EditableTextProps {
  value: string;
  onSave: (value: string) => void;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "div";
  className?: string;
  style?: React.CSSProperties;
}

export function EditableText({ value, onSave, as: Tag = "span", className, style }: EditableTextProps) {
  const { editMode } = useSite();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.innerText !== value) {
      ref.current.innerText = value;
    }
  }, [value]);

  if (!editMode) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <Tag
      ref={ref as any}
      contentEditable
      suppressContentEditableWarning
      className={cn(className, "editable-highlight")}
      onBlur={(e: any) => {
        const newVal = e.currentTarget.innerText;
        if (newVal !== value) onSave(newVal);
      }}
    >
      {value}
    </Tag>
  );
}
