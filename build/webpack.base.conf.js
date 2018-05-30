'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const md = require('markdown-it')();
const markdownItContainer = require('markdown-it-container')
const striptags = require('./strip-tags')

const vueMarkdown = {
    preprocess: (MarkdownIt, source) => {
        console.log(1000, MarkdownIt),
        console.log(1001, source);
        MarkdownIt.renderer.rules.table_open = function() {
            return '<table class="table">'
        }
        MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence);
        // ```code```给这种样式加个class code_inline
        const code_inline = MarkdownIt.renderer.rules.code_inline;
        MarkdownIt.renderer.rules.code_inline = function(...args) {
            args[0][args[1]].attrJoin('class', 'code_inline');
            return code_inline(...args);
        }
        return source;
    },
    use: [
        [markdownItContainer, 'demo', {
          validate: params => params.trim().match(/^demo\s*(.*)$/),
          render: function(tokens, idx) {
            var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
    
            if (tokens[idx].nesting === 1) {
                var description = (m && m.length > 1) ? m[1] : '';
                var content = tokens[idx + 1].content;
                var tags = ['script', 'style']
                var html = utils.convertHtml(striptags(content, tags)).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                var script = striptags.fetch(content, 'script');
                var style = striptags.fetch(content, 'style');
                var descriptionHTML = description
                  ? md.render(description)
                  : '';

                return `<demo-block>
                            <div slot="desc">${html}</div>
                            ${descriptionHTML}
                            <div slot="highlight">`;
            }
            return '</div></demo-block>\n';
          }
        }]
    ]
}

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		app: ['babel-polyfill', './examples/main.js']
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('examples'),
			'static': path.resolve(__dirname, '../static')
		}
	},
	module: {
		rules: [
			...(config.dev.useEslint? [{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [resolve('examples'), resolve('test')],
				options: {
					formatter: require('eslint-friendly-formatter'),
					emitWarning: !config.dev.showEslintErrorsInOverlay
				}
			}] : []),
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('examples'), resolve('test')]
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
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
            },
            {
                test: /\.md$/,
                loader: 'vue-markdown-loader',
                options: vueMarkdown
            }
		]
	}
}
