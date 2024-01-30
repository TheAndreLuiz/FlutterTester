const getDriver = require('./driver.js');

class Finder {
    constructor() {
    }

    async waitForElement(element) {
        return await (await getDriver()).waitUntil(async () => {
            return this.findElement(element) != null
        }, {
            timeout: 99999999999,
            timeoutMsg: 'No element found'
        });
    }

    async findAll() {
        await (await getDriver()).switchContext('NATIVE_APP')
        return await (await getDriver()).findElements('css selector', '*')
    }

    async findElement(search) {
        const elements = await this.findAll();
        for (const element of elements) {
            const text = await (await getDriver()).getElementAttribute(element['element-6066-11e4-a52e-4f735466cecf'], 'text')
            const name = await (await getDriver()).getElementAttribute(element['element-6066-11e4-a52e-4f735466cecf'], 'name')
            const _class = await (await getDriver()).getElementAttribute(element['element-6066-11e4-a52e-4f735466cecf'], 'class')
            const className = await (await getDriver()).getElementAttribute(element['element-6066-11e4-a52e-4f735466cecf'], 'className')
            const contentDescription = await (await getDriver()).getElementAttribute(element['element-6066-11e4-a52e-4f735466cecf'], 'contentDescription')
            if (text.toString().includes(search) || name.toString().includes(search) || _class.toString().includes(search) || className.toString().includes(search) || contentDescription.toString().includes(search)){
                return element['element-6066-11e4-a52e-4f735466cecf']; // avoid magic stuff later
            }
        }
        return null
    }
}

module.exports = Finder;