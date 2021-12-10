import { CSSArgs } from './typings'
import { Parser } from './parser'
import { argsToProps } from '@fower/utils'
import { store } from './store'

/**
 * convert atomic props to classNames
 * @param args
 * @returns  classNames
 */
export function css(...args: CSSArgs): string {
  if (!args.length) return ''
  const parser = new Parser(argsToProps(args, store.config?.objectPropKeys?.[0]))
  parser.insertRules()
  return parser.getClassNames().join(' ')
}
