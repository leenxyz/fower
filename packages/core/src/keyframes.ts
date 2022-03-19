import { CSSProperties } from 'react'
import { hash, jsKeyToCssKey } from '@fower/utils'
import { styleSheet } from './sheet'

type Input = Record<string, CSSProperties>

/**
 * create keyframe style
 * @param input
 * @returns
 */
export function keyframes(input: Input, name?: string): string {
  const content = Object.entries(input).reduce<string>((result, [key, value]) => {
    const str = Object.entries(value).reduce<string>((r, [k, v]) => {
      return r + `${jsKeyToCssKey(k)}: ${v};`
    }, '')
    return result + `${jsKeyToCssKey(key)} {${str}}`
  }, '')

  const animationName = name || 'keyframes-' + hash(JSON.stringify(input))
  const rule = `
    @keyframes ${animationName} {
      ${content}
    }
  `
  styleSheet.insertStyles([rule])

  return animationName
}
