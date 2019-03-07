const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	name: 'browser',
	mode: 'development',
	entry: './client/index.js',
	devtool: 'cheap-eval-source-map',
	resolve: {
		extensions: ['.js']
	},
	output: {
		path: path.resolve(__dirname, './client/dist'),
		filename: 'clientBundle.js',
		publicPath: '/'
	},
	module:{
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use:['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpe?g)$/,
				use: 'url-loader?name=images/[name].[ext]'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './client/index.html',
			inject: true
		})
	],
	devServer:{
		"proxy": {
		  "**": "http://[::1]:7500"
		},
		hot: true,
		historyApiFallback: true,
		inline: true,
		contentBase: path.resolve(__dirname, "./client/dist"),
		watchOptions: {
			ignored: /node_modules/,
			poll: true
		}
	},
}
