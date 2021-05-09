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
  expect(isMatch!('fontSans')).toEqual(true)
  expect(isMatch!('fontSerif')).toEqual(true)
  expect(isMatch!('fontMono')).toEqual(true)

  expect(isMatch!('fontSansFoo')).toBeFalsy()
})

test('fontExtrabold', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'fontSans',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.fontFamily).toEqual(store.theme.fontFamilies.sans)
})
