
const createApp = require('./app');

const PORT = 3000;

async function run() {
  const app = createApp();

  app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);
  });
}

run();
