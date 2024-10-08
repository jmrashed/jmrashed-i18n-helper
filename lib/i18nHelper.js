// lib/i18nHelper.js
const i18next = require("i18next");
const HttpBackend = require("i18next-http-backend");

i18next.use(HttpBackend).init({
  lng: "en", // default language
  fallbackLng: "en", // fallback language
  backend: {
    loadPath: "./locales/{{lng}}/{{ns}}.json", // path to the translation files
  },
});

class I18nHelper {
  constructor() {
    this.i18n = i18next;
  }

  async loadTranslations(language) {
    await this.i18n.changeLanguage(language);
  }

  translate(key) {
    return this.i18n.t(key);
  }
}

module.exports = I18nHelper;
