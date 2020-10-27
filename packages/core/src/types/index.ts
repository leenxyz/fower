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
  key: string
  value: any
}

export interface Plugin {
  onVisitProp?(prop: Prop, sheet: Sheet): Sheet
  onStylesCreated?(): void
}
