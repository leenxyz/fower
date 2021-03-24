import { Preset } from '@styli/types'
import { Theme } from '@styli/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetReactNative: Preset = {
  unit: 'none',
  inline: true,
  theme: theme as Theme,
  plugins,
}

export default presetReactNative
