# GitHub Copilot Instructions

Bu proje bir React Native (Expo + bare workflow) uygulamasıdır. Aşağıdaki skill dosyaları, kod yazarken ve review yaparken rehber olarak kullanılmalıdır.

---

## Proje Bağlamı

- **Platform**: React Native 0.83+ / Expo ~55 / React 19
- **Dil**: TypeScript
- **Navigasyon**: Manuel tab-based (useState + CustomTabBar)
- **Tema**: Dark theme (navy/blue/yellow renk paleti)
- **Hedef**: Spor/futbol haberleri uygulaması (Türkçe)

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
6. **Test yaz**: Her yeni component/screen için RNTL ile test öner.
7. **Profile before optimize**: Optimizasyon yapmadan önce profiling yap.
8. **TypeScript strict**: Tüm kodda strict TypeScript kullan.

---

## Dosya Yapısı Conventions

```
src/
├── components/    → Reusable UI components
├── screens/       → Screen-level components
├── hooks/         → Custom hooks
├── services/      → API calls, business logic
├── utils/         → Utility functions
├── types/         → TypeScript type definitions
├── constants/     → App constants, theme colors
└── assets/        → Static assets (icons, images, fonts)
```

---

## Renk Paleti

| Kullanım | Renk | Hex |
|----------|------|-----|
| Background | Koyu lacivert | `#0a1128` |
| Tab bar | Koyu mavi | `rgb(29, 48, 117)` |
| Accent/Active | Sarı | `rgb(255, 237, 0)` |
| Text (inactive) | Beyaz | `#FFFFFF` |
