/**
 * for es6
 */
var base = require('./es5');

module.exports = {
    'env': Object.assign({}, base.env, {
        'es6': true
    }),
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
        'no-extra-bind': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-rename': ['warn', {
            'ignoreDestructuring': true
        }],
        'arrow-body-style': ['warn', 'as-needed', {
            'requireReturnForObjectLiteral': true
        }],
        'arrow-parens': 'warn',
        'arrow-spacing': 'warn',
        'computed-property-spacing': 'warn',
        'generator-star-spacing': ['warn', 'after'],
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'quotes': ['warn', 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }],
        'rest-spread-spacing': 'warn',
        'template-curly-spacing': 'warn',
        'yield-star-spacing': ['warn', 'after']
    })
};
