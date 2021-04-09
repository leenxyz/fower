import { configure } from '@styli/core'
import { Parser } from '@styli/parser'
import { presetWeb } from '@styli/preset-web'
import { Atom } from '@styli/atom'
import plugin, { flexMaps } from '.'

configure(presetWeb)

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  const keys = ['order', 'flex', 'flexGrow', 'flexShrink', 'flexBasis', 'flexWrap']
  for (const key of keys) {
    expect(isMatch!(key)).toEqual(true)
  }

  expect(isMatch!('flexNone')).toEqual(true)
  expect(isMatch!('flexDirection')).toEqual(true)
})

test('flex={true}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'flex',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.flex).toBeUndefined()
  expect(atom.style.display).toEqual('flex')
})

test('flex={1}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'flex',
      propValue: 1,
    }),
    parser,
  )
  expect(atom.style.flex).toEqual(1)
})

test('flex="10', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'flex',
      propValue: '10',
    }),
    parser,
  )
  expect(atom.style.flex).toEqual('10')
})

test('flexDirection="row"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'flexDirection',
      propValue: 'row',
    }),
    parser,
  )
  expect(atom.style.flexDirection).toEqual('row')
})

test('flexNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'flexNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.flex).toEqual(flexMaps['none'])
})
