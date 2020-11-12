import { Atom } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-outline', () => {
  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('outline')).toEqual(true)
    expect(isMatch!('outlineNone')).toEqual(true)
    expect(isMatch!('outlinenone')).toEqual(true)
    expect(isMatch!('outlineOffset')).toEqual(true)
    expect(isMatch!('outlineoffset')).toEqual(true)
    expect(isMatch!('outlineoffset-10')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'outline', propValue: true } as Atom
    const newAtom1 = { propKey: 'outline', propValue: true, style: { outline: 'none' } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'outlineNone', propValue: true } as Atom
    const newAtom2 = { propKey: 'outlineNone', propValue: true, style: { outline: 'none' } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'outlineOffset', propValue: true } as Atom
    const newAtom3 = { propKey: 'outlineOffset', propValue: true, style: { outlineOffset: '1px' } }
    expect(onVisitProp!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4 = { propKey: 'outlineOffset', propValue: '10px' } as Atom
    const newAtom4 = { propKey: 'outlineOffset', propValue: '10px', style: { outlineOffset: '10px' } }
    expect(onVisitProp!(atom4, sheet)).toMatchObject(newAtom4)
  })
})
