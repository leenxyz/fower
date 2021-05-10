import { Parser } from '@fower/parser'
import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('selectNone')).toEqual(true)
  expect(isMatch!('selectAll')).toEqual(true)
  expect(isMatch!('selectText')).toEqual(true)
  expect(isMatch!('selectAuto')).toEqual(true)
})

test('selectNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'selectNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.userSelect).toEqual('none')
})
