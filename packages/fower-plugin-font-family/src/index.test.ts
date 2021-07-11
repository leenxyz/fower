import { setConfig, store, Parser, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
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
