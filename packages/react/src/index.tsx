import { setConfig, injectGlobalStyle } from '@fower/core'
import presetWeb from '@fower/preset-web'

export { jsx } from './jsx'
export { Box, BoxComponent } from './Box'

const serverCache = (globalThis as any).fower

if (!serverCache) {
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
}

setConfig(presetWeb)
