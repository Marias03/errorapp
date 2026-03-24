import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import es from "./es.json";
import en from "./en.json";
import ru from "./ru.json";

i18n
  .use(LanguageDetector) // detecta idioma del navegador
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: "es",
    detection: {
      order: ["localStorage", "navigator"], // primero localStorage, luego navegador
      caches: ["localStorage"], // guarda la preferencia automáticamente
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
