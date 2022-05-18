const path = require('path');

module.exports = {
resolve: {
		fallback: {
			buffer: require.resolve('buffer/'),
			crypto: require.resolve('crypto-browserify'),
			process: require.resolve('process/browser'),
			stream: require.resolve("stream-browserify"),
			path: require.resolve("path-browserify")
		} 
	},
  	entry: './src/index.js',
  	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
  	},
  	optimization: {
		minimize: false,
		moduleIds: "named"
  	},
	mode: 'development'
};