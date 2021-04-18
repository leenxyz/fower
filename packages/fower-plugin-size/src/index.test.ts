import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as any

test('isMatch', () => {
  expect(isMatch!('w')).toEqual(true)
  expect(isMatch!('square')).toEqual(true)
  expect(isMatch!('circle')).toEqual(true)
  expect(isMatch!('maxH')).toEqual(true)
  expect(isMatch!('square')).toEqual(true)
})

test('w={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'w',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.width).toEqual(8)
})

test('h={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'h',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.height).toEqual(8)
})

test('square={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'square',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.width).toEqual(8)
  expect(atom.style.height).toEqual(8)
})

test('circle={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'circle',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.width).toEqual(8)
  expect(atom.style.height).toEqual(8)
  expect(atom.style.borderRadius).toEqual(8)
})
