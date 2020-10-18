export * from './Modifiers'

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

export interface Plugin {
  /**
   * 挂载到组件 props 的属性名
   */
  name: string
  version: string
  /**
   * 挂载到组件上的属性值
   */
  exec: (style: StyliStyle, props: PlainObject) => any
}

export interface StyliStyle {
  [key: string]: number | string | number[] | string[]
}
