import { setConfig, injectGlobalStyle } from '@fower/core'
import { store } from '@fower/store'
import presetWeb from '@fower/preset-web'
import { PluginFunction } from 'vue'
import vcss from '@/v-css'

const _Vue = require('vue')

function isVue2() {
  if (_Vue && _Vue.default) {
    if ((_Vue.default.version || '').startsWith('2')) return true
    return false
  }

  if ((_Vue.version || '').startsWith('2')) return true
  return false
}

injectGlobalStyle({
  '*': {
    border: '0 solid #ccc',
    boxSizing: 'border-box',
  },
  '*::before': {
    boxSizing: 'border-box',
  },
  '*::after': {
    boxSizing: 'border-box',
  },
})

setConfig(presetWeb)

// Define typescript interfaces for autoinstaller
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const install: PluginFunction<any> = function installFower(app: typeof _Vue) {
  if ((store.config as any).vuePluginInstalled) return
  ;(store.config as any).vuePluginInstalled = true
  const opt: any = {}

  if (isVue2()) {
    opt.bind = vcss.bind
  } else {
    opt.mounted = vcss.mounted
  }

  app.directive(vcss.name, opt)
}

// Create module definition for Vue.use()
const plugin = {
  install,
}

// To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */

if ('false' === process.env.ES_BUILD) {
  let GlobalVue = null
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalVue = (global as any).Vue
  }
  if (GlobalVue) {
    ;(GlobalVue as typeof _Vue).use(plugin)
  }
}
// Default export is library as a whole, registered via Vue.use()
export default plugin
