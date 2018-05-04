// import path from 'path';
// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require(path.resolve(process.cwd(), 'package.json'));

const plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	new HtmlWebpackPlugin({
		inject: true,
		template: 'src/index.html',
	}),
];

module.exports = require('./webpack.base.babel') ({
	entry: [
		'webpack-hot-middleware/client?reload=true',
		path.join(process.cwd(), 'src/index.jsx'),
	],

	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},

	plugins: dependencyHandlers().concat(plugins),

	devtool: 'cheap-module-source-map', //eval-source-map

	performance: {
		hints: false,
	},
});

function dependencyHandlers() {
	return [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			children: true,
			minChunk: 2,
			async: true
		}),
	];
}