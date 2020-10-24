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

type CommonStyliValue = number | string
type MediaQueryStyliValue = number[] | string[]

export interface StyliStyle {
  [key: string]: CommonStyliValue | MediaQueryStyliValue | PlainObject | undefined
}
