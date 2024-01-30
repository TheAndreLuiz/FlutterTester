const PopUpHandler = require('./src/popUpHandler.js');
const TapHandler = require('./src/tapHandler.js');
const ButtonHandler = require('./src/buttonHandler.js');

(async () => {
  await (new TapHandler()).tap('Only this time')
  await (new ButtonHandler()).secret()
  await (new TapHandler()).tap('Refresh')
  await (new TapHandler()).tap('Allow')
  await (new TapHandler()).tap('Refresh')
  await (new TapHandler()).tap('Facial Iconnect')
}
) ();