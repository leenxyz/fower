import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-cursor', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('cursor')).toEqual(true)
    expect(isMatch!('cursorNone')).toEqual(true)
    expect(isMatch!('cursornone')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'cursor', propValue: 'pointer', key: 'cursor', type: 'style' } as Atom
    const newAtom1 = { propKey: 'cursor', propValue: 'pointer', style: { cursor: 'pointer' } }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'cursorNone', propValue: true } as Atom
    const newAtom2 = { propKey: 'cursorNone', propValue: true, style: { cursor: 'none' } }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'cursornone', propValue: true } as Atom
    const newAtom3 = { propKey: 'cursornone', propValue: true, style: { cursor: 'none' } }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
