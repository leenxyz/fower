import { Theme } from '@fower/types'
import { Preset } from '@fower/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetUniapp: Preset = {
  pseudos: ['after', 'before'],
  unit: 'rpx',
  autoDarkMode: false,
  theme: theme as Theme,
  plugins,
}

export default presetUniapp
