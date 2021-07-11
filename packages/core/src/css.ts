import { CSSArgs } from './typings'
import { Parser } from './parser'
import { argsToProps } from '@fower/utils'

/**
 * convert atomic props to classNames
 * @param args
 * @returns  classNames
 */
export function css(...args: CSSArgs): string {
  if (!args.length) return ''
  const parser = new Parser(argsToProps(args))
  parser.insertRules()
  return parser.getClassNames().join(' ')
}
