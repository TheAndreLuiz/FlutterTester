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
        await (new ButtonHandler()).sendVolumeUp()
        await (new ButtonHandler()).sendVolumeDown()
        await (new ButtonHandler()).sendVolumeUp()
        await (new ButtonHandler()).sendVolumeDown()
    }
}

module.exports = ButtonHandler;