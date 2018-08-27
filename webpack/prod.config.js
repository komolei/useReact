const base = require('./base.config')

const merge = require('webpack-merge');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');

const prod = {
    mode: "production",
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};

console.log('prod is:----------', merge(base, prod));

// module.exports = Object.assign({}, base, prod);

module.exports = merge(base, prod);