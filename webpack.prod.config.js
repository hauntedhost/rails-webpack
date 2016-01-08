var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
    main: [
      './app-fe/components/main.js'
    ]
  },

  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: '[name]-bundle.js',
    publicPath: 'http://localhost:3030/javascripts'
  },

  devtool: 'cheap-hidden-module-eval-source-map',

  resolve: {
    root: path.resolve('./app-fe'),
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

  plugins: [
    new ExtractTextPlugin('../stylesheets/[name]-bundle.css')
  ]
}
