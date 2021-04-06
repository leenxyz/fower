export interface Options {
  propKey: 'css' | 'debug' | ({} & string)
  propValue?: any

  key?: string
  value?: string | number | boolean

  id?: string

  style?: any
  className?: string
  handled?: boolean
}
