import { Preset } from '@fower/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetWebRem: Preset = {
  unit: 'rem',
  prefix: '',
  pseudos: [
    'active',
    'checked',
    'disabled',
    'enabled',
    'default',
    'empty',
    'focus',
    'focus-within',
    'invalid',
    'hover',
    'link',
    'visited',
    'first-child',
    'last-child',
    'after',
    'before',
    'placeholder',
    'selection',
  ],
  important: false,
  plugins,
  theme,
  transformUnit: (value: string | number) => {
    return '' + value + presetWebRem?.unit
  },
}

export default presetWebRem
