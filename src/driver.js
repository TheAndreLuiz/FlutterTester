const wdio = require('webdriverio');

class Driver {
    constructor() {
        const osSpecificOps = {
            'platformName': 'Android',
            'appium:deviceName': 'RQCR300B0VM',
            'appium:app': './app-debug.apk',
        };

        this.opts = {
            path: '/wd/hub',
            port: 4723,
            capabilities: {
                ...osSpecificOps,
                'appium:automationName': 'Flutter',
                'appium:autoGrantPermissions': 'true',
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
