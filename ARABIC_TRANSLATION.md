# Arabic Translation Support for LumenForge

This document describes how to use the Arabic translation system implemented in the LumenForge application.

## Features

- ✅ **Bilingual Support**: English and Arabic languages
- ✅ **RTL (Right-to-Left) Support**: Proper Arabic text direction
- ✅ **Arabic Typography**: Noto Sans Arabic font for proper Arabic rendering
- ✅ **Language Persistence**: User's language choice is remembered
- ✅ **Auto-Detection**: Automatically detects browser language preference
- ✅ **Dynamic Switching**: Switch between languages without page reload
- ✅ **Responsive Design**: RTL layouts work across all screen sizes

## Usage

### Using Translations in Components

Import the translation hook and use it in your components:

```tsx
import { useTranslation } from "@/i18n/context";

export function MyComponent() {
  const { t, language, isRTL } = useTranslation();

  return (
    <div>
      <h1>{t.nav.home}</h1>
      <p>{t.home.heroDescription}</p>
      <p>Current language: {language}</p>
      <p>Is RTL: {isRTL ? "Yes" : "No"}</p>
    </div>
  );
}
```

### Language Switcher

Add the language switcher to any component:

```tsx
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header() {
  return (
    <header>
      {/* Other header content */}
      <LanguageSwitcher />
    </header>
  );
}
```

### Translation Object Structure

The translation object contains these main sections:

- `common`: General UI elements (loading, error, success, etc.)
- `nav`: Navigation items
- `home`: Home page content
- `about`: About page content
- `products`: Products page content
- `contact`: Contact page content
- `footer`: Footer content

## Adding New Translations

1. Update the interface in `/client/src/i18n/index.ts`
2. Add the English text in `/client/src/i18n/translations/en.ts`
3. Add the Arabic text in `/client/src/i18n/translations/ar.ts`

Example:

```typescript
// In index.ts
export interface Translations {
  // ... existing properties
  newSection: {
    title: string;
    description: string;
  };
}

// In en.ts
export const en: Translations = {
  // ... existing translations
  newSection: {
    title: "New Section",
    description: "This is a new section",
  },
};

// In ar.ts
export const ar: Translations = {
  // ... existing translations
  newSection: {
    title: "قسم جديد",
    description: "هذا قسم جديد",
  },
};
```

## RTL Styling

The system automatically applies RTL styles when Arabic is selected. Custom RTL adjustments can be added to CSS:

```css
/* RTL-specific styles */
[dir="rtl"] .my-component {
  text-align: right;
  margin-left: 0;
  margin-right: 1rem;
}
```

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- RTL text rendering support
- Web font loading support

## Testing

You can test the translation system using the demo component:

```tsx
import { TranslationDemo } from "@/components/TranslationDemo";

// Add this to any page to test translations
<TranslationDemo />;
```

## File Structure

```
client/src/i18n/
├── index.ts              # Types and language definitions
├── context.tsx           # Translation provider and hook
└── translations/
    ├── en.ts             # English translations
    └── ar.ts             # Arabic translations
```

## Notes

- Arabic text uses the Noto Sans Arabic font family for better readability
- Language preference is stored in localStorage
- The system automatically sets `dir="rtl"` on the HTML element when Arabic is selected
- All spacing and layout adjustments are handled automatically through CSS
