import CSS from 'csstype'
import { Theme } from '@styli/theming'
import { Sheet } from './Sheet'

type CSSProperties = CSS.Properties<number | string>
type PseudosObject = { [P in CSS.Pseudos]?: CSSProperties }

type FnValue = (theme: Theme) => boolean | number | string | (boolean | number | string)[]

export type PropValue = FnValue | boolean | number | string | (boolean | number | string)[]

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
  isMatch?(key: string): boolean
  onVisitProp?(atom: Atom, sheet: Sheet): Atom
  middleware?(plugin: Plugin, atom: Atom, sheet: Sheet, theme: Theme): Atom
}

export interface Atom {
  propKey: 'css' | 'debug' | 'reset' | ({} & string)
  propValue: string | number | boolean | CssObject | ((theme: Theme) => any)
  style: CssObject
  pseudo?: 'link' | 'visited' | 'hover' | 'active'
  type?: 'style' | 'prefix' | 'no-prefix'
  className?: string
}

export interface Cache {
  [className: string]: any
}
