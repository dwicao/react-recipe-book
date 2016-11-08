var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},
			{ 
		        test: /\.css$/, 
		        loader: "style-loader!css-loader" 
		    },
		    { 
		        test: /\.png$/, 
		        loader: "url-loader?limit=100000" 
		    },
		    { 
		        test: /\.jpg$/, 
		        loader: "file-loader" 
		    },
		    {
		        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=application/font-woff'
		    },
		    {
		        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=application/octet-stream'
		    },
		    {
		        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'file'
		    },
		    {
		        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=image/svg+xml'
		    }	
		]
	},
	plugins: [
		new webpack.DefinePlugin({
	   		'process.env': {
	     		 NODE_ENV: JSON.stringify('production')
	    	}
	  	}),
		new ExtractTextPlugin('styles.css'),
		HtmlWebpackPluginConfig,
	]
};