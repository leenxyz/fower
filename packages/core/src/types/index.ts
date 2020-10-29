import { Sheet } from '../Sheet'
import { ModifierType } from './Modifiers'
export * from './Modifiers'

export interface Props {
  style?: any
  [key: string]: any
}

export interface MarginMaps {
  [key: string]: string[]
}

export interface SizeMaps {
  [key: string]: string[]
}

export interface PaddingMaps {
  [key: string]: string[]
}

export interface Prop {
  key: string
  value: any
}

export interface PluginReturn {
  sheet: Sheet
  matched?: boolean
}

export interface Plugin {
  onVisitProp?(prop: Prop, sheet: Sheet): PluginReturn
  onStylesCreated?(): void
}

interface Theme {
  [key: string]: any
}

export interface Config {
  plugins: Plugin[]
  unit: 'none' | 'px' | 'rem' | 'em' | 'vh' | 'rpx' | ({} & string)
  theme: Theme
  transformUnit: (value: number | string, modifierType?: ModifierType) => string
}

export type Preset = Partial<Config>
