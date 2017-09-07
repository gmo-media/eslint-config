/**
 * Variables
 *
 * 不要な設定は指定しない
 * recommended のままでよい設定も指定しない（`off` にしたいものだけ設定する）
 * fix オプションで修正できるものは `error`、できないものは `warn`
 */
module.exports = {
  'no-catch-shadow': 'warn',
  'no-label-var': 'warn',
  'no-undef-init': 'error',
  'no-undefined': 'warn',
  'no-use-before-define': ['warn', {
    'classes': false,
    'functions': false
  }]
};
