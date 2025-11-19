import { useTranslation } from "@/i18n/context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function TranslationDemo() {
  const { t, language, isRTL } = useTranslation();

  return (
    <Card className="max-w-lg mx-auto m-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>{t.common.translationDemo}</CardTitle>
        <LanguageSwitcher />
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-2">
            {t.common.currentLanguage}
          </p>
          <p className="font-medium">
            {language === "en" ? t.common.english : t.common.arabic}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.common.direction} {isRTL ? "RTL" : "LTR"}
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <strong>{t.nav.home}:</strong> {t.home.heroTitle}
          </p>
          <p>
            <strong>{t.nav.about}:</strong> {t.about.title}
          </p>
          <p>
            <strong>{t.nav.products}:</strong> {t.products.title}
          </p>
          <p>
            <strong>{t.nav.contact}:</strong> {t.contact.title}
          </p>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">
            {t.common.loading}
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            {t.common.success}
          </p>
          <p className="text-sm text-muted-foreground">{t.common.error}</p>
        </div>
      </CardContent>
    </Card>
  );
}
