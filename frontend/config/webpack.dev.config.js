var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.common.config');

module.exports = {
  entry: config.ENTRY,

  output: {
    path: path.join(__dirname, '..', 'tmp'),
    filename: '[name]-bundle.js',
    publicPath: `http://localhost:${config.DEV_SERVER.PORT}/${config.DEV_SERVER.PATH}`
  },

  devServer: {
    hot: true,
    historyApiFallback: true,
    colors: true,
    inline: true,
    progress: true,
    port: +config.DEV_SERVER.PORT
  },

  devtool: 'cheap-module-eval-source-map',

  resolve: {
    root: path.resolve(config.FRONTEND_PATH),
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-1', 'react', 'react-hmre']
        }
      },

      {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap']
      },

      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
