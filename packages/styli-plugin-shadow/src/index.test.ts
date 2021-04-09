import { configure } from '@styli/core'
import { store } from '@styli/store'
import { Parser } from '@styli/parser'
import { presetWeb } from '@styli/preset-web'
import { Atom } from '@styli/atom'
import plugin from '.'

configure(presetWeb)

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
