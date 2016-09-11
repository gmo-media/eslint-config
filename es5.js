/**
 * for modern es5
 */
var base = require('./legacy');

module.exports = {
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaFeatures': {
            // enable global strict mode
            'impliedStrict': true
        }
    },
    'rules': Object.assign({}, base.rules, {
        // Best Practices
        'no-case-declarations': 'error',
        'no-empty-pattern': 'error',
        'no-fallthrough': 'error',
        'no-octal': 'error',
        'no-redeclare': 'error',
        'no-self-assign': 'error',
        'no-unused-labels': 'error',

        'array-callback-return': 'warn',
        'block-scoped-var': 'warn',
        'curly': 'warn',
        'guard-for-in': 'warn',
        'no-alert': 'warn',
        'no-caller': 'warn',
        'no-eq-null': 'warn',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-floating-decimal': 'warn',
        'no-iterator': 'warn',
        'no-loop-func': 'warn',
        'no-multi-str': 'warn',
        'no-new-func': 'warn',
        'no-new-wrappers': 'warn',
        'no-proto': 'warn',
        'no-self-compare': 'warn',
        'no-throw-literal': 'warn',
        'no-unused-expressions': ['warn', {
            'allowShortCircuit': true
        }],
        'no-useless-concat': 'warn',
        'no-with': 'warn',
        'wrap-iife': ['warn', 'inside'],
        'yoda': ['warn', 'never', {
            'onlyEquality': true
        }],

        // Variables
        'no-catch-shadow': 'warn',
        'no-undef-init': 'warn',
        'no-undefined': 'warn',
        'no-use-before-define': ['warn', {
            'classes': false,
            'functions': false
        }],

        // Node.js and CommonJS
        'no-new-require': 'warn',

        // Stylistic Issues
        'brace-style': 'warn',
        'comma-style': 'warn',
        'consistent-this': 'warn',
        'lines-around-comment': ['warn', {
            'beforeBlockComment': true,
            'allowBlockStart': true,
            'allowObjectStart': true,
            'allowArrayStart': true
        }],
        'max-nested-callbacks': ['warn', 3],
        'new-parens': 'warn',
        'no-array-constructor': 'warn',
        'no-unneeded-ternary': 'warn',
        'quote-props': ['warn', 'consistent']
    })
};
