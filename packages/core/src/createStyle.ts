import { CSSProperties } from 'react'
import { parseModifiers } from './modifier'

interface Style {
  [key: string]: any
}

export function createStyle(modifiers: string, objectStyle?: CSSProperties): Style {
  if (!modifiers) return {}

  const props = modifiers
    .split(/\s+/)
    .reduce((result, cur) => ({ ...result, [cur]: true }), {} as any)
  const { style } = parseModifiers(props)
  return { ...style, ...objectStyle }
}
