import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import langTR from './translation/tr/translation';
import langEn from './translation/en/translation';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const resources = {
    en: {
        translation: langEn
    },
    tr: {
        translation: langTR
    }
};


i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources,
        lng: "tr",
        fallbackLng: 'tr',
        debug: true,
        // whiteList: Languages,
        ns: ["translation"],
        defaultNS: "translation",
        keySeparator: ".",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
            formatSeparator: ","
        },
        react:{
            wait: true
        }
    });


export default i18n;