import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Mavericks MediLink!",
      about: "About Us",
      contact: "Contact Us",
      dashboard: "Dashboard",
      signin: "Sign In / Register",
      chooseLang: "Choose Your Preferred Language",
    },
  },
  hi: {
    translation: {
      welcome: "मावेरिक्स मेडीलिंक में आपका स्वागत है!",
      about: "हमारे बारे में",
      contact: "संपर्क करें",
      dashboard: "डैशबोर्ड",
      signin: "साइन इन / रजिस्टर करें",
      chooseLang: "अपनी पसंदीदा भाषा चुनें",
    },
  },
  as: {
    translation: {
      welcome: "মেভেৰিক্স মেডিলিঙ্কত আপোনালোকক স্বাগতম!",
      about: "আমাৰ বিষয়ে",
      contact: "যোগাযোগ কৰক",
      dashboard: "ড্যাসবোর্ড",
      signin: "ছাইন ইন / পঞ্জীয়ন কৰক",
      chooseLang: "আপোনাৰ প্ৰিয় ভাষা বাছনি কৰক",
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
