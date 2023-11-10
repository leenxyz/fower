import { setConfig, fowerStore, Parser, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
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
  expect(atom.style.borderRadius).toEqual(fowerStore.theme.radii['md'])
})

test('roundedMedium', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'roundedMD',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderRadius).toEqual(fowerStore.theme.radii['md'])
})

test('roundedFull', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'roundedFull',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.borderRadius).toEqual(fowerStore.theme.radii.full)
})

test('roundedTopMedium', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'roundedTopMD',
      propValue: true,
    }),
    parser,
  )

  expect(atom.style.borderTopLeftRadius).toEqual(fowerStore.theme.radii['md'])
  expect(atom.style.borderTopRightRadius).toEqual(fowerStore.theme.radii['md'])
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
