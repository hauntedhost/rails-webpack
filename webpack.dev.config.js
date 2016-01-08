var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
    main: [
      './app-fe/components/main.js'
    ]
  },

  output: {
    filename: '[name]-bundle.js',
    publicPath: 'http://localhost:3030/javascripts'
  },

  devServer: {
    colors: true,
    inline: true,
    progress: true,
    port: 3030
  },

  devtool: 'cheap-module-eval-source-map',

  resolve: {
    root: path.resolve('./app'),
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
        loaders: ['style-loader', 'css-loader?sourceMap']
      }
    ]
  },

  plugins: [
  ]
}
