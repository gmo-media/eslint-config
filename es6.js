/**
 * for es6
 */
module.exports = {
  'env': {
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2016,        // same as 7
    'sourceType': 'module',
    'ecmaFeatures': {
      // enable support for the experimental object rest/spread properties
      'experimentalObjectRestSpread': true,
      // enable global strict mode
      'impliedStrict': true
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
