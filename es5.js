/**
 * for modern es5
 */
var base = require('./index');

module.exports = Object.assign({}, base, {
    'env': {
        'browser': true,
        'commonjs': true,
        'jquery': true
    },
    'parserOptions': {
        'sourceType': 'module'
    }
});
