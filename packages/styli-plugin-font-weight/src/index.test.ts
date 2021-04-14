import { setConfig } from '@styli/core'
import { store } from '@styli/store'
import { Parser } from '@styli/parser'
import { presetWeb } from '@styli/preset-web'
import { Atom } from '@styli/atom'
import plugin from '.'

setConfig(presetWeb)

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('fontWeight')).toEqual(true)
  expect(isMatch!('fontMedium')).toEqual(true)
})

test('fontWeight={600}', () => {
  const value = 600
  const atom = handleAtom!(
    new Atom({
      propKey: 'fontWeight',
      propValue: value,
    }),
    parser,
  )
  expect(atom.style.fontWeight).toEqual(value)
})

test('fontExtrabold', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'fontExtrabold',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.fontWeight).toEqual(store.theme.fontWeights.extrabold)
})
