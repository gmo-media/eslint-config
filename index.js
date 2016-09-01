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
        'array-bracket-spacing': ['error', 'never'],
        'block-scoped-var': 'warn',
        'brace-style': 'error',
        'comma-spacing': ['error', {
            'after': true,
            'before': false
        }],
        'comma-style': ['error', 'last'],
        'consistent-this': ['warn', 'self'],
        'curly': ['error', 'all'],
        'func-style': 0,
        'guard-for-in': 'warn',
        'indent': ['error', 4],
        'key-spacing': ['error', {
            'singleLine': {
                'afterColon': true,
                'beforeColon': false
            }
        }],
        'keyword-spacing': ['error', {
            'after': true,
            'before': true
        }],
        'linebreak-style': ['error', 'unix'],
        'max-nested-callbacks': ['warn', 3],
        'new-cap': ['warn', {
            'capIsNew': true,
            'newIsCap': true
        }],
        'no-alert': 'warn',
        'no-catch-shadow': 'error',
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-empty': 'warn',
        'no-eq-null': 'error',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-parens': 'warn',
        'no-floating-decimal': 'error',
        'no-iterator': 'warn',
        'no-lonely-if': 'warn',
        'no-multi-spaces': ['error', {
            'exceptions': {
                'AssignmentExpression': true,
                'ImportDeclaration': true,
                'Property': true,
                'VariableDeclarator': true
            }
        }],
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['warn', {
            'max': 2
        }],
        'no-nested-ternary': 'error',
        'no-proto': 'warn',
        'no-self-compare': 'error',
        'no-throw-literal': 'warn',
        'no-trailing-spaces': 'warn',
        'no-undef-init': 'warn',
        'no-undefined': 'warn',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'warn',
        'no-unused-vars': 'warn',
        'object-curly-spacing': ['error', 'never'],
        'operator-linebreak': ['warn', 'before'],
        'padded-blocks': ['error', 'never'],
        'quote-props': ['warn', 'consistent'],
        'quotes': ['warn', 'single'],
        'semi': ['error', 'always'],
        'semi-spacing': ['warn', {
            'after': true,
            'before': false
        }],
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'warn',
        'space-unary-ops': ['error', {
            'nonwords': false,
            'words': true
        }],
        'strict': 'warn',
        'wrap-iife': ['error', 'inside'],
        'yoda': 'warn'
    }
};
