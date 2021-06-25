import { CSSArgs } from '@fower/types'
import { Parser } from '@fower/parser'
import { argsToProps } from '@fower/utils'

/**
 * convert atomic props to classNames
 * @param args
 * @returns  classNames
 */
export function css(...args: CSSArgs): string {
  if (!args.length) return ''
  const parser = new Parser(argsToProps(args))
  parser.insertRule()
  return parser.getClassNames().join(' ')
}
