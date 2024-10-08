// test/i18nHelper.test.js
const I18nHelper = require("../lib/i18nHelper");

test("translate greeting key", async () => {
  const i18nHelper = new I18nHelper();
  await i18nHelper.loadTranslations("en");
  expect(i18nHelper.translate("greeting")).toBe("Hello"); // Change according to your translation
});
