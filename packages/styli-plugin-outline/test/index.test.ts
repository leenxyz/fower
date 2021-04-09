import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

const { isMatch, handleAtom } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('outline')).toEqual(true)
  expect(isMatch!('outlineNone')).toEqual(true)
  expect(isMatch!('outlinenone')).toEqual(true)
  expect(isMatch!('outlineOffset')).toEqual(true)
  expect(isMatch!('outlineoffset')).toEqual(true)
})

test('outline="None"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'outline',
      propValue: 'none',
    }),
    parser,
  )
  expect(atom.style.outline).toEqual('none')
})

test('outlineNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'outlineNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.outline).toEqual('none')
})

test('outlineOffset={2}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'outlineOffset',
      propValue: 2,
    }),
    parser,
  )
  expect(atom.style.outlineOffset).toEqual(2)
})
