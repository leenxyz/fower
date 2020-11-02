import CSS from 'csstype'
import { Sheet } from '../Sheet'

type CSSProperties = CSS.Properties<number | string>
// type CSSProperties = CSS.PropertiesFallback<number | string>

export type PropValue = boolean | number | string | (boolean | number | string)[]

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

export interface Props {
  style?: any
  className?: string
  css?: any
  [key: string]: any
}

interface Theme {
  [key: string]: any
}

export type PseudosObject = { [P in CSS.Pseudos]?: CSSProperties }

export type CssObject<T = any> =
  | (CSSProperties & PseudosObject)
  | {
      [K in keyof T]?: T[K] extends object ? CssObject<T[K]> : CSSProperties
    }

export interface Config {
  unit: 'none' | 'px' | 'rem' | 'em' | 'vh' | 'rpx' | ({} & string)
  prefix?: string
  /** use inline style or not */
  inline?: boolean
  important?: boolean
  theme: Theme
  plugins: Plugin[]
  transformUnit?: (value: number | string, modifierType?: ModifierType) => string
}

export type Preset = Partial<Config>

export interface Plugin {
  name: string
  isMatch(key: string): boolean
  onVisitProp?(atom: Atom, sheet: Sheet): Atom
  onStylesCreated?(): void
}

export interface Atom {
  propKey: 'css' | ({} & string)
  propValue: string
  style: CssObject
  pseudo?: 'link' | 'visited' | 'hover' | 'active'
  type?: 'style' | 'font' | 'keyframe'
  className?: string
}

export interface Cache {
  [className: string]: any
}
