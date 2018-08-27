const entry = require('./entry');
const path = require('path');

const webpack = require('webpack');

// const src = path.basename('/src');

// 抽离样式文件

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     // disable:process.env.NODE_ENV==='development' // 使用于生产环境
// })


const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: entry,
    context: path.resolve(process.cwd(), 'src'),

    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx", "json", ".less"]
    },
    output: {
        filename: "js/[name].[hash].bundle.js",
        // filename: 'js/[name].[chunkhash].bundle.js',
        /* 下面三行 起注释作用 */
        library: 'someLibName',
        libraryTarget: 'umd',
        auxiliaryComment: 'Test commit',
        path: path.resolve(process.cwd(), 'dist'),
        pathinfo: true, // 适用于开发环境，告诉webpack引入bundle的注释
        publicPath: '/dist/',
        // sourceMapFilename: "[file].map",
    },
    module: {
        // noParse: /jquery|lodash/ //防止解析某些大型的library文件，如jquery,
        noParse: function (content) {
            return /jquery|context/.test(content)
        },
        rules: [
            // {
            //     test: /\.ts[x]?$/,
            //     use: 'ts-loader',
            //     exclude: /node_modules/
            // },
            // {
            //     test: /\.js[x]?$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader'
            // },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['babel/preset-env']
                    // }
                    // options: {
                    //     'libraryName': 'antd',
                    //     'style': true
                    // }
                }]
                // use: 'babel-loader'
            },
            {
                test: /\.css$/,
                // use: [
                //     { loader: 'style-loader' },
                //     {
                //         loader: 'css-loader', options: {
                //             modules: true,
                //             sourceMap: true,
                //         }
                //     },
                //     { loader: 'postcss-loader' }
                // ]
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        "postcss-loader"
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                        }, {
                            loader: 'postcss-loader'
                        }, {
                            loader: 'sass-loader',
                            // options: {
                            //     sourceMap: true,
                            // }
                        },
                    ],
                    fallback: 'style-loader'
                })
                // use: [
                //     { loader: 'style-loader' },
                //     { loader: 'css-loader' },
                //     { loader: 'sass-loader' }
                // ]
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                        }, {
                            loader: 'postcss-loader'
                        }, {
                            loader: 'less-loader',
                            options: {
                                includePaths: [
                                    path.resolve('../node_modules')],
                                javascriptEnabled: true
                            }
                            // options: {
                            //     sourceMap: true,
                            // }
                        },
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[sha512:hash:base64:7].[ext]',
                            context: path.resolve('/dist/images'),
                            // publicPath:'images',
                            outputPath: 'dist/images'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].[hash].bundle.css'),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            // title: 'Output Management'
            title: 'Caching'
        }),

    ],
    optimization: {
        splitChunks: {
            chunks: "initial",         // 必须三选一： "initial" | "all"(默认就是all) | "async"
            minSize: 0,                // 最小尺寸，默认0
            minChunks: 1,              // 最小 chunk ，默认1
            maxAsyncRequests: 1,       // 最大异步请求数， 默认1
            maxInitialRequests: 1,    // 最大初始化请求书，默认1
            name: () => { },              // 名称，此选项课接收 function
            cacheGroups: {                 // 这里开始设置缓存的 chunks
                priority: "0",                // 缓存组优先级 false | object |
                vendor: {                   // key 为entry中定义的 入口名称
                    chunks: "initial",        // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    test: /react|lodash/,     // 正则规则验证，如果符合就提取 chunk
                    name: "vendor",           // 要缓存的 分隔出来的 chunk 名称
                    minSize: 0,
                    minChunks: 1,
                    enforce: true,
                    maxAsyncRequests: 1,       // 最大异步请求数， 默认1
                    maxInitialRequests: 1,    // 最大初始化请求书，默认1
                    reuseExistingChunk: true   // 可设置是否重用该chunk（查看源码没有发现默认值）
                }
            }
        }
    },
}