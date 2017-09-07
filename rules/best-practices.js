/**
 * Best Practices
 *
 * 不要な設定は指定しない
 * recommended の設定は `off` にするものだけ指定する
 * fix オプションで修正できるものは `error`、できないものは `warn`
 */
module.exports = {
  'accessor-pairs': 'warn',
  'array-callback-return': 'warn',
  'block-scoped-var': 'warn',
  'consistent-return': 'warn',
  'curly': 'error',
  'dot-location': ['error', 'property'],
  'dot-notation': 'error',
  'eqeqeq': ['error', 'smart'],
  'guard-for-in': 'warn',
  'no-alert': 'warn',
  'no-caller': 'warn',
  'no-div-regex': 'warn',
  'no-empty-function': ['warn', {
    'allow': ['functions']
  }],
  'no-eq-null': 'warn',
  'no-eval': 'warn',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-floating-decimal': 'error',
  'no-implied-eval': 'warn',
  'no-iterator': 'warn',
  'no-lone-blocks': 'warn',
  'no-loop-func': 'warn',
  'no-multi-spaces': ['error', {
    'ignoreEOLComments': true,
    'exceptions': {
      'Property': true,
      'BinaryExpression': true,
      'VariableDeclarator': true,
      'ImportDeclaration': true
    }
  }],
  'no-multi-str': 'warn',
  'no-new-func': 'warn',
  'no-new-wrappers': 'warn',
  'no-octal-escape': 'warn',
  'no-proto': 'warn',
  'no-self-compare': 'warn',
  'no-useless-concat': 'warn',
  'no-useless-return': 'error',
  'no-with': 'warn',
  'radix': ['warn', 'as-needed'],
  'require-await': 'warn',
  'wrap-iife': ['error', 'inside'],
  'yoda': ['error', 'never', {
    'onlyEquality': true
  }]
};
