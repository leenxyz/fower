import { styli } from '@styli/core'
import { styled } from '@styli/styled'
import presetWeb from '@styli/preset-web'
import { injectGlobalStyle } from './injectGlobalStyle'

export { jsx } from './jsx'
export { injectGlobalStyle } from './injectGlobalStyle'
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

styli.configure(presetWeb)
