'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './source/index.js',
  devtool: 'source-map',
  output: {
    path: './public',
    filename: 'index.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          optional: ['runtime', 'es7.objectRestSpread'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass?outputStyle=expanded'),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('index.css'),
  ],

};
