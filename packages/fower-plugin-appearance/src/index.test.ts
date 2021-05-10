import { Parser } from '@fower/parser'
import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('appearancNone')).toEqual(true)
})

test('appearancNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'appearancNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.appearance).toEqual('none')
})
