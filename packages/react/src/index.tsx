import { setConfig, injectGlobalStyle } from '@fower/core'
import { styled } from '@fower/styled'
import presetWeb from '@fower/preset-web'

export { jsx } from './jsx'
export { Box, BoxComponent } from './Box'

export const View = styled('div')
export const Text = styled('span')
export const Image = styled('img')

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
