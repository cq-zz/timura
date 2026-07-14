import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { zh } from '../locales/zh';
import { hant } from '../locales/zh-hant';
import { en } from '../locales/en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: {
        translation: zh
      },
      'zh-hant': {
        translation: hant
      },
      en: {
        translation: en
      }
    },
    lng: localStorage.getItem('preferred_lang') || 'en', // default language, unmatched defaults to English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values to prevent XSS
    }
  });

export default i18n;
