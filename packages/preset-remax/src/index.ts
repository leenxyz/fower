import { Theme } from '@fower/core'
import { Preset } from '@fower/core'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetRemax: Preset = {
  unit: 'rpx',
  inline: true,
  theme: theme as Theme,
  plugins,
}

export default presetRemax
