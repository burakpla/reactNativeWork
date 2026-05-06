# GitHub Copilot Instructions

Bu proje **PORTAL BASE RN** — React Native projelerinde kullanılacak base template'tir.

---

## Proje Bağlamı

- **Platform**: React Native 0.83+ / Expo ~55 / React 19
- **Dil**: TypeScript (strict)
- **Navigasyon**: React Navigation 7 (Native Stack + Bottom Tabs)
- **State Management**: Redux Toolkit
- **Storage**: react-native-mmkv
- **Animations**: react-native-reanimated 3
- **Lists**: @shopify/flash-list
- **i18n**: i18next + react-i18next
- **Tema**: Dark/Light (Context-based, MMKV persist)
- **Path Aliases**: `@/` → `src/`

---

## Skill Routing

Aşağıdaki durumlarda ilgili skill dosyalarına başvur:

### React Native Performans Optimizasyonu

Performans, FPS, re-render, memory leak, profiling konularında:
- `skills/react-native-best-practices/SKILL.md` (ana rehber)
- `skills/react-native-best-practices/references/` (detaylı referanslar)

Önemli referanslar:
- Liste performansı → `skills/react-native-best-practices/references/js-lists-flatlist-flashlist.md`
- Animasyonlar → `skills/react-native-best-practices/references/js-animations-reanimated.md`
- Memory leak → `skills/react-native-best-practices/references/js-memory-leaks.md`
- Bundle size → `skills/react-native-best-practices/references/bundle-analyze-js.md`
- React profiling → `skills/react-native-best-practices/references/js-profile-react.md`
- Barrel exports (kaçın!) → `skills/react-native-best-practices/references/bundle-barrel-exports.md`

### UI/UX Best Practices & Expo Patterns

Component tasarımı, styling, liste optimizasyonu, animasyon, state yönetimi:
- `skills/vendored/vercel-react-native-skills/SKILL.md` (30+ kural)
- `skills/vendored/vercel-react-native-skills/rules/` (bireysel kurallar)

Önemli kurallar:
- Liste performansı → `rules/list-performance-*.md` dosyaları
- Animasyonlar → `rules/animation-*.md` dosyaları
- State yönetimi → `rules/react-state-*.md` dosyaları
- UI patterns → `rules/ui-*.md` dosyaları
- Navigation → `rules/navigation-native-navigators.md`

### React Native Upgrade

RN sürüm yükseltme, dependency uyumluluk, Expo SDK upgrade:
- `skills/upgrading-react-native/SKILL.md`
- `skills/upgrading-react-native/references/`

### Testing (React Native Testing Library)

Test yazma, RNTL v13/v14 API, anti-pattern'ler:
- `skills/vendored/react-native-testing/SKILL.md`
- `skills/vendored/react-native-testing/references/api-reference-v14.md` (React 19 projesi)
- `skills/vendored/react-native-testing/references/anti-patterns.md`

### GitHub Workflow & CI/CD

PR oluşturma, code review, stacked PR, GitHub Actions:
- `skills/github/SKILL.md`
- `skills/github-actions/SKILL.md`
- `skills/github-actions/references/` (iOS/Android CI build artifacts)

### Brownfield Migration

Native uygulamaya RN entegrasyonu, XCFramework, AAR:
- `skills/react-native-brownfield-migration/SKILL.md`
- `skills/react-native-brownfield-migration/references/`

### Device Automation & QA

Cihaz üzerinde otomatik test, exploratory QA:
- `skills/vendored/agent-device/SKILL.md`
- `skills/vendored/dogfood/SKILL.md`

---

## Genel Kurallar

1. **Performans önce**: Yeni component yazarken `react-native-best-practices` skill'indeki CRITICAL ve HIGH impact kurallarını uygula.
2. **FlashList > FlatList**: Büyük listeler için her zaman FlashList öner.
3. **Barrel export kullanma**: `index.ts` üzerinden re-export yapmaktan kaçın.
4. **Inline object/function kaçın**: Render içinde inline object ve arrow function oluşturma.
5. **Reanimated kullan**: Animasyonlar için JS thread'i bloklamayan `react-native-reanimated` tercih et.
6. **Test yaz**: Her yeni veya değiştirilen component/screen için RNTL testi yaz veya mevcut testi güncelle. Test dosyası yoksa oluştur (`__tests__/<ComponentAdı>.test.tsx`).
7. **Profile before optimize**: Optimizasyon yapmadan önce profiling yap.
8. **TypeScript strict**: Tüm kodda strict TypeScript kullan.
9. **Değişiklik sonrası test koş**: Herhangi bir kod değişikliği yaptıktan sonra ilgili testleri otomatik olarak çalıştır (`npx jest --testPathPattern=<değişen dosya>` veya `npm test`). Testler kırılırsa düzelt, geçene kadar devam et.

---

## Dosya Yapısı Conventions

```
src/
├── app/           → App entry, provider hierarchy
├── navigation/    → React Navigation config (RootNavigator, TabNavigator, types)
├── screens/       → Screen-level components
├── components/    → Reusable UI components
├── store/         → Redux Toolkit (configureStore, hooks, slices/)
├── theme/         → Theme system (ThemeContext, colors, spacing)
├── i18n/          → Internationalization (config + locales/)
├── storage/       → MMKV storage wrapper
├── hooks/         → Custom hooks
├── services/      → API calls, business logic
├── utils/         → Utility functions
├── types/         → TypeScript type definitions
├── constants/     → App constants, env config
└── assets/        → Static assets (icons, images, fonts)
```

---

## Tema Sistemi

Renkler `src/theme/colors.ts` dosyasında tanımlıdır (dark & light paletler). Tema `useAppTheme()` hook'u ile kullanılır.
Yeni bir proje oluşturulurken renk paleti `colors.ts` üzerinden değiştirilmelidir.
