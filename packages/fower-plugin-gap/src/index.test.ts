import { Parser, Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('gap')).toEqual(true)
  expect(isMatch!('gapX')).toEqual(true)
  expect(isMatch!('gapY')).toEqual(true)
})

test('gap={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'gap',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.gap).toEqual(8)
})

test('gapX={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'gapX',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.columnGap).toEqual(8)
})

test('gapY={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'gapY',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.rowGap).toEqual(8)
})
