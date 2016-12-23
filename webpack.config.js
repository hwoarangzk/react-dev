var webpack = require('webpack');

module.exports = {
	entry: {
		vendor: ['react', 'react-dom'],
		index: './src/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: './dist',
		publicPath: './dist'
	},
	module: {
		loaders: [{
			test: /\.jsx?/,
			loader: 'babel',
			exclude: /node_module/,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
	]
};