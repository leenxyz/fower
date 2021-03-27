import { CSSObject, Props } from '@styli/types'
import { modifierToProps } from '@styli/utils'
import { Parser } from '@styli/parser'
import { styli } from '../styli'

export function css(...args: (string | CSSObject)[]) {
  if (!args.length) return ''

  const props = args.reduce(
    (result: Props, cur: any) =>
      Object.assign(result, typeof cur === 'string' ? modifierToProps(cur) : { css: cur }),
    {} as Props,
  )

  const parser = new Parser(props, styli.getTheme(), styli)
  parser.insertRule()

  return parser.getClassNames()
}
