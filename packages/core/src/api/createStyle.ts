import { CSSProperties } from 'react'
import { parseModifiers } from './parseModifiers'

export function createStyle(...args: (string | CSSProperties)[]): CSSProperties {
  return args.reduce((t, c) => {
    if (typeof c === 'string') {
      const props = c
        .split(/[\s|\t|\n]+/)
        .reduce((result, cur) => ({ ...result, [cur]: true }), {} as any)
      const { style } = parseModifiers(props)
      return { ...t, ...style }
    }
    return { ...t, ...c }
  }, {} as any)
}
