import { Preset } from '@styli/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetDefault: Preset = {
  prefix: '',
  important: false,
  unit: 'px',
  plugins,
  theme,
}

export default presetDefault
