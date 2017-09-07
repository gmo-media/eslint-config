/**
 * Possible Errors
 *
 * 不要な設定は指定しない
 * recommended の設定は `off` にするものだけ指定する
 * fix オプションで修正できるものは `error`、できないものは `warn`
 */
module.exports = {
  'for-direction': 'warn',
  'getter-return': 'warn',
  'no-await-in-loop': 'warn',
  'no-extra-parens': 'off',             // Issue #1
  'no-prototype-builtins': 'warn'
};
