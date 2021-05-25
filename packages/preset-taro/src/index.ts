import { Theme } from '@fower/types'
import { Preset } from '@fower/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetTaro: Preset = {
  unit: 'rpx',
  inline: true,
  autoDarkMode: false,
  theme: theme as Theme,
  plugins,
}

export default presetTaro
