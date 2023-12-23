import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import enTranslation from "../locales/en/global.json";
import ruTranslation from "../locales/ru/global.json";
import uzTranslation from "../locales/uz/global.json";

// Configure i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
    uz: { translation: uzTranslation },
  },
  lng: "uz", // Default language
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
