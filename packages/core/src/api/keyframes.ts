import { CSSProperties } from 'react'
import { hash, jsKeyToCssKey } from '@styli/utils'
import { styleSheet } from '@styli/sheet'

type Input = Record<string, CSSProperties>

/**
 * create keyframe style
 * @param input
 * @returns
 */
export function keyframes(input: Input): string {
  const content = Object.entries(input).reduce<string>((result, [key, value]) => {
    const str = Object.entries(value).reduce<string>((r, [k, v]) => {
      return r + `${k}: ${v};`
    }, '')
    return result + `${jsKeyToCssKey(key)} {${str}}`
  }, '')

  const name = 'keyframes-' + hash(JSON.stringify(input))
  const rule = `
    @keyframes ${name} {
      ${content}
    }
  `
  styleSheet.insertStyles([rule])

  return name
}
