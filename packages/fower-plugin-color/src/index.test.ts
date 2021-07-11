import { setConfig, Parser, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import plugin from '.'

setConfig(presetWeb)

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('blue200')).toEqual(true)
  expect(isMatch!('color')).toEqual(true)
})

test('color="#fc0"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'color',
      propValue: '#fc0',
    }),
    parser,
  )
  expect(atom.style.color).toEqual('#fc0')
})

test('red400', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'red400',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.color).toEqual('red400')
})
