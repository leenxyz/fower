import { setConfig, store, Parser, Atom } from '@fower/core'
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
  expect(atom.style.boxShadow).toEqual(store.theme.shadows['medium'])
})

test('shadowMedium', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'shadowMedium',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxShadow).toEqual(store.theme.shadows['medium'])
})
