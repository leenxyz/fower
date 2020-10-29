import { CSSProperties } from 'react'
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
  propKey: string
  propValue: any
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

export interface Plugin {
  onVisitProp?(prop: Prop, rule: Rule, sheet: Sheet): Rule | undefined | null
  onStylesCreated?(): void
}

export interface Rule {
  name: 'css' | ({} & string)
  style?: CSSProperties
  cssFragment?: string
  cssFragmentList?: string[] // media queries
  cssFragmentWithSelector?: string // css prop
  pseudo?: 'link' | 'visited' | 'hover' | 'active'
  type?: 'style' | 'font' | 'keyframe'
  className?: string
}
