import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTranslation } from "../i18n/context";
import { languages, type Language } from "../i18n";

export function LanguageSwitcher() {
  const { language, setLanguage, isRTL } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 h-9 px-3 hover-elevate active-elevate-2"
        >
          <Globe className="h-4 w-4" />
          <span className="text-base">{languages[language].flag}</span>
          <span className="text-sm hidden sm:inline font-medium">
            {language === "ar" ? "عربي" : "English"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isRTL ? "start" : "end"}
        className="min-w-[140px] bg-background/95 backdrop-blur-lg border border-border"
      >
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as Language)}
            className={`flex items-center gap-3 cursor-pointer hover-elevate ${
              language === code ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <span className="text-lg">{flag}</span>
            <span className="text-sm font-medium">{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
