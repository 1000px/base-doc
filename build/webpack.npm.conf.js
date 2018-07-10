const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	// 模块的入口文件
	filename: './package/index.js',
	output: {
		// 输出文件的名称
		filename: 'index.js',
		// 输出文件存放目录
		path: path.resolve(__dirname, 'lib'),
		// 输出的代码符合CommonJS模块化规范，以供其它模块导入使用
		libraryTarget: 'commonjs2'
	},
	externals: /^(vue|babel-runtime)/,
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: path.resolve(__dirname, 'node_modules')
			}, {
				test: /\.css/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'index.css'
		})
	],
	devtool: 'source-map'
}
