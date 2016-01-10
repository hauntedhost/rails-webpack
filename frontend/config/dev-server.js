var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config.js');
var middleware = require('webpack-dev-middleware');
var request = require('request');

var app = express();
var compiler = webpack(config);

app.use(middleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  // res.sendFile(path.join(__dirname, 'index.html'));
  var newurl = 'http://localhost:3000';
  request(newurl).pipe(res);
});

app.listen(3030, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3030');
});
