module.exports = {
    'env': {
        'node': true,
        'commonjs': true
    },
    'extends': [
        '../es5'
    ].map(require.resolve)
};
