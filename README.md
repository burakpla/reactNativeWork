# PORTAL BASE RN

React Native base template — yeni projeler için hazır altyapı.

## Tech Stack

| Katman | Teknoloji |
|--------|-----------|
| Framework | React Native 0.83+ / Expo ~55 / React 19 |
| Navigation | React Navigation 7 (Native Stack + Bottom Tabs) |
| State | Redux Toolkit |
| Storage | react-native-mmkv |
| Animation | react-native-reanimated 3 |
| Lists | @shopify/flash-list |
| i18n | i18next + react-i18next |
| Tema | Dark/Light (Context + useColorScheme + MMKV persist) |
| Env Config | react-native-dotenv |
| Language | TypeScript (strict) |

## Kurulum

```bash
# 1. Repo'yu klonla ve bağımlılıkları yükle
git clone <repo-url> my-new-app
cd my-new-app
npm install

# 2. iOS pod'larını yükle
cd ios && pod install && cd ..

# 3. Env dosyasını oluştur
cp .env.example .env

# 4. Çalıştır
npm run ios
# veya
npm run android
```

## Proje Yapısı

```
src/
├── app/                → App entry, provider hierarchy
│   └── App.tsx
├── navigation/         → React Navigation config
│   ├── RootNavigator.tsx
│   ├── TabNavigator.tsx
│   └── types.ts
├── screens/            → Ekranlar
│   ├── HomeScreen.tsx
│   └── SettingsScreen.tsx
├── components/         → Yeniden kullanılabilir UI bileşenleri
├── store/              → Redux Toolkit
│   ├── index.ts        → configureStore
│   ├── hooks.ts        → useAppDispatch, useAppSelector
│   └── slices/
│       └── appSlice.ts
├── theme/              → Tema sistemi
│   ├── ThemeContext.tsx
│   ├── colors.ts       → dark & light paletler
│   └── spacing.ts      → spacing, borderRadius, fontSize
├── i18n/               → Çoklu dil desteği
│   ├── index.ts
│   └── locales/
│       ├── tr.json
│       └── en.json
├── storage/            → MMKV wrapper
│   └── index.ts
├── hooks/              → Custom hooks
│   └── useAppTheme.ts
├── services/           → API calls, business logic
├── utils/              → Utility fonksiyonlar
├── types/              → Global TypeScript types
├── constants/          → Env config, sabitler
└── assets/             → Statik dosyalar (icons, images, fonts)
```

## Yeni Ekran Ekleme

1. `src/screens/MyScreen.tsx` oluştur
2. `src/navigation/types.ts` dosyasına param type ekle
3. Navigator'a screen ekle (TabNavigator veya RootNavigator)

## Tema Kullanımı

```tsx
import { useAppTheme } from '@/hooks/useAppTheme';

function MyComponent() {
  const { colors, spacing, isDark } = useAppTheme();
  return <View style={{ backgroundColor: colors.background, padding: spacing.lg }} />;
}
```

## i18n Kullanımı

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <Text>{t('common.home')}</Text>;
}
```

Yeni string eklemek için `src/i18n/locales/tr.json` ve `en.json` dosyalarını güncelle.

## Redux Store Kullanımı

```tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLanguage } from '@/store/slices/appSlice';

function MyComponent() {
  const dispatch = useAppDispatch();
  const language = useAppSelector(state => state.app.language);
  dispatch(setLanguage('en'));
}
```

## Path Aliases

`@/` → `src/` olarak çözümlenir. Tüm import'larda kullanılabilir:

```tsx
import { useAppTheme } from '@/hooks/useAppTheme';
import HomeScreen from '@/screens/HomeScreen';
```

## Scripts

```bash
npm start         # Metro bundler
npm run ios       # iOS simulator
npm run android   # Android emulator
npm test          # Jest testleri
npm run lint      # ESLint
```

## Geliştirme Kuralları

1. **Performans önce**: Yeni component yazarken memo, useCallback, useMemo kullan.
2. **FlashList > FlatList**: Büyük listeler için her zaman `@shopify/flash-list` kullan.
3. **Barrel export kullanma**: `index.ts` üzerinden re-export yapmaktan kaçın — bundle size'ı şişirir.
4. **Inline object/function kaçın**: Render içinde inline object ve arrow function oluşturma (gereksiz re-render'a yol açar).
5. **Reanimated kullan**: Animasyonlar için JS thread'i bloklamayan `react-native-reanimated` tercih et.
6. **Test yaz**: Her yeni veya değiştirilen component/screen için test yaz (`__tests__/<ComponentAdı>.test.tsx`).
7. **TypeScript strict**: Tüm kodda strict TypeScript kullan, `any` kullanmaktan kaçın.
8. **Path aliases kullan**: Import'larda `@/` prefix'i kullan (`@/hooks/useAppTheme` gibi).
9. **Tema hook'unu kullan**: Hardcoded renk/spacing yerine `useAppTheme()` hook'undan gelen değerleri kullan.
10. **i18n string'leri kullan**: Ekranlarda hardcoded metin yerine `t('key')` kullan.
