import { setConfig } from '@fower/core'
import { Parser, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import plugin, { flexMaps } from '.'

setConfig(presetWeb)

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  const keys = ['order', 'flex', 'flexGrow', 'flexShrink', 'flexBasis', 'flexWrap']
  for (const key of keys) {
    expect(isMatch!(key)).toEqual(true)
  }

  expect(isMatch!('flexNone')).toEqual(true)
  expect(isMatch!('flexInitial')).toEqual(true)
  expect(isMatch!('flexAuto')).toEqual(true)
  expect(isMatch!('flexWrap')).toEqual(true)
  expect(isMatch!('flexWrapReverse')).toEqual(true)
  expect(isMatch!('flexNowrap')).toEqual(true)
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

test('flexWrap', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'flexWrap',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.flexWrap).toEqual('wrap')
})
