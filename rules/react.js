/**
 * ESLint-plugin-React rules
 * https://github.com/yannickcr/eslint-plugin-react
 *
 * 不要な設定は指定しない
 * plugin:react/recommended のままでよい設定も指定しない（`off` にしたいものだけ設定する）
 */
module.exports = {
  'react/display-name': 'off',
  'react/forbid-component-props': 'off',
  'react/forbid-prop-types': 'off',
  'react/jsx-boolean-value': 'warn',
  'react/jsx-closing-bracket-location': 'warn',
  'react/jsx-curly-spacing': 'warn',
  'react/jsx-equals-spacing': 'off',
  'react/jsx-filename-extension': ['warn', {
    'extensions': ['.js', '.jsx']
  }],
  'react/jsx-first-prop-new-line': 'off',
  'react/jsx-handler-names': 'off',
  'react/jsx-indent': ['warn', 4],
  'react/jsx-indent-props': ['warn', 4],
  'react/jsx-key': 'warn',
  'react/jsx-max-props-per-line': ['warn', {
    'maximum': 5
  }],
  'react/jsx-no-bind': 'warn',
  'react/jsx-no-comment-textnodes': 'error',
  'react/jsx-no-duplicate-props': 'warn',
  'react/jsx-no-literals': 'off',
  'react/jsx-no-target-blank': 'off',
  'react/jsx-no-undef': 'warn',
  'react/jsx-pascal-case': 'off',
  'react/jsx-sort-props': 'off',
  'react/jsx-space-before-closing': ['warn', 'never'],
  'react/jsx-uses-react': 'warn',
  'react/jsx-uses-vars': 'warn',
  'react/jsx-wrap-multilines': 'warn',
  'react/no-danger': 'warn',
  'react/no-danger-with-children': 'error',
  'react/no-deprecated': 'warn',
  'react/no-did-mount-set-state': 'warn',
  'react/no-did-update-set-state': 'warn',
  'react/no-direct-mutation-state': 'warn',
  'react/no-find-dom-node': 'off',
  'react/no-is-mounted': 'off',
  'react/no-multi-comp': 'off',
  'react/no-render-return-value': 'error',
  'react/no-set-state': 'off',
  'react/no-string-refs': 'off',
  'react/no-unknown-property': 'warn',
  'react/no-unused-prop-types': 'warn',
  'react/prefer-es6-class': 'off',
  'react/prefer-stateless-function': 'warn',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'warn',
  'react/require-optimization': 'off',
  'react/require-render-return': 'error',
  'react/self-closing-comp': 'warn',
  'react/sort-comp': ['warn', {
    'order': ['lifecycle', 'render', 'everything-else']
  }],
  'react/sort-prop-types': 'warn',
  'react/style-prop-object': 'error'
};
