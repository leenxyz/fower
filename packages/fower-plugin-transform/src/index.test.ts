import { Parser, Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom, afterAtomStyleCreate } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('scale')).toEqual(true)
  expect(isMatch!('rotate')).toEqual(true)
  expect(isMatch!('skew')).toEqual(true)
  expect(isMatch!('origin')).toEqual(true)
  expect(isMatch!('translateX')).toEqual(true)
  expect(isMatch!('translateY')).toEqual(true)
})

test('scale', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'scale',
      propValue: '120',
    }),
    parser,
  )
  expect(atom.style).toBeFalsy()
})

describe('afterAtomStyleCreate', () => {
  test('atom.length = 0', () => {
    parser.atoms = []
    afterAtomStyleCreate?.(parser)
  })

  test('atom.length > 0', () => {
    parser.atoms = [
      new Atom({
        propKey: 'scale-120',
        propValue: true,
      }),
    ]
    afterAtomStyleCreate?.(parser)

    expect(parser.atoms.length).toEqual(2)
  })

  test('atom with pseudo', () => {
    parser.atoms = [
      new Atom({
        propKey: 'scale-120--hover',
        propValue: true,
      }),
    ]
    afterAtomStyleCreate?.(parser)
    expect(parser.atoms.length).toEqual(2)
  })
})
