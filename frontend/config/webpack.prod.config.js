var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var FRONTEND_PATH = './frontend/app';
var DIST_PATH = './api/dist'

module.exports = {

  entry: {
    main: FRONTEND_PATH + '/components/main.js'
  },

  output: {
    path: DIST_PATH,
    filename: '[name]-bundle.js'
  },

  plugins: [
    new ExtractTextPlugin('[name]-bundle.css')
  ],

  devtool: 'cheap-hidden-module-eval-source-map',

  resolve: {
    root: path.resolve(FRONTEND_PATH),
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
      }
    ]
  },
}
