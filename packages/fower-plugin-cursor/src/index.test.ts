import { Parser } from '@fower/parser'
import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('cursor')).toEqual(true)
  expect(isMatch!('cursorNone')).toEqual(true)
  expect(isMatch!('cursornone')).toEqual(true)
})

test('cursor="pointer', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'cursor',
      propValue: 'pointer',
    }),
    parser,
  )
  expect(atom.style.cursor).toEqual('pointer')
})

test('cursorNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'cursorNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.cursor).toEqual('none')
})
