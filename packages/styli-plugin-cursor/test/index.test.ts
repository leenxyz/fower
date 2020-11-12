import { Atom, Sheet } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-cursor', () => {
  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as Sheet

  it('isMatch', () => {
    expect(isMatch!('cursor')).toEqual(true)
    expect(isMatch!('cursorNone')).toEqual(true)
    expect(isMatch!('cursornone')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'cursor', propValue: true } as Atom
    const newAtom1 = { propKey: 'cursor', propValue: true, style: { cursor: 'pointer' } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'cursorNone', propValue: true } as Atom
    const newAtom2 = { propKey: 'cursorNone', propValue: true, style: { cursor: 'none' } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'cursornone', propValue: true } as Atom
    const newAtom3 = { propKey: 'cursornone', propValue: true, style: { cursor: 'none' } }
    expect(onVisitProp!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
