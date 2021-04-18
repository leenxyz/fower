import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as any
test('isMatch', () => {
  expect(isMatch!('m')).toEqual(true)
  expect(isMatch!('ml')).toEqual(true)
  expect(isMatch!('my')).toEqual(true)
})

test('m={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'm',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.margin).toEqual(8)
})

test('ml={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'ml',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.marginLeft).toEqual(8)
})

test('mx={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'mx',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.marginLeft).toEqual(8)
  expect(atom.style.marginRight).toEqual(8)
})
