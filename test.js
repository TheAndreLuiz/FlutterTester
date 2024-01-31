const TapHandler = require('./src/tapHandler.js');
const ButtonHandler = require('./src/buttonHandler.js');

(async () => {
  await (new ButtonHandler()).secret()
  await (new TapHandler()).tap('Refresh')
  await (new TapHandler()).tap('Vidro')
  await (new ButtonHandler()).password('005600')
}
) ();