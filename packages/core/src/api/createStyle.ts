import { CSSProperties } from 'react'
import { modifierToProps } from '@styli/utils'
import { Parser } from '@styli/parser'

export function createStyle(...args: (string | CSSProperties)[]): CSSProperties {
  return args.reduce<any>((result, cur) => {
    if (typeof cur === 'string') {
      const props = modifierToProps(cur)
      const parser = new Parser(props)
      const style = parser.toStyle()
      return { ...result, ...style }
    }
    return { ...result, ...cur }
  }, {})
}
