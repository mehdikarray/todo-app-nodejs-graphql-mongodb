const i18next = require('i18next')
const i18nextMiddleware = require('i18next-express-middleware')

const localeEN = require('@app/i18next/locales/en.json')
const localeFR = require('@app/i18next/locales/fr.json')

i18next.use(i18nextMiddleware.LanguageDetector).init({
  detection: {
    order: ['header'],
    lookupHeader: 'accept-language'
  },
  preload: ['en', 'fr'],
  whitelist: ['en', 'fr'],
  fallbackLng: 'en',
  resources: {
    en: { translation: localeEN },
    fr: { translation: localeFR }
  }
})

module.exports = { i18next, i18nextMiddleware }
