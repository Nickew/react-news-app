import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
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
		chuckFilename: '[name].chunk.js',
	},

	plguins: dependencyHandlers().concat(plugins),

	devtool: 'eval-source-map',

	performance: {
		hints: false,
	},
});

function dependencyHandlers() {
	return [
		new webpack.optimize.CommonsChunkPlguin({
			name: 'vendor',
			children: true,
			minChunk: 2,
			async: true,
		}),
	];
}