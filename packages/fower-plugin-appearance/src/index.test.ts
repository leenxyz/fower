import { Parser, Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('appearanceNone')).toEqual(true)
})

test('appearanceNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'appearanceNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.appearance).toEqual('none')
})
