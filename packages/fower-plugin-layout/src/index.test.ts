import { Parser, Atom } from '@fower/core'
import plugin from '.'
import { layoutKeys } from './toLayoutStyle'

const { isMatch, handleAtom, beforeHandleAtom, afterAtomStyleCreate } = plugin()

const parser = new Parser({ row: true })

test('isMatch', () => {
  for (const key of layoutKeys) {
    expect(isMatch!(key)).toEqual(true)
  }
  expect(isMatch!('flexDirection')).toEqual(true)
  expect(isMatch!('row')).toEqual(true)
  expect(isMatch!('rowReverse')).toEqual(true)
  expect(isMatch!('column')).toEqual(true)
  expect(isMatch!('columnReverse')).toEqual(true)
  expect(isMatch!('column-reverse')).toEqual(false)
})

describe('beforeHandleAtom()', () => {
  test('handle row', () => {
    const atom = beforeHandleAtom!(
      new Atom({
        propKey: 'row',
        propValue: true,
      }),
      parser,
    )
    expect(atom.id).toEqual('flexDirection-row')
    expect(atom.style.flexDirection).toEqual('row')
  })

  test('handle flexDirection="row"', () => {
    const atom = beforeHandleAtom!(
      new Atom({
        propKey: 'flexDirection',
        propValue: 'row',
      }),
      parser,
    )
    expect(atom.id).toEqual('flexDirection-row')
    expect(atom.style.flexDirection).toEqual('row')
  })
})

test('handleAtom()', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'row',
      propValue: true,
    }),
    parser,
  )
  expect(atom.key).toEqual('row')
})

describe('afterAtomStyleCreate', () => {
  test('no atoms', () => {
    parser.atoms = []
    afterAtomStyleCreate?.(parser)
    expect(parser.atoms.length).toEqual(0)
  })

  test('no matched atoms', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'foo',
        propValue: true,
      }),
      parser,
    )
    parser.atoms = [atom]
    afterAtomStyleCreate?.(parser)
    expect(parser.atoms.length).toEqual(1)
  })

  test('matched atoms', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toCenter',
        propValue: true,
      }),
      parser,
    )
    parser.atoms = [atom]
    afterAtomStyleCreate?.(parser)
    expect(parser.atoms.length).toEqual(4)
  })

  test('with layout atoms', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toCenter',
        propValue: true,
      }),
      parser,
    )
    parser.atoms = [atom]
    afterAtomStyleCreate?.(parser)
    expect(parser.atoms.length).toEqual(4)
  })

  test('with direction atoms', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'row',
        propValue: true,
      }),
      parser,
    )
    parser.atoms = [atom]
    afterAtomStyleCreate?.(parser)
    expect(parser.atoms.length).toEqual(2)
  })
})
