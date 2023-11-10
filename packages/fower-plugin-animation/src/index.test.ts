import { setConfig, fowerStore, Parser, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import plugin from '.'

setConfig(presetWeb)

const { isMatch, handleAtom, init } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('animateNone')).toEqual(true)
  expect(isMatch!('animateSpin')).toEqual(true)
  expect(isMatch!('animatePing')).toEqual(true)
  expect(isMatch!('animatePulse')).toEqual(true)
  expect(isMatch!('animateBounce')).toEqual(true)
  expect(isMatch!('animateFOO')).toEqual(false)
})

test('init', () => {
  init!({})
  init!({})
  expect(fowerStore.compositions.get('foo')).toBeFalsy() // TODO:
})

test('animateNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'animateNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.animation).toEqual('none')
})

test('animateSpin', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'animateSpin',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.animation).toEqual('spin 1s linear infinite')
})

test('animatePing', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'animatePing',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.animation).toEqual('ping 1s cubic-bezier(0, 0, 0.2, 1) infinite')
})

test('animatePulse', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'animatePulse',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.animation).toEqual('pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite')
})

test('animateBounce', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'animateBounce',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.animation).toEqual('bounce 1s infinite')
})
