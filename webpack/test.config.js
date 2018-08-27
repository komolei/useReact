const base = require('./base.config');
// 分析 bundle 内容的插件及 CLI 工具，以便捷的、交互式、可缩放的树状图形式展现给用户。
// https://github.com/webpack-contrib/webpack-bundle-analyzer
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge=require('webpack-merge');

const testConfig = {
    plugins: [new BundleAnalyzerPlugin({
        analyzerMode: 'static', // server || static || disabled
    })]
}

// module.exports = Object.assign({}, base, testConfig)

module.exports=merge(base,testConfig);