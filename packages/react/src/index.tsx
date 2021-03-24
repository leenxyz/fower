import { styli } from '@styli/core'
import { styled } from '@styli/styled'
import presetWeb from '@styli/preset-web'

export { jsx } from './jsx'
export { Box, BoxComponent } from './Box'

export const View = styled('div')
export const Text = styled('span')
export const Image = styled('img')

styli.configure(() => presetWeb)
