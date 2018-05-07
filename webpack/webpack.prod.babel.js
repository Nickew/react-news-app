// import path from 'path';
// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import OfflinePlugin from 'offline-plugin';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');


module.exports = require('./webpack.base.babel')({
  entry: [
    path.join(process.cwd(), 'src/index.jsx'),
  ],

  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    new OfflinePlugin({
      relativePath: false,
      publicPath: '/',

      excludes: ['.htaccess'],

      caches: {
        main: [':rest:'],

        additional: ['*.chunk.js'],
      },
      safeToUseOptionalCaches: true,

      AppCache: false,
    }),
  ],
});
