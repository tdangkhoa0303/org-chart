const path = require('path');

module.exports = {
	entry: './src/app.js',
	resolve: {
		extensions: ['.js', '*'],
		modules: [path.resolve(__dirname, "src"), "node_modules"]
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
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	}
};
