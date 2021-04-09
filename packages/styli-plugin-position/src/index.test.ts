import { Atom } from '@styli/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as any

test('isMatch', () => {
  expect(isMatch!('top')).toEqual(true)
  expect(isMatch!('bottom-10')).toEqual(true)
  expect(isMatch!('bottom--10')).toEqual(true)
  expect(isMatch!('left-10rem')).toEqual(true)
  expect(isMatch!('fixed')).toEqual(true)
  expect(isMatch!('absolute')).toEqual(true)
})

test('position="absolute"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'position',
      propValue: 'absolute',
    }),
    parser,
  )
  expect(atom.style.position).toEqual('absolute')
})

test('static', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'static',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.position).toEqual('static')
})

test('fixed', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'fixed',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.position).toEqual('fixed')
})

test('top={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'top',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.top).toEqual(8)
})

test('top={-8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'top',
      propValue: -8,
    }),
    parser,
  )
  expect(atom.style.top).toEqual(-8)
})
