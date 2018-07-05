'use strict'
require('./check-versions')()
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const vueLoaderConfig = require('./vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

process.env.NODE_ENV = 'components'

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

const webpackConfig = {
	entry: {
		index: './package/index.js'
	},
	output: {
		path: resolve('/kfront-baseui/lib'),
		filename: 'index.js',
		libraryExport: "default",
  		libraryTarget: "var"
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('examples'),
			'_src': resolve('src')
		}
	},
	devtool: 'source-map',
	externals: /^(vue|babel-runtime)/,
	module: {
		rules: [
			{
				// 增加对css的支持
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader']
				})
			}, {
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('package')]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'index.css'
		})
	]
}
const spinner = ora('building for production...')
spinner.start()
console.log('1000px', __dirname)
rm(path.join(__dirname, '../kfront-baseui/lib'), err => {
	if (err) throw err
	webpack(webpackConfig, function (err, stats) {
		spinner.stop()
		if (err) throw err
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		}) + '\n\n')

		if (stats.hasErrors()) {
			console.log(chalk.red('  Build failed with errors.\n'))
			process.exit(1)
		}

		console.log(chalk.cyan('  Build complete.\n'))
		console.log(chalk.yellow(
			'  Tip: built files are meant to be served over an HTTP server.\n' +
			'  Opening index.html over file:// won\'t work.\n'
		))
	})
})
