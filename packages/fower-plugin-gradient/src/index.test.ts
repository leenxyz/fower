import { setConfig, Parser, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import plugin from './index'

const { isMatch, handleAtom } = plugin()

setConfig(presetWeb)
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('gradientX')).toEqual(true)
  expect(isMatch!('gradientY')).toEqual(true)
})

test('gradientX', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'gradientX',
      propValue: ['red400', 'yellow400'],
    }),
    parser,
  )
  expect(atom.style.backgroundImage).toEqual('linear-gradient(to right, #ff8787,#ffd43b)')
})

test('gradientX', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'gradientY',
      propValue: ['red400', 'yellow400'],
    }),
    parser,
  )
  expect(atom.style.backgroundImage).toEqual('linear-gradient(to bottom, #ff8787,#ffd43b)')
})

test('invalid propValue', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'gradientY',
      propValue: 'wrong value',
    }),
    parser,
  )
  expect(atom.style).toBeFalsy()
})
