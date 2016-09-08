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
        'no-alert': 'warn',
        'no-array-constructor': 'warn',
        'no-caller': 'warn',
        'no-case-declarations': 'error',
        'no-eq-null': 'warn',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-iterator': 'warn',
        'no-loop-func': 'warn',
        'no-new-func': 'warn',
        'no-new-require': 'warn',
        'no-new-wrappers': 'warn',
        'no-proto': 'warn',
        'no-throw-literal': 'warn',
        'no-undefined': 'warn',
        'no-use-before-define': ['warn', {
            'classes': false,
            'functions': false
        }],
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'block-scoped-var': 'warn',
        'guard-for-in': 'warn',
        'lines-around-comment': ['warn', {
            'beforeBlockComment': true,
            'allowBlockStart': true,
            'allowObjectStart': true,
            'allowArrayStart': true
        }],
        'max-nested-callbacks': ['warn', 3]
    })
};
