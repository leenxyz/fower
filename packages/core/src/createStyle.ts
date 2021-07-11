import { Parser } from './parser'
import { FowerCSSProperties, PostfixAtomicProps } from './typings'
import { AtomicProps } from '@fower/atomic-props'
import { CSSProperties } from 'react'

export function createStyle(
  ...args: (
    | keyof Omit<AtomicProps, keyof PostfixAtomicProps>
    | ({} & string)
    | FowerCSSProperties
  )[]
): CSSProperties {
  const props = args.reduce<any>((result, cur) => {
    if (typeof cur === 'string') return { ...result, [cur]: true }

    // not string, is object
    return { ...result, css: cur }
  }, {})

  const parser = new Parser(props)
  const style = parser.toStyle()
  return style
}
