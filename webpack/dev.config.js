const base = require('./base.config');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const express = require('express');

const proxy = require('http-proxy-middleware');

const dev = {
    mode: 'development',
    devtool: 'inline-source-map',
    // devtool: 'eval-source-map', // delete unuse code // find it doesn't work
    devServer: {
        contentBase: path.resolve(process.cwd(), 'dist'),
        historyApiFallback: true,
        watchContentBase: true,
        compress: true,
        port: 3000,
        headers: {
            "X-Custom-Foo": "komolei"
        },
        hot: true,
        // index: '/dist/index.html',
        index:'/',
        inline: true,
        lazy: false,
        open: true,
        public: '',
        publicPath: '/',
        // openPage: 'dist/index.html'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    // optimize performance
    // performance: {
    //     hints: "error",
    //     maxEntrypointSize: 400000,
    //     maxAssetSize: 100000
    // },

    watch: true,
    // watchOptions: {
    //     aggregateTimeout: 300,
    //     poll: 2000,
    //     ingored: /node_modules/
    // }
}
// let plugins = [
//     new webpack.NamedModulesPlugin(),
//     new webpack.HotModuleReplacementPlugin()
// ]
// let devSetting = Object.assign({}, base, dev);
// plugins.forEach(item => devSetting.plugins.push(item))
// module.exports = devSetting;

module.exports = merge(base, dev);