const getDriver = require('./driver.js');
const Finder = require('./finder.js');

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
        const driver = await getDriver()
        await driver.switchContext('NATIVE_APP')
        await this.sendVolumeUp()
        await this.sendVolumeDown()
        await this.sendVolumeUp()
        await this.sendVolumeDown()
    }

    async password(password) {
        const driver = await getDriver()
        await driver.switchContext('NATIVE_APP')
        for (let i = 0; i < password.length; i++) {
            await driver.elementClick(await (new Finder()).findByCss(`android=new UiSelector().text("${password[i]}")`))
        }
    }
}

module.exports = ButtonHandler;