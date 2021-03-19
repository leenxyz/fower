import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-display', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('hidden')).toEqual(true)
    expect(isMatch!('inline')).toEqual(true)
    expect(isMatch!('inlineBlock')).toEqual(true)
    expect(isMatch!('block')).toEqual(true)
    expect(isMatch!('grid')).toEqual(true)
    expect(isMatch!('table')).toEqual(true)
    expect(isMatch!('display')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'hidden', propValue: true } as Atom
    const newAtom1 = { propKey: 'hidden', propValue: true, style: { display: 'none' } }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'inline', propValue: true } as Atom
    const newAtom2 = { propKey: 'inline', propValue: true, style: { display: 'inline' } }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'inlineBlock', propValue: true } as Atom
    const newAtom3 = { propKey: 'inlineBlock', propValue: true, style: { display: 'inline-block' } }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4 = { propKey: 'block', propValue: true } as Atom
    const newAtom4 = { propKey: 'block', propValue: true, style: { display: 'block' } }
    expect(onAtomStyleCreate!(atom4, sheet)).toMatchObject(newAtom4)

    const atom5 = { propKey: 'grid', propValue: true } as Atom
    const newAtom5 = { propKey: 'grid', propValue: true, style: { display: 'grid' } }
    expect(onAtomStyleCreate!(atom5, sheet)).toMatchObject(newAtom5)

    const atom6 = { propKey: 'table', propValue: true } as Atom
    const newAtom6 = { propKey: 'table', propValue: true, style: { display: 'table' } }
    expect(onAtomStyleCreate!(atom6, sheet)).toMatchObject(newAtom6)

    const atom7 = { propKey: 'display', propValue: 'block' } as Atom
    const newAtom7 = { propKey: 'display', propValue: 'block', style: { display: 'block' } }
    expect(onAtomStyleCreate!(atom7, sheet)).toMatchObject(newAtom7)
  })
})
