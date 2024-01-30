const { dragAndDrop } = require('webdriverio/build/commands/element.js');
const getDriver = require('./driver.js');

class ButtonHandler {
    constructor() {
    }

    async sendVolumeUp() {
        const driver = await getDriver();
        await driver.sendKeyEvent('24');
    }

    async sendVolumeDown() {
        const driver = await getDriver();
        await driver.sendKeyEvent('25');
    }

    async sendBack() {
        const driver = await getDriver();
        await driver.sendKeyEvent('260');
    }

    async secret() {
        driver = await getDriver()
        await driver.switchContext('NATIVE_APP')
        await (new ButtonHandler()).sendVolumeUp()
        await (new ButtonHandler()).sendVolumeDown()
        await (new ButtonHandler()).sendVolumeUp()
        await (new ButtonHandler()).sendVolumeDown()
    }
}

module.exports = ButtonHandler;