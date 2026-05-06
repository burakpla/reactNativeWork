import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { storage } from '../storage';
import tr from './locales/tr.json';
import en from './locales/en.json';

const LANGUAGE_STORAGE_KEY = 'app.language';

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en },
  },
  lng: 'tr',
  fallbackLng: 'tr',
  interpolation: {
    escapeValue: false,
  },
});

// Load saved language async
storage.getString(LANGUAGE_STORAGE_KEY).then(savedLang => {
  if (savedLang) {
    i18n.changeLanguage(savedLang);
  }
});

export function changeLanguage(lang: string) {
  i18n.changeLanguage(lang);
  storage.set(LANGUAGE_STORAGE_KEY, lang);
}

export default i18n;
