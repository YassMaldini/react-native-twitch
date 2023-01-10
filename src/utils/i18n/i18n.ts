import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import TRANSLATIONS from './translation';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: TRANSLATIONS,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
