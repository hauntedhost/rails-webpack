var webpack = require('webpack');
var path = require('path');

var FRONTEND_PATH = './frontend/app';

module.exports = {

  entry: {
    main: FRONTEND_PATH + '/components/main.js'
  },

  output: {
    path: path.join(__dirname, '..', 'tmp'),
    filename: '[name]-bundle.js',
    publicPath: 'http://localhost:3030/dev-assets'
  },

  devServer: {
    hot: true,
    historyApiFallback: true,
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
          presets: ['es2015', 'stage-1', 'react', 'react-hmre']
        }
      },

      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },

      {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
