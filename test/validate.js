/* eslint-disable no-console */
var validator = require('eslint/lib/config/config-validator');
var configs = [
    'index',
    'es5',
    'es6',
    'react'
];

configs.forEach(function(name) {
    var pkg = require('../' + name);
    validator.validate(pkg, name + '.js');
});
console.log('ok');
