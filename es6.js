/**
 * for es6
 */
var base = require('./es5');

module.exports = {
    'env': {
        'es6': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            // enable support for the experimental object rest/spread properties
            'experimentalObjectRestSpread': true,
            // enable global strict mode
            'impliedStrict': true
        }
    },
    'rules': Object.assign({}, base.rules, {
        // Stylistic Issues
        'quotes': ['warn', 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }],

        // ECMAScript 6
        'arrow-parens': 'warn',
        'arrow-spacing': 'warn',
        'generator-star-spacing': ['warn', 'after'],
        'no-useless-computed-key': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-rename': ['warn', {
            'ignoreDestructuring': true
        }],
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'rest-spread-spacing': 'warn',
        'template-curly-spacing': 'warn',
        'yield-star-spacing': ['warn', 'after']
    })
};
