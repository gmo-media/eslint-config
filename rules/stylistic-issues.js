/**
 * Stylistic Issues
 *
 * 不要な設定は指定しない
 * recommended のままでよい設定も指定しない（`off` にしたいものだけ設定する）
 * fix オプションで修正できるものは `error`、できないものは `warn`
 */
module.exports = {
  'array-bracket-spacing': 'error',
  'block-spacing': 'error',
  'brace-style': 'error',
  'comma-dangle': 'error',
  'comma-spacing': 'error',
  'comma-style': 'error',
  'computed-property-spacing': 'error',
  'consistent-this': 'warn',
  'eol-last': 'error',
  'func-call-spacing': 'error',
  'jsx-quotes': 'error',
  'key-spacing': ['error', {
    'mode': 'minimum'
  }],
  'keyword-spacing': 'error',
  'linebreak-style': 'error',
  'lines-around-comment': ['error', {
    'beforeBlockComment': true,
    'allowBlockStart': true,
    'allowObjectStart': true,
    'allowArrayStart': true
  }],
  'max-nested-callbacks': ['warn', 5],
  'max-statements-per-line': 'warn',
  'new-parens': 'error',
  'no-array-constructor': 'warn',
  'no-lonely-if': 'error',
  'no-multiple-empty-lines': ['error', {
    'max': 2,
    'maxEOF': 1
  }],
  'no-new-object': 'warn',
  'no-restricted-syntax': ['warn', 'WithStatement'],
  'no-tabs': 'warn',
  'no-trailing-spaces': 'error',
  'no-unneeded-ternary': 'error',
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': ['error', 'below'],
  'object-curly-newline': ['error', {
    'consistent': true
  }],
  'object-curly-spacing': 'error',
  'object-property-newline': ['error', {
    'allowMultiplePropertiesPerLine': true
  }],
  'one-var-declaration-per-line': 'error',
  'operator-assignment': 'error',
  'operator-linebreak': 'error',
  'padded-blocks': ['error', 'never'],
  'quote-props': ['error', 'as-needed', {
    'keywords': true,     // 分かりにくさ解消のため
    'numbers': true,      // 分かりにくさ解消のため
    'unnecessary': false  // JSONからコピーした時のため
  }],
  'quotes': ['error', 'single', {
    'avoidEscape': true,
    'allowTemplateLiterals': true
  }],
  'semi': 'error',
  'semi-spacing': 'error',
  'semi-style': 'error',
  'space-before-blocks': 'error',
  'space-before-function-paren': ['error', {
    'anonymous': 'never',
    'named': 'never',
    'asyncArrow': 'always'
  }],
  'space-in-parens': 'error',
  'space-infix-ops': 'error',
  'space-unary-ops': 'error',
  'spaced-comment': ['error', 'always', {
    'block': {'balanced': true}
  }],
  'switch-colon-spacing': 'error',
  'template-tag-spacing': 'error',
  'unicode-bom': 'error'
};
