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
        'no-console': ['error', {
            'allow': ['warn', 'error']
        }],
        'no-control-regex': 'off',
        'no-extra-boolean-cast': 'off',
        'no-floating-decimal': 'warn',
        'no-invalid-regexp': 'off',
        'no-iterator': 'warn',
        'no-lonely-if': 'warn',
        'no-multi-str': 'warn',
        'no-multiple-empty-lines': ['warn', {
            'max': 2,
            'maxEOF': 1
        }],
        'no-self-compare': 'warn',
        'no-spaced-func': 'warn',
        'no-whitespace-before-property': 'warn',
        'no-trailing-spaces': 'warn',
        'no-undef-init': 'warn',
        'no-undefined': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-unused-expressions': ['warn', {
            'allowShortCircuit': true,
            'allowTernary': true
        }],
        'array-bracket-spacing': 'warn',
        'array-callback-return': 'warn',
        'comma-dangle': 'warn',
        'comma-spacing': 'warn',
        'comma-style': 'warn',
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
        'lines-around-comment': ['warn', {
            'beforeBlockComment': true,
            'allowBlockStart': true,
            'allowObjectStart': true,
            'allowArrayStart': true
        }],
        'new-parens': 'warn',
        'object-curly-spacing': 'warn',
        'padded-blocks': ['warn', 'never'],
        'quote-props': ['warn', 'consistent'],
        'quotes': ['warn', 'single', {
            'avoidEscape': true
        }],
        'semi': ['warn', 'always', {
            'omitLastInOneLineBlock': true
        }],
        'semi-spacing': 'warn',
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', 'never'],
        'space-in-parens': ['warn', 'never'],
        'space-infix-ops': 'warn',
        'space-unary-ops': 'warn',
        'wrap-iife': ['warn', 'inside'],
        'yoda': ['warn', 'never', {
            'exceptRange': true
        }]
    }
};
