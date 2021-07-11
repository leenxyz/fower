import { Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as any

test('isMatch', () => {
  expect(isMatch!('overflow')).toEqual(true)
  expect(isMatch!('overflowHidden')).toEqual(true)
  expect(isMatch!('overflowAuto')).toEqual(true)
  expect(isMatch!('overflowVisible')).toEqual(true)
  expect(isMatch!('overflowScroll')).toEqual(true)

  expect(isMatch!('overflowX')).toEqual(true)
  expect(isMatch!('overflowXHidden')).toEqual(true)
  expect(isMatch!('overflowXAuto')).toEqual(true)
  expect(isMatch!('overflowXVisible')).toEqual(true)
  expect(isMatch!('overflowXScroll')).toEqual(true)

  expect(isMatch!('overflowY')).toEqual(true)
  expect(isMatch!('overflowYHidden')).toEqual(true)
  expect(isMatch!('overflowYAuto')).toEqual(true)
  expect(isMatch!('overflowYVisible')).toEqual(true)
  expect(isMatch!('overflowYScroll')).toEqual(true)
})

test('overflow="hidden"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'overflow',
      propValue: 'hidden',
    }),
    parser,
  )
  expect(atom.style.overflow).toEqual('hidden')
})

test('overflowHidden', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'overflowHidden',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.overflow).toEqual('hidden')
})

test('overflowXHidden', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'overflowXHidden',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.overflowX).toEqual('hidden')
})
