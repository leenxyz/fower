import { setConfig, Parser, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import plugin from './index'

const { isMatch, handleAtom } = plugin()

setConfig(presetWeb)
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('bgGradientX')).toEqual(true)
  expect(isMatch!('bgGradientY')).toEqual(true)
  expect(isMatch!('gradientX')).toEqual(false)
  expect(isMatch!('gradientY')).toEqual(false)
})

test('bgGradientX', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'bgGradientX',
      propValue: ['red400', 'yellow400'],
    }),
    parser,
  )
  expect(atom.style.backgroundImage).toEqual('linear-gradient(to right, #ff8787,#ffd43b)')
})

test('bgGradientX', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'bgGradientY',
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
  expect(atom.style).toMatchObject({})
})
