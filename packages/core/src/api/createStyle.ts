import { CSSProperties } from 'react'
import { StyliUnit } from '../types'
import { parseModifiers } from './parseModifiers'

export function createStyle(...args: (string | CSSProperties)[]): CSSProperties {
  return args.reduce((t, c) => {
    if (typeof c === 'string') {
      const props = c
        .split(/[\s|\t|\n]+/)
        .reduce((result, cur) => ({ ...result, [cur]: true }), {} as any)
      const sheet = parseModifiers(props)
      return { ...t, ...sheet.toStyles() }
    }
    return { ...t, ...c }
  }, {} as any)
}
