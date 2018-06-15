var cooking = require('cooking');
var gen = require('./../../build/gen-single-config');

cooking.set(gen(__dirname, 'KcUpload'));

module.exports = cooking.resolve();
