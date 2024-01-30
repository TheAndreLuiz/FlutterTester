const PopUpHandler = require('./src/popUpHandler.js');
const TapHandler = require('./src/tapHandler.js');
const ButtonHandler = require('./src/buttonHandler.js');

(async () => {
  await (new TapHandler()).tap('While using the app')
  await (new TapHandler()).tap('Help?')
  await (new ButtonHandler()).secret()
  await (new TapHandler()).tap('Refresh')
  await (new TapHandler()).tap('Allow')
}
) ();