const path = require('path')
// const CompressionPlugin = require('compression-webpack-plugin') // compression-webpack-plugin插件需要npm安装

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 1831, 
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'vue-styli'
        return args
      })
  }
}
