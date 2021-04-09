import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('visibility')).toEqual(true)
})

test('visibility="hidden"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'visibility',
      propValue: 'hidden',
    }),
    parser,
  )
  expect(atom.style.visibility).toEqual('hidden')
})
