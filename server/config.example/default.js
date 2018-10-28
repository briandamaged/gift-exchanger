
const path = require('path');

const config = {
  port: 3000,
  static: {
    enabled: true,
    path: path.resolve(__dirname, '..'),
  }
};

module.exports = exports = config;
