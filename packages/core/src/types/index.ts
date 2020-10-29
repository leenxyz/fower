import { CSSProperties } from 'react'
import { Sheet } from '../Sheet'
export * from './Modifiers'

export interface Props {
  [key: string]: string
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

export interface PlainObject {
  [key: string]: any
}

export interface Prop {
  propKey: string
  propValue: any
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
