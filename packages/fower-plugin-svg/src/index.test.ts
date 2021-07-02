import { setConfig } from '@fower/core'
import { Parser } from '@fower/parser'
import { presetWeb } from '@fower/preset-web'
import { Atom } from '@fower/atom'
import plugin from './index'

const { isMatch, handleAtom } = plugin()

setConfig(presetWeb)
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('stroke')).toEqual(true)
  expect(isMatch!('fillCurrent')).toEqual(true)
  expect(isMatch!('strokeCurrent')).toEqual(true)
  expect(isMatch!('fillNone')).toEqual(true)
  expect(isMatch!('fillRed200')).toEqual(true)
  expect(isMatch!('fillFoo200')).toBeFalsy()
  expect(isMatch!('fooooo')).toBeFalsy()
  expect(isMatch!(undefined as any)).toBeFalsy()
})

test('stroke widh number value', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'stroke',
      propValue: '1',
    }),
    parser,
  )
  expect(atom.style.strokeWidth).toEqual('1')
})

test('stroke width string value', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'stroke',
      propValue: 'none',
    }),
    parser,
  )
  expect(atom.style.stroke).toEqual('none')
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

test('fillRed200', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'fillRed200',
      propValue: true,
    }),
    parser,
  )
  expect(atom.id).toEqual('fillRed200')
  expect(atom.style.fill).toEqual('red200')
})
