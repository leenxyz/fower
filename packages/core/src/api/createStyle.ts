import { CSSProperties } from '@styli/types'
import { modifierToProps } from '@styli/utils'
import { Parser } from '../Parser'
import { styli } from '../styli'

export function createStyle(...args: (string | CSSProperties)[]): CSSProperties {
  return args.reduce((result, cur) => {
    if (typeof cur === 'string') {
      const props = modifierToProps(cur)
      const parser = new Parser(props, styli.getTheme())
      const style = parser.toStyles()
      return { ...result, ...style }
    }
    return { ...result, ...cur }
  }, {} as any)
}
