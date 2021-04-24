import { AtomicProps, PostfixAtomicProps, FowerCSSProperties } from '@fower/types'
import { Parser } from '@fower/parser'

export function css(
  ...args: (
    | keyof Omit<AtomicProps, keyof PostfixAtomicProps>
    | ({} & string)
    | FowerCSSProperties
  )[]
): string {
  if (!args.length) return ''

  const props = args.reduce<any>((result, cur) => {
    if (typeof cur === 'string') {
      if (cur !== 'className') return { ...result, [cur]: true }
    } else {
      // not string, is object
      return { ...result, css: cur }
    }
  }, {})

  const parser = new Parser(props)
  parser.insertRule()

  return parser.getClassNames().join(' ')
}
