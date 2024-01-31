const wdio = require('webdriverio');

class Driver {
    constructor() {
        const osSpecificOps = {
            'platformName': 'Android',
            'appium:deviceName': 'R9QR300JCFY',
            'appium:app': './app-debug.apk',
        };

        this.opts = {
            path: '/wd/hub',
            port: 4723,
            capabilities: {
                ...osSpecificOps,
                'appium:automationName': 'Flutter',
            }
        };
    }

    async init() {
        return wdio.remote(this.opts);
    }
}

let instance = null;

async function getDriver() {
    if (!instance) {
        const driver = new Driver();
        instance = await driver.init();
    }
    return instance;
}

module.exports = getDriver;
