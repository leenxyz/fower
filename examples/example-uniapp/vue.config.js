module.exports = {
  parallel: false,
  chainWebpack(config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compiler = require('@fower/uni-template-compiler')
        return options
      })
  },
}
