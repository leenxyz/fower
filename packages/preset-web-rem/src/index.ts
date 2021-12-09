import { Preset } from '@fower/core'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetWebRem: Preset = {
  unit: 'rem',
  prefix: '',
  plugins,
  theme,
  transformUnit: (value: string | number) => {
    return '' + value + presetWebRem?.unit
  },
}

export default presetWebRem
