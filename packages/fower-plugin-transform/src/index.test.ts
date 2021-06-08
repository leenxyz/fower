import { Parser } from '@fower/parser'
import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('scale')).toEqual(true)
})

test('scale', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'scale',
      propValue: '120',
    }),
    parser,
  )
  expect(atom.style).toBeFalsy()
})
