import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { storage } from '../storage';
import tr from './locales/tr.json';
import en from './locales/en.json';

const LANGUAGE_STORAGE_KEY = 'app.language';

const savedLanguage = storage.getString(LANGUAGE_STORAGE_KEY) || 'tr';

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en },
  },
  lng: savedLanguage,
  fallbackLng: 'tr',
  interpolation: {
    escapeValue: false,
  },
});

export function changeLanguage(lang: string) {
  i18n.changeLanguage(lang);
  storage.set(LANGUAGE_STORAGE_KEY, lang);
}

export default i18n;
