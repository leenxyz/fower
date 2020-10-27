export * from './Modifiers'
export * from './Plugin'

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

export interface StyliUnit {
  attr: string
  value: string | number
  prop?: string
  propValue?: number | string | boolean | number[] | string[]
  media?: string
}
