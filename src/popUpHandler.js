const Finder = require('./finder.js');
const getDriver = require('./driver.js');
const TapHandler = require('./tapHandler.js');
const TranslationsHandler = require('./translationsHandler.js');

class PopUpHandler {
    constructor() {
    }

    async allow() {
        await (new TapHandler()).tap((new TranslationsHandler()).getTranslation('en', 'allowPopUp'))
    }

    async notAllow() {
        await (new TapHandler()).tap(this.translations.getTranslation('notAllowPopup'))
    }
}

module.exports = PopUpHandler;