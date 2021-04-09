import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = {} as Parser

test('isMatch', () => {
  expect(isMatch!('hidden')).toEqual(true)
  expect(isMatch!('inline')).toEqual(true)
  expect(isMatch!('inlineBlock')).toEqual(true)
  expect(isMatch!('block')).toEqual(true)
  expect(isMatch!('grid')).toEqual(true)
  expect(isMatch!('table')).toEqual(true)
  expect(isMatch!('display')).toEqual(true)
})

test('display', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'display',
      propValue: 'table',
    }),
    parser,
  )
  expect(atom.style.display).toEqual('table')
})

test('hidden', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'hidden',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.display).toEqual('none')
})

test('block', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'block',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.display).toEqual('block')
})
