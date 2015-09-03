'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var cssExtractTextPlugin = new ExtractTextPlugin('index.css');
var htmlExtractTextPlugin = new ExtractTextPlugin('index.html');

module.exports = {
  entry: {
    'index.js': './source/index.js',
    'index.css': './source/index.scss',
    'index.html': './source/index.swig',
  },
  devtool: 'source-map',
  output: {
    path: './public',
    filename: '[name]',
  },

  module: {
    loaders: [
      {
        test: /\.swig$/,
        loader: htmlExtractTextPlugin.extract('raw', 'html!swig?context=./source/content.yml'),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=runtime',
      },
      {
        test: /\.scss$/,
        loader: cssExtractTextPlugin.extract('raw', 'css?minimize!autoprefixer!sass?outputStyle=expanded'),
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file',
      }
    ],
  },

  plugins: [
    cssExtractTextPlugin,
    htmlExtractTextPlugin,
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js$/,
    }),
  ],

  resolveLoader: {
    modulesDirectories: ['loader', 'node_modules'],
  },

};
