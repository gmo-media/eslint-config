/**
 * for es6
 */
module.exports = {
  'env': {
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true
    }
  },
  'rules': Object.assign({},
    require('./rules/possible-errors'),
    require('./rules/best-practices'),
    require('./rules/variables'),
    require('./rules/stylistic-issues'),
    require('./rules/ecmascript-6')
  )
};
