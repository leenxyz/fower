import { Preset } from '@styli/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetWeb: Preset = {
  unit: 'px',
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
  theme,
  plugins,
}

export default presetWeb
