import { Parser, Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom, afterAtomStyleCreate } = plugin()
const parser = new Parser({ transitionCommon: true })

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
  const parser = new Parser({ transitionCommon: true })
  const atom = handleAtom!(
    new Atom({
      propKey: 'delay',
      propValue: 100,
    }),
    parser,
  )
  expect(atom.style.transitionDelay).toEqual('100ms !important')
})

test('delay with no transition', () => {
  const parser = new Parser()
  const atom = handleAtom!(
    new Atom({
      propKey: 'delay',
      propValue: 100,
    }),
    parser,
  )
  expect(atom.style.transitionDelay).toBeUndefined()
})

test('duration', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'duration',
      propValue: 100,
    }),
    parser,
  )
  expect(atom.style.transitionDuration).toEqual('100ms !important')
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

describe('afterAtomStyleCreate', () => {
  test('atom.length = 0', () => {
    parser.atoms = []
    afterAtomStyleCreate?.(parser)
  })

  test('no transition prop', () => {
    parser.atoms = [
      new Atom({
        propKey: 'p-10',
        propValue: true,
      }),
    ]
    afterAtomStyleCreate?.(parser)
    expect(parser.atoms.length).toEqual(1)
  })

  test('no transition prop', () => {
    parser.atoms = [
      new Atom({
        propKey: 'easeIn',
        propValue: true,
      }),
    ]
    afterAtomStyleCreate?.(parser)
    expect(parser.atoms.length).toEqual(1)
  })

  test('set default duration and timing', () => {
    parser.atoms = [
      new Atom({
        propKey: 'transitionAll',
        propValue: true,
      }),
    ]
    afterAtomStyleCreate?.(parser)
    expect(parser.atoms.length).toEqual(3)
    expect(parser.atoms[1].id).toEqual('transition-duration-200')
    expect(parser.atoms[2].id).toEqual('easeInOut')
  })
})
