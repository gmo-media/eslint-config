var base = require('../es5');

module.exports = Object.assign({}, base.rules, {
    'env': {
        'node': true,
        'commonjs': true
    }
});
