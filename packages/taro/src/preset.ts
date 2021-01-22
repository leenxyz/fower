import { Theme } from '@styli/types'
import { theme } from './theme'
import { plugins } from './plugin'

export const preset = {
  unit: 'rpx',
  inline: true,
  theme: theme as Theme,
  plugins,
}
