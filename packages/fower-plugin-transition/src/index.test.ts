import { Parser } from '@fower/parser'
import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('transition')).toEqual(true)
  expect(isMatch!('transitionNone')).toEqual(true)
  expect(isMatch!('transitionAll')).toEqual(true)
  expect(isMatch!('transitionCommon')).toEqual(true)
  expect(isMatch!('transitionColors')).toEqual(true)
  expect(isMatch!('transitionOpacity')).toEqual(true)
  expect(isMatch!('transitionShadow')).toEqual(true)
  expect(isMatch!('transitionTransform')).toEqual(true)
  expect(isMatch!('delay')).toEqual(true)
  expect(isMatch!('duration')).toEqual(true)
  expect(isMatch!('easeLinear')).toEqual(true)
  expect(isMatch!('easeIn')).toEqual(true)
  expect(isMatch!('easeOut')).toEqual(true)
  expect(isMatch!('easeInOut')).toEqual(true)
})

test('delay', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'delay',
      propValue: 100,
    }),
    parser,
  )
  expect(atom.style.transitionDelay).toEqual('100ms')
})

test('duration', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'duration',
      propValue: 100,
    }),
    parser,
  )
  expect(atom.style.transitionDuration).toEqual('100ms')
})

test('transition', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'transition',
      propValue: 'color',
    }),
    parser,
  )
  expect(atom.style.transition).toEqual('color')
})

test('transitionAll', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'transitionAll',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.transitionProperty).toEqual('all')
})

test('transitionNone', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'transitionNone',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.transitionProperty).toEqual('none')
})

test('transitionColors', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'transitionColors',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.transitionProperty).toEqual(
    'background-color, border-color, color, fill, stroke',
  )
})

test('easeLinear', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'easeLinear',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.transitionTimingFunction).toEqual('linear')
})
