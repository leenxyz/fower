import { CSSObject, Props } from '@fower/types'
import { modifierToProps } from '@fower/utils'
import { Parser } from '@fower/parser'

export function css(...args: (string | CSSObject)[]) {
  if (!args.length) return ''

  const props = args.reduce(
    (result: Props, cur: any) =>
      Object.assign(result, typeof cur === 'string' ? modifierToProps(cur) : { css: cur }),
    {} as Props,
  )

  const parser = new Parser(props)
  parser.insertRule()

  return parser.getClassNames().join(' ')
}
