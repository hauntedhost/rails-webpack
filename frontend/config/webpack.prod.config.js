var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./webpack.shared');

module.exports = {

  entry: config.ENTRY,

  output: {
    path: config.DIST_PATH,
    filename: '[name]-bundle.js'
  },

  plugins: [
    new ExtractTextPlugin('[name]-bundle.css')
  ],

  devtool: 'cheap-hidden-module-eval-source-map',

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
          presets: ['es2015', 'stage-1', 'react']
        }
      },

      {
        test: /\.?css$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },
}
