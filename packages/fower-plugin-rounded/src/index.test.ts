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
  expect(isMatch!('rounded')).toEqual(true)
  expect(isMatch!('roundedT-10')).toEqual(true)
  expect(isMatch!('roundedBL-10rem')).toEqual(true)
})

test('rounded={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'rounded',
      propValue: 8,
    }),
    parser,
  )
  expect(atom.style.borderRadius).toEqual(8)
})

test('rounded', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'rounded',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderRadius).toEqual(store.theme.radii['base'])
})

test('roundedMD', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'roundedMD',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderRadius).toEqual(store.theme.radii['md'])
})

test('roundedTMD', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'roundedTMD',
      propValue: true,
    }),
    parser,
  )

  expect(atom.style.borderTopLeftRadius).toEqual(store.theme.radii['md'])
  expect(atom.style.borderTopRightRadius).toEqual(store.theme.radii['md'])
})

test('roundedTR={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'roundedTR',
      propValue: 8,
    }),
    parser,
  )

  expect(atom.style.borderTopRightRadius).toEqual(8)
})
