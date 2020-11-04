import { Preset } from '@styli/core'
import { plugins } from './plugins'
import { middleware } from './middleware'
import { theme } from './theme'

export const presetDefault: Preset = {
  prefix: '',
  important: false,
  unit: 'px',
  plugins,
  middleware,
  theme,
}

export default presetDefault
