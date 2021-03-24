import { Preset } from '@styli/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetReactNative: Preset = {
  prefix: '',
  important: false,
  unit: 'px',
  plugins,
  theme,
}

export default presetReactNative
