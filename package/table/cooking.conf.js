var cooking = require('cooking');
var gen = require('../../build/gen-single-config');

cooking.set(gen(__dirname, 'KcTable', '_index.js'));

module.exports = cooking.resolve();
