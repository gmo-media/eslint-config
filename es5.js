/**
 * for modern es5
 */
var base = require('./index');

module.exports = {
    'env': Object.assign({}, base.env, {
        'commonjs': true,
        'serviceworker': true,
        'worker': true
    }),
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaFeatures': {
            // enable global strict mode
            'impliedStrict': true
        }
    },
    'rules': Object.assign({}, base.rules, {
        'no-array-constructor': 'warn',
        'no-case-declarations': 'warn',
        'no-eq-null': 'warn',
        'no-extend-native': 'warn',
        'no-iterator': 'warn',
        'no-loop-func': 'warn',
        'no-new-func': 'warn',
        'no-new-require': 'warn',
        'no-new-wrappers': 'warn',
        'no-proto': 'warn',
        'no-throw-literal': 'warn',
        'no-use-before-define': 'warn',
        'no-useless-concat': 'warn',
        'no-with': 'warn',
        'block-scoped-var': 'warn',
        'comma-dangle': ['warn', 'only-multiline'],
        'consistent-return': 'warn',
        'guard-for-in': 'warn',
        'max-nested-callbacks': ['warn', 3]
    })
};
