// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//     .BundleAnalyzerPlugin;
// module.exports = {
//     configureWebpack: {
//         plugins: [new BundleAnalyzerPlugin()]
//     },
//     publicPath: '/'

// };

// vue.config.js
module.exports = {
    publicPath: '/',
    // configureWebpack: {
    //     plugins: [new BundleAnalyzerPlugin()]
    // },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                options.limit = -1
                return options
            }),
            config.plugins.delete('prefetch')
            config.plugin('preload').tap((options) => {
                options[0].include = 'allChunks'
                return options
            })
    },
    transpileDependencies: ['leaflet', 'firebase-firestore-lite']
}