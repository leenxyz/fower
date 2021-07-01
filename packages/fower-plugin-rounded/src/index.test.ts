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
  expect(isMatch!('roundedTop-10')).toEqual(true)
  expect(isMatch!('roundedBottomLeft-10rem')).toEqual(true)
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
  expect(atom.style.borderRadius).toEqual(store.theme.radii['medium'])
})

test('roundedMedium', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'roundedMedium',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderRadius).toEqual(store.theme.radii['medium'])
})

test('roundedTopMedium', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'roundedTopMedium',
      propValue: true,
    }),
    parser,
  )

  expect(atom.style.borderTopLeftRadius).toEqual(store.theme.radii['medium'])
  expect(atom.style.borderTopRightRadius).toEqual(store.theme.radii['medium'])
})

test('roundedTopRight={8}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'roundedTopRight',
      propValue: 8,
    }),
    parser,
  )

  expect(atom.style.borderTopRightRadius).toEqual(8)
})
