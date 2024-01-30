const getDriver = require('./driver.js');
const Finder = require('./finder.js');

class TapHandler {
    constructor() {
    }

    async tap(search) {
        const element = await (new Finder()).findElement(search)
        await (await getDriver()).elementClick(element.toString())
    }
}

module.exports = TapHandler;