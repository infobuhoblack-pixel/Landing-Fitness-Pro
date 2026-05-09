import { Sun, Moon, Edit3, RotateCcw } from "lucide-react";
import { useTheme } from "@/contexts/ThemeProvider";
import { useSite } from "@/contexts/SiteContext";
import { Button } from "@/components/ui/button";
import { Lang, langLabels, allLangs } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, editMode, setEditMode, resetContent } = useSite();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-display text-2xl font-bold tracking-wider text-gradient">
          FITNESS PRO
        </a>

        <div className="flex items-center gap-2">
          {/* Language selector */}
          <div className="flex items-center gap-0.5 bg-muted rounded-lg p-1">
            {allLangs.map((l) => (
              <button
                key={l}
                onClick={() => setLanguage(l)}
                className={cn(
                  "px-2 py-1 rounded text-xs font-bold transition-all",
                  language === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Edit mode toggle */}
          <Button
            variant={editMode ? "cta" : "ghost"}
            size="sm"
            onClick={() => setEditMode(!editMode)}
          >
            <Edit3 className="h-4 w-4 mr-1" />
            {editMode ? "ON" : "Edit"}
          </Button>

          {/* Reset */}
          {editMode && (
            <Button variant="ghost" size="icon" onClick={resetContent} title="Reset">
              <RotateCcw className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
