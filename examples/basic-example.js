// examples/basic-example.js
const I18nHelper = require("../lib/i18nHelper");

(async () => {
  const i18nHelper = new I18nHelper();
  await i18nHelper.loadTranslations("en"); // Load English translations
  console.log(i18nHelper.translate("greeting")); // Assuming you have a key 'greeting' in your translations
})();
