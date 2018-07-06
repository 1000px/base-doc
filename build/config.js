var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('./../components.json');
var saladConfig = require('./salad.config.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, './../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, './../src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, './../src/transitions'));
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`kfront-base-ui/package/${key}`] = `kfront-base-ui/lib/${key}`;
});

externals['kfront-base-ui/src/locale'] = 'kfront-base-ui/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`kfront-base-ui/src/utils/${file}`] = `kfront-base-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`kfront-base-ui/src/mixins/${file}`] = `kfront-base-ui/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`kfront-base-ui/src/transitions/${file}`] = `kfront-base-ui/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  package: path.resolve(__dirname, '../package'),
  examples: path.resolve(__dirname, '../examples'),
  'vue$': 'vue/dist/vue.esm.js',
  '@': path.resolve('examples'),
  '_src': path.resolve('src'),
  'static': path.resolve(__dirname, '../static')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;

exports.postcss = function(webapck) {
  saladConfig.features.partialImport = {
    addDependencyTo: webapck
  };
  return [
    require('postcss-salad')(saladConfig)
  ];
};
