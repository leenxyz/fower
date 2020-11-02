import { CSSProperties } from 'react'
import { PropsParser } from './PropsParser'
import { modifierToProps } from './utils'

export function createStyle(...args: (string | CSSProperties)[]): CSSProperties {
  return args.reduce((result, cur) => {
    if (typeof cur === 'string') {
      const props = modifierToProps(cur)
      const parser = new PropsParser(props)
      const style = parser.getParsedStyle()
      return { ...result, ...style }
    }
    return { ...result, ...cur }
  }, {} as any)
}
