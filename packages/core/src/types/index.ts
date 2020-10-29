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
  key: string
  value: any
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

export interface Plugin {
  onVisitProp?(prop: Prop, initRule: Rule, sheet: Sheet): Rule | void
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

export interface Rule {
  name: 'css' | ({} & string)
  // style?: CSSProperties
  style?: any
  cssFragment?: string
  cssFragmentList?: string[] // media queries
  cssFragmentWithSelector?: string // css prop
  pseudo?: 'link' | 'visited' | 'hover' | 'active'
  type?: 'style' | 'font' | 'keyframe'
  className?: string
}
