# jmrashed-i18n-helper

A lightweight library that simplifies the process of localizing applications. It supports multiple languages and dynamic translation loading.

## Features

- Easy localization management.
- Support for multiple languages.
- Dynamic loading of translation files.
- Simple API for translating keys.

## Installation

You can install `jmrashed-i18n-helper` using npm:

```bash
npm install jmrashed-i18n-helper
```

## Usage

### Importing the Library

You can import the `I18nHelper` class in your project:

```javascript
const I18nHelper = require('jmrashed-i18n-helper');
```

### Basic Example

Here’s a basic example of how to use the `I18nHelper` class:

```javascript
const I18nHelper = require('jmrashed-i18n-helper');

(async () => {
  const i18nHelper = new I18nHelper();

  // Load translations for the English language
  await i18nHelper.loadTranslations('en');

  // Translate a key
  console.log(i18nHelper.translate('greeting')); // Output: Hello
})();
```

### Translation Files

You need to create translation files in a `translations` directory. For example:

- **translations/en.json**
  ```json
  {
    "greeting": "Hello"
  }
  ```

- **translations/es.json**
  ```json
  {
    "greeting": "Hola"
  }
  ```

### Available Methods

- `loadTranslations(lang)`: Loads the translations for the specified language.
- `translate(key)`: Translates a given key based on the loaded translations.

## Testing

To run tests, use the following command:

```bash
npm test
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

**jmrashed** 