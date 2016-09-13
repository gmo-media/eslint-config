/**
 * basic config (for legacy JavaScript)
 */
var ruleBestPractices = {
    'no-case-declarations': 'off',
    'no-empty-pattern': 'off',
    'no-fallthrough': 'off',
    'no-octal': 'off',
    'no-redeclare': 'off',
    'no-self-assign': 'off',
    'no-unused-labels': 'off'
};

var ruleStylisticIssues = {             // fixable only
    'array-bracket-spacing': 'warn',
    'comma-dangle': 'warn',
    'comma-spacing': 'warn',
    'computed-property-spacing': 'warn',
    'eol-last': 'warn',
    'func-call-spacing': 'warn',
    'indent': ['warn', 4],
    'key-spacing': ['warn', {
        'mode': 'minimum'
    }],
    'keyword-spacing': 'warn',
    'linebreak-style': 'warn',
    'no-multiple-empty-lines': ['warn', {
        'max': 2,
        'maxEOF': 1
    }],
    'no-trailing-spaces': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-spacing': 'warn',
    'padded-blocks': ['warn', 'never'],
    'quotes': ['warn', 'single', {
        'avoidEscape': true
    }],
    'semi-spacing': 'warn',
    'semi': 'warn',
    'space-before-blocks': 'warn',
    'space-before-function-paren': ['warn', 'never'],
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn'
};

module.exports = {
    'env': {
        'browser': true,
        'jquery': true
    },
    'extends': 'eslint:recommended',
    'rules': Object.assign({},
        ruleBestPractices,
        ruleStylisticIssues
    ),
    'ruleBestPractices':   ruleBestPractices,
    'ruleStylisticIssues': ruleStylisticIssues
};
