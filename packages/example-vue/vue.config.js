module.exports = {
  chainWebpack(config) {
    // config.module.rule('vue').uses.delete('cache-loader')
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compiler = null
        options.compiler = require('./styli-vue-compiler.js')
        // options.compiler = require('styled-vue/compiler') // <- here
        return options
      })
  },
}
