module.exports = {
  parallel: false,
  chainWebpack(config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compiler = require('@fower/vue-template-compiler')
        return options
      })
  },
}
