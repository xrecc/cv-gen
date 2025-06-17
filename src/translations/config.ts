import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationPL from "./pl/translation.json";
import translationEN from "./en/translation.json";

i18n.use(initReactI18next).init({
  lng: "pl",
  resources: {
    pl: {
      translation: translationPL,
    },
    en: {
      translation: translationEN,
    },
  },
});
