const fs = require('fs');
const getDriver = require('./driver.js');

class Finder {
    constructor() {
    }

    async waitForElement(element) {
        return await (await getDriver()).waitUntil(async () => {
            return this.findElement(element) != null
        }, {
            timeout: 999999,
            timeout: 999999,
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
            if (text.toString().includes(search) || name.toString().includes(search) || _class.toString().includes(search) || className.toString().includes(search) || contentDescription.toString().includes(search)) {
                fs.appendFileSync('log.txt', JSON.stringify(element) + '  ' + element['element-6066-11e4-a52e-4f735466cecf'] + '\n')
                const text = await (await getDriver()).getElementAttribute(element['element-6066-11e4-a52e-4f735466cecf'], 'text')
                const name = await (await getDriver()).getElementAttribute(element['element-6066-11e4-a52e-4f735466cecf'], 'name')
                const _class = await (await getDriver()).getElementAttribute(element['element-6066-11e4-a52e-4f735466cecf'], 'class')
                const className = await (await getDriver()).getElementAttribute(element['element-6066-11e4-a52e-4f735466cecf'], 'className')
                const contentDescription = await (await getDriver()).getElementAttribute(element['element-6066-11e4-a52e-4f735466cecf'], 'contentDescription')
                if (text.toString().includes(search) || name.toString().includes(search) || _class.toString().includes(search) || className.toString().includes(search) || contentDescription.toString().includes(search)) {
                    fs.appendFileSync('log.txt', JSON.stringify(element) + '  ' + element['element-6066-11e4-a52e-4f735466cecf'] + '\n')
                    return element['element-6066-11e4-a52e-4f735466cecf']; // avoid magic stuff later
                }
            }
            return this.waitForElement(search)
        }
    }

    async findByCss(css) {
        const element = (await getDriver()).findElement('css selector', css)
        return element['element-6066-11e4-a52e-4f735466cecf']
    }
}

module.exports = Finder;