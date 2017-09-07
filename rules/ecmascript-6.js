/**
 * ECMAScript 6
 *
 * 不要な設定は指定しない
 * recommended の設定は `off` にするものだけ指定する
 * fix オプションで修正できるものは `error`、できないものは `warn`
 */
module.exports = {
  'arrow-body-style': 'error',
  'arrow-parens': ['error', 'as-needed', {      // Airbnb style
    'requireForBlockBody': true
  }],
  'arrow-spacing': 'error',
  'generator-star-spacing': ['error', 'after'],
  'no-duplicate-imports': 'warn',
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'warn',
  'no-useless-rename': 'error',
  'no-var': 'error',
  'object-shorthand': ['error', 'consistent-as-needed'],
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': ['warn', {
    'VariableDeclarator': {
      'array': false,
      'object': true
    },
    'AssignmentExpression': {
      'array': true,
      'object': true
    }
  }],
  'prefer-numeric-literals': 'error',
  'prefer-rest-params': 'warn',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'rest-spread-spacing': 'error',
  'sort-imports': 'error',
  'template-curly-spacing': 'error',
  'yield-star-spacing': 'error'
};
