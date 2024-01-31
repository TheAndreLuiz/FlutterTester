const fs = require('fs');

class TranslationsHandler {
    constructor(language) {
        this.language = language;
        this.translations = JSON.parse(fs.readFileSync('./translations.json', 'utf8'));
    }

    getTranslation(key) {
        return this.translations[key][this.language];
    }
}

module.exports = TranslationsHandler;