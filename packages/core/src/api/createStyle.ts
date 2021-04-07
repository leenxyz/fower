import { CSSProperties } from 'react'
import { modifierToProps } from '@styli/utils'
import { Parser } from '@styli/parser'
import { styli } from '../styli'

export function createStyle(...args: (string | CSSProperties)[]): CSSProperties {
  return args.reduce<any>((result, cur) => {
    if (typeof cur === 'string') {
      const props = modifierToProps(cur)
      const parser = new Parser(props, styli.getTheme(), styli)
      const style = parser.toStyles()
      return { ...result, ...style }
    }
    return { ...result, ...cur }
  }, {})
}
