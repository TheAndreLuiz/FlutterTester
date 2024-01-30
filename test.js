const TapHandler = require('./src/tapHandler.js');
const ButtonHandler = require('./src/buttonHandler.js');

(async () => {
  await (new ButtonHandler()).secret()
  await (new TapHandler()).tap('Refresh')
  await (new TapHandler()).tap('Facial Iconnect')
  await (new TapHandler()).tap('0')
  await (new TapHandler()).tap('0')
  await (new TapHandler()).tap('5')
  await (new TapHandler()).tap('6')
  await (new TapHandler()).tap('0')
  await (new TapHandler()).tap('0')
}
) ();