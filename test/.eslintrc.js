module.exports = {
    'env': {
        'node': true,
        'commonjs': true
    },
    'extends': [
        '../es6'
    ].map(require.resolve)
};
