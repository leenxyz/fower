import { Parser, Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('gap')).toEqual(true)
  expect(isMatch!('rowGap')).toEqual(true)
  expect(isMatch!('columnGap')).toEqual(true)
  expect(isMatch!('gridTemplateColumns')).toEqual(true)
})

test('rowGap={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'rowGap',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.rowGap).toEqual(8)
})

test('columnGap={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'columnGap',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.columnGap).toEqual(8)
})

test('gridTemplateColumns={4}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'gridTemplateColumns',
      propValue: 4,
    }),
    parser,
  )
  expect(atom.style.gridTemplateColumns).toEqual('repeat(4, minmax(0px, 1fr))')
})
