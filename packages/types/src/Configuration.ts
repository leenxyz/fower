import { Theme } from './Theme'
import { StyliPlugin } from './StyliPlugin'

export enum ModifierType {
  margin = 'margin',
  padding = 'padding',
  border = 'border',
  position = 'position',
  text = 'text',
  size = 'size',
  ZIndex = 'ZIndex',
  opacity = 'opacity',
  shadow = 'shadow',
  flex = 'flex',
  flexItem = 'flexItem',
  lineHeight = 'lineHeight',
}

export interface Configuration {
  unit: 'none' | 'px' | 'rem' | 'em' | 'vh' | 'rpx' | ({} & string)
  dev?: boolean
  prefix?: string
  /** use inline style or not */
  inline?: boolean
  important?: boolean
  theme: Theme
  plugins: StyliPlugin[]
}

export type Preset = Partial<Configuration>
