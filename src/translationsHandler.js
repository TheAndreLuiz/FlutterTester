const fs = require('fs');

class TranslationsHandler {
    constructor() {
    }

    getTranslation(language, key) {
        const translations = JSON.parse(fs.readFileSync('./translations.json', 'utf8'));
        return translations[key][language];
    }
}

module.exports = TranslationsHandler;