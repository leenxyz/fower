import { AtomicArray, CSSObject, AtomicKey } from './typings'
import { Parser } from './parser'
import { argsToProps } from '@fower/utils'

export function isAtomicArgsValid(
  value: AtomicArray | CSSObject | AtomicKey | ({} & string),
): boolean {
  const props = argsToProps([value])
  const parser = new Parser(props)
  const parsedProps = parser.getParsedProps()

  return !Object.keys(parsedProps).length
}
