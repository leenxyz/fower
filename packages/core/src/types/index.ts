import { Sheet } from '../Sheet'
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

export interface PlainObject {
  [key: string]: any
}

export interface Prop {
  propKey: string
  propValue: any
}

export interface PluginReturn {
  sheet: Sheet
  matched?: boolean
}

export interface Plugin {
  onVisitProp?(prop: Prop, sheet: Sheet): PluginReturn
  onStylesCreated?(): void
}
