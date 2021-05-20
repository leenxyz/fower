import { Theme } from '@fower/types'
import { Preset } from '@fower/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetUniapp: Preset = {
  unit: 'rpx',
  inline: true,
  theme: theme as Theme,
  plugins,
}

export default presetUniapp
