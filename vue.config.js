const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
const webpack = require('webpack')

module.exports = {
  // 根路径 默认使用/ vue cli 3.3+ 弃用 baseUrl
  publicPath: '/',
  // 输出目录
  outputDir: 'dist',
  assetsDir: 'assets',

  css: {
    loaderOptions: {
      stylus: {
        import: '~@/styles/param.styl'
      }
    }
  },

  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.BannerPlugin('Build by 打酱油')
      // new UglifyJsPlugin() // 无法压缩es6代码
    ]
  },

  // 链式配置
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@api', resolve('src/api'))
    .set('@utils', resolve('src/utils'))
    .set('@assets', resolve('src/assets'))
    .set('@comp', resolve('src/components'))
    .set('@config', resolve('src/config'))
    .set('@layouts', resolve('src/layouts'))
    .set('@styles', resolve('src/styles'))
    .set('@views', resolve('src/views'))
  },
  
  // 开发服务器相关配置
  devServer: {
    port: 9900
  },

  productionSourceMap: false // Disable during development
}