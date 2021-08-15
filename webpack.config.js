const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	resolve: {
		extensions: ['.js', '*'],
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},
	mode: 'development',
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
			ignoreOrder: false,
		}),
	],
	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin({})],
	},
	module: {
		rules: [
			{
				test: /\.((sa|sc|c)ss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
};
