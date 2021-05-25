import { Preset } from '@fower/types'
import { Theme } from '@fower/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetReactNative: Preset = {
  unit: 'none',
  inline: true,
  autoDarkMode: false,
  theme: theme as Theme,
  plugins,
}

export default presetReactNative
