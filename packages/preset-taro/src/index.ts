import { Theme } from '@styli/types'
import { Preset } from '@styli/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetTaro: Preset = {
  unit: 'rpx',
  inline: true,
  theme: theme as Theme,
  plugins,
}

export default presetTaro
