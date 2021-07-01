import { Preset } from '@fower/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetWeb: Preset = {
  unit: 'px',
  prefix: '',
  theme,
  plugins,
}

export default presetWeb
