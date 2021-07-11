import { Preset } from '@fower/core'
import { Theme } from '@fower/core'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetReactNative: Preset = {
  unit: 'none',
  inline: true,
  theme: theme as Theme,
  plugins,
}

export default presetReactNative
