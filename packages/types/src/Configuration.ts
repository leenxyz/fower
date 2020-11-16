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
  prefix?: string
  /** use inline style or not */
  inline?: boolean
  important?: boolean
  theme: Theme
  plugins: StyliPlugin[]
  transformUnit?: (value: number | string, modifierType?: ModifierType) => string
}

export type Preset = Partial<Configuration>

export interface Cache {
  [className: string]: any
}
