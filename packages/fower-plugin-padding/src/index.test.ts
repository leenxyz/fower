import { Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as any

test('isMatch', () => {
  expect(isMatch!('p')).toEqual(true)
  expect(isMatch!('pl')).toEqual(true)
  expect(isMatch!('py')).toEqual(true)
})

test('p={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'p',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.padding).toEqual(8)
})

test('pl={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'pl',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.paddingLeft).toEqual(8)
})

test('px={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'px',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.paddingLeft).toEqual(8)
  expect(atom.style.paddingRight).toEqual(8)
})
