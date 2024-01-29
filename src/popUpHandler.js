const Finder = require('./finder.js');
const getDriver = require('./driver.js');
const TranslationsHandler = require('./translationsHandler.js');

class PopUpHandler {
    constructor() {
        this.translations = new TranslationsHandler('en');
    }

    async allow() {
        const elements = await (new Finder()).findAll()
        for (const element of elements) {
            const tagName = await (await getDriver()).getElementAttribute(element['element-6066-11e4-a52e-4f735466cecf'], 'name');
            if (tagName == this.translations.getTranslation('allowPopUp')) {
                await (await getDriver()).elementClick(element['element-6066-11e4-a52e-4f735466cecf'])
            }
        }
    }

    async notAllow() {
        const elements = await (new Finder).getAll()
        for (const element of elements) {
            const tagName = await driver.getElementAttribute(element, 'name');
            if (tagName == this.translations.getTranslation('notAllowPopup')) {
                await driver.elementClick(element['element-6066-11e4-a52e-4f735466cecf'])
            }
        }
    }
}

module.exports = PopUpHandler;