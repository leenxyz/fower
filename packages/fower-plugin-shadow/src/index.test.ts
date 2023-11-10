import { setConfig, fowerStore, Parser, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import plugin from '.'

setConfig(presetWeb)

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('shadow')).toEqual(true)
})

test('shadow', () => {
  const value = '0 0 0 1px rgba(0, 0, 0, 0.05)'
  const atom = handleAtom!(
    new Atom({
      propKey: 'shadow',
      propValue: value,
    }),
    parser,
  )
  expect(atom.style.boxShadow).toEqual(value)
})

test('shadow', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'shadow',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxShadow).toEqual(fowerStore.theme.shadows.md)
})

test('shadowMD', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'shadowMD',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxShadow).toEqual(fowerStore.theme.shadows.md)
})

test('shadowNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'shadowNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxShadow).toEqual(fowerStore.theme.shadows.none)
})
