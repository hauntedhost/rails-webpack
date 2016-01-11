var path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '..', '.env')
});

module.exports = {
  ENTRY: {
    main: './frontend/app/index.js'
  },
  DEV_SERVER_PORT: process.env.WEBPACK_DEV_SERVER_PORT,
  FRONTEND_PATH: './frontend/app',
  DIST_PATH: './dist',
};
