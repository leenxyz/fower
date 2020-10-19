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
   * 将要挂载到组件 props 的属性名
   */
  name: string
  version: string
  /**
   * @param styliStyle - 表示根据指令转换出的样式
   * @param props - 表示组件上的所有原始属性
   * @returns 函数返回要挂载到组件 props 上的 prop 为 name 的值
   */
  exec: (styliStyle: StyliStyle, props: PlainObject) => any
}

/**
 * 可接受数组，已满足响应式需求
 */
export interface StyliStyle {
  [key: string]: number | string | number[] | string[]
}
