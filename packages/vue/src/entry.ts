import { configure, injectGlobalStyle } from '@styli/core'
import { store } from '@styli/store'
import presetWeb from '@styli/preset-web'
import _Vue, { PluginFunction } from 'vue'
import vcss from '@/v-css'

const isVue2 = (_Vue.version || '').startsWith('2')

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

configure(presetWeb)

// Define typescript interfaces for autoinstaller
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const install: PluginFunction<any> = function installStyli(app: typeof _Vue) {
  if ((store.config as any).vuePluginInstalled) return
  ;(store.config as any).vuePluginInstalled = true
  const opt: any = {}

  if (isVue2) {
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
