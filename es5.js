/**
 * for modern es5
 */
var base = require('./legacy');

var ruleBestPractices = {
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
    }]
};

var ruleVariables = {
    'no-catch-shadow': 'warn',
    'no-undef-init': 'warn',
    'no-undefined': 'warn',
    'no-use-before-define': ['warn', {
        'classes': false,
        'functions': false
    }]
};

var ruleNodeJSandCommonJS = {
    'no-new-require': 'warn'
};

var ruleStylisticIssues = Object.assign({}, base.ruleStylisticIssues, {
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
});

module.exports = {
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaFeatures': {
            // enable global strict mode
            'impliedStrict': true
        }
    },
    'rules': Object.assign({},
        ruleBestPractices,
        ruleVariables,
        ruleNodeJSandCommonJS,
        ruleStylisticIssues
    ),
    'ruleBestPractices':     ruleBestPractices,
    'ruleVariables':         ruleVariables,
    'ruleNodeJSandCommonJS': ruleNodeJSandCommonJS,
    'ruleStylisticIssues':   ruleStylisticIssues
};
