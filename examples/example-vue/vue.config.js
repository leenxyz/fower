module.exports = {
  lintOnSave: false,
  chainWebpack(config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compiler = require('@styli/vue-template-compiler')
        return options
      })
  },
}
