/**
 * for legacy script
 */
module.exports = {
  'env': {
    'browser': true,
    'jquery': true
  },
  'extends': 'eslint:recommended',
  'rules': {
    // Possible Errors
    // recommended のうち、バグ発見の可能性が低いものは `off`
    'no-compare-neg-zero': 'off',
    'no-constant-condition': 'off',
    'no-control-regex': 'off',
    'no-empty': 'off',
    'no-func-assign': 'off',
    'no-inner-declarations': 'off',
    'no-obj-calls': 'off',
    'no-sparse-arrays': 'off',

    // Best Practices
    // recommended のうち、fix オプションで修正できないものは `off`
    'no-case-declarations': 'off',
    'no-empty-pattern': 'off',
    'no-fallthrough': 'off',
    'no-global-assign': 'off',
    'no-octal': 'off',
    'no-redeclare': 'off',
    'no-self-assign': 'off',
    'no-useless-escape': 'off',

    // Variables
    // recommended の内容をすべて `off`
    'no-delete-var': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off'
  }
};
