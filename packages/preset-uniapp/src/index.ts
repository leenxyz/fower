import { Theme } from '@fower/core'
import { Preset } from '@fower/core'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetUniapp: Preset = {
  pseudos: ['after', 'before'],
  objectPropKeys: ['css'],
  unit: 'rpx',
  theme: theme as Theme,
  plugins,
}

export default presetUniapp
