export interface Options {
  propKey: 'css' | 'debug' | ({} & string)
  propValue?: any
  key?: 'css' | 'debug' | ({} & string)
  style?: any
  className?: string
  handled?: boolean
}
