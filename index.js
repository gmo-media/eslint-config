/**
 * basic config (for legacy JavaScript)
 */
module.exports = {
    'env': {
        'browser': true,
        'jquery': true
    },
    'extends': 'eslint:recommended',
    'rules': {
        'no-catch-shadow': 'warn',
        'no-case-declarations': 'off',
        'no-control-regex': 'off',
        'no-extra-boolean-cast': 'off',
        'no-floating-decimal': 'warn',
        'no-invalid-regexp': 'off',
        'no-multi-str': 'warn',
        'no-multiple-empty-lines': ['warn', {
            'max': 2,
            'maxEOF': 1
        }],
        'no-self-compare': 'warn',
        'no-spaced-func': 'warn',
        'no-trailing-spaces': 'warn',
        'no-undef-init': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-unused-expressions': ['warn', {
            'allowShortCircuit': true,
            'allowTernary': true
        }],
        'no-whitespace-before-property': 'warn',
        'no-with': 'warn',
        'array-bracket-spacing': 'warn',
        'array-callback-return': 'warn',
        'comma-dangle': 'warn',
        'comma-spacing': 'warn',
        'comma-style': 'warn',
        'computed-property-spacing': 'warn',
        'consistent-this': 'warn',
        'curly': 'warn',
        'eol-last': 'warn',
        'func-call-spacing': 'warn',
        'indent': ['warn', 4],
        'key-spacing': ['warn', {
            'mode': 'minimum'
        }],
        'keyword-spacing': 'warn',
        'linebreak-style': 'warn',
        'new-parens': 'warn',
        'object-curly-spacing': 'warn',
        'padded-blocks': ['warn', 'never'],
        'quote-props': ['warn', 'consistent'],
        'quotes': ['warn', 'single', {
            'avoidEscape': true
        }],
        'semi': 'warn',
        'semi-spacing': 'warn',
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', 'never'],
        'space-in-parens': 'warn',
        'space-infix-ops': 'warn',
        'space-unary-ops': 'warn',
        'wrap-iife': ['warn', 'inside'],
        'yoda': ['warn', 'never', {
            'onlyEquality': true
        }]
    }
};
