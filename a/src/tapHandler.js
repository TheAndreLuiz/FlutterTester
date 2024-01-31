const getDriver = require('./driver.js');
const Finder = require('./finder.js');

class TapHandler {
    constructor() {
    }

    async tap(search) {
        await (await getDriver()).elementClick((new Finder()).findElement(search))
    }
}

module.exports = TapHandler;