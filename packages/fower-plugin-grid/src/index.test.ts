import { Parser, Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('gridTemplateColumns')).toEqual(true)
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
