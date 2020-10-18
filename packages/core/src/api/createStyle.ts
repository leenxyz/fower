import { CSSProperties } from 'react'
import { parseModifiers } from './parseModifiers'

export function createStyle(...args: (string | CSSProperties)[]): CSSProperties {
  return args.reduce((t, c) => {
    if (typeof c === 'string') {
      const props = c
        .split(/[\s|\t|\n]+/)
        .reduce((result, cur) => ({ ...result, [cur]: true }), {} as any)
      const { styliStyle } = parseModifiers(props)
      return { ...t, ...styliStyle }
    }
    return { ...t, ...c }
  }, {} as any)
}
