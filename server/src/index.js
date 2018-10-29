
const config = require('config');

const createApp = require('./app');

const PORT = config.port;

async function run() {
  const app = createApp(config);

  app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);
  });
}

run();
