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
        // Best Practices
        'no-case-declarations': 'off',
        'no-empty-pattern': 'off',
        'no-fallthrough': 'off',
        'no-octal': 'off',
        'no-redeclare': 'off',
        'no-self-assign': 'off',
        'no-unused-labels': 'off',

        // Stylistic Issues
        'array-bracket-spacing': 'warn',                    // fixable
        'comma-dangle': 'warn',                             // fixable
        'comma-spacing': 'warn',                            // fixable
        'computed-property-spacing': 'warn',                // fixable
        'eol-last': 'warn',                                 // fixable
        'func-call-spacing': 'warn',                        // fixable
        'indent': ['warn', 4],                              // fixable
        'key-spacing': ['warn', {                           // fixable
            'mode': 'minimum'
        }],
        'keyword-spacing': 'warn',                          // fixable
        'linebreak-style': 'warn',                          // fixable
        'no-multiple-empty-lines': ['warn', {               // fixable
            'max': 2,
            'maxEOF': 1
        }],
        'no-trailing-spaces': 'warn',                       // fixable
        'no-whitespace-before-property': 'warn',            // fixable
        'object-curly-spacing': 'warn',                     // fixable
        'padded-blocks': ['warn', 'never'],                 // fixable
        'quotes': ['warn', 'single', {                      // fixable
            'avoidEscape': true
        }],
        'semi-spacing': 'warn',                             // fixable
        'semi': 'warn',                                     // fixable
        'space-before-blocks': 'warn',                      // fixable
        'space-before-function-paren': ['warn', 'never'],   // fixable
        'space-in-parens': 'warn',                          // fixable
        'space-infix-ops': 'warn',                          // fixable
        'space-unary-ops': 'warn'                           // fixable
    }
};
