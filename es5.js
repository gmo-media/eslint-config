/**
 * for modern es5
 */
module.exports = {
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      // enable global strict mode
      'impliedStrict': true
    }
  },
  'rules': Object.assign({},
    require('./rules/possible-errors'),
    require('./rules/best-practices'),
    require('./rules/variables'),
    require('./rules/stylistic-issues')
  )
};
