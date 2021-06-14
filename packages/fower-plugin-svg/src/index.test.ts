import { Parser } from '@fower/parser'
import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('stroke')).toEqual(true)
  expect(isMatch!('fillCurrent')).toEqual(true)
  expect(isMatch!('strokeCurrent')).toEqual(true)
  expect(isMatch!('fillNone')).toEqual(true)
})

test('stroke', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'stroke',
      propValue: '1',
    }),
    parser,
  )
  expect(atom.style.strokeWidth).toEqual('1')
})

test('strokeCurrent', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'strokeCurrent',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.stroke).toEqual('currentColor')
})

test('fillCurrent', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'fillCurrent',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.fill).toEqual('currentColor')
})

test('fillNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'fillNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.fill).toEqual('none')
})
