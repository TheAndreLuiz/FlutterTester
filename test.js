const PopUpHandler = require('./src/popUpHandler.js');
const TapHandler = require('./src/tapHandler.js');

(async () => {
  await (new PopUpHandler()).allow()
  await (new TapHandler()).tap('Help?')
}
) ();