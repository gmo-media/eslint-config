/**
 * for es6
 */
var base = require('./index');

module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'jquery': true,
        'worker': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'rules': Object.assign({}, base.rules, {
        'arrow-parens': ['warn', 'always'],
        'arrow-spacing': ['warn', {
            'after': true,
            'before': true
        }],
        'generator-star-spacing': ['warn', {
            'after': true,
            'before': false
        }],
        'no-confusing-arrow': 'error',
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-duplicate-imports': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-rename': 'warn',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'template-curly-spacing': 'warn',
        'yield-star-spacing': ['warn', {
            'after': true,
            'before': false
        }]
    })
};
