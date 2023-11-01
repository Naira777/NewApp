import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import en from './en';
import ru from './ru';
import ge from './ge';

const resources = {
    en: {
        translation: {
            ...en,
        },
    },
    ru: {
        translation: {
            ...ru,
        },
    },
    ge: {
        translation: {
            ...ge,
        },
    },
};

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ge',
        fallbackLng: "ge",
        resources,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;