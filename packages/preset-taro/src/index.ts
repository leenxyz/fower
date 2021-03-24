import { Preset } from '@styli/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetTaro: Preset = {
  prefix: '',
  important: false,
  unit: 'px',
  plugins,
  theme,
}

export default presetTaro
