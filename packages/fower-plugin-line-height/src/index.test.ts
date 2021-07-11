import { setConfig, Parser, store, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import plugin from '.'

setConfig(presetWeb)

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('leading')).toEqual(true)
  expect(isMatch!('leadingNone')).toEqual(true)
  expect(isMatch!('leadingTight')).toEqual(true)
})

test('leading={1.5}', () => {
  const value = 1.5
  const atom = handleAtom!(
    new Atom({
      propKey: 'leading',
      propValue: value,
    }),
    parser,
  )
  expect(atom.style.lineHeight).toEqual(value)
})

test('leadingTight', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'leadingTight',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.lineHeight).toEqual(store.theme.lineHeights.tight)
})

test('leadingNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'leadingNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.lineHeight).toEqual(store.theme.lineHeights.none)
})

test('leadingFoo should be no style', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'leadingFoo',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style).toMatchObject({})
})
