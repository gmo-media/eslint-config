'use strict';

const validator = require('eslint/lib/config/config-validator');
const Environments = require('eslint/lib/config/environments');
const Linter = require('eslint/lib/linter');

const configs = [
    'legacy',
    'es5',
    'es6',
    'react'
];

configs.forEach((name) => {
    const pkg = require(`../${name}`);
    validator.validate(pkg, `${name}.js`, (new Linter()).rules, new Environments());
});

// eslint-disable-next-line no-console
console.log('ok');
