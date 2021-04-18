import { setConfig } from '@fower/core'
import { store } from '@fower/store'
import { Parser } from '@fower/parser'
import { presetWeb } from '@fower/preset-web'
import { Atom } from '@fower/atom'
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
  expect(atom.style.boxShadow).toEqual(store.theme.shadows['base'])
})

test('shadowMD', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'shadowMD',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxShadow).toEqual(store.theme.shadows['md'])
})
