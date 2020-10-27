import { CSSProperties } from 'react'
import { StyliUnit } from '../types'
import { parseModifiers } from './parseModifiers'

export function createStyle(...args: (string | CSSProperties)[]): CSSProperties {
  return args.reduce((t, c) => {
    if (typeof c === 'string') {
      const styli = c.split(/[\s|\t|\n]+/)
      const props = styli.reduce((result, cur) => ({ ...result, [cur]: true }), {} as any)
      const { styliUnits } = parseModifiers(props)

      const style = styliUnits.reduce((style: any, cur: StyliUnit) => {
        style[cur.attr] = cur.value
        return style
      }, {})

      return { ...t, ...style }
    }
    return { ...t, ...c }
  }, {} as any)
}
