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
  onVisitProp?(atom: Atom, sheet: Sheet): Atom | undefined | null
  onStylesCreated?(): void
}

export interface Atom {
  propKey: 'css' | ({} & string)
  propValue: string
  style: CSSProperties
  pseudo?: 'link' | 'visited' | 'hover' | 'active'
  type?: 'style' | 'font' | 'keyframe'
  className?: string
}
