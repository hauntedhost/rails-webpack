require('dotenv').config({
  path: __dirname + '/../../.env'
});

module.exports = {
  ENTRY: {
    main: './frontend/app/index.js'
  },
  DEV_SERVER_PORT: process.env.WEBPACK_DEV_SERVER_PORT,
  FRONTEND_PATH: './frontend/app',
  DIST_PATH: './dist',
};
