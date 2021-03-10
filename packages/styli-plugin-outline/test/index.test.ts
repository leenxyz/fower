import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-outline', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('outline')).toEqual(true)
    expect(isMatch!('outlineNone')).toEqual(true)
    expect(isMatch!('outlinenone')).toEqual(true)
    expect(isMatch!('outlineOffset')).toEqual(true)
    expect(isMatch!('outlineoffset')).toEqual(true)
    expect(isMatch!('outlineoffset-10')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = {
      propKey: 'outline',
      propValue: true,
      key: 'outline',
      type: 'style',
      style: {},
    }
    const newAtom1: Atom = {
      propKey: 'outline',
      propValue: true,
      style: { outline: 'none' },
      key: 'outline',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2: Atom = {
      propKey: 'outlineNone',
      propValue: true,
      key: 'outlineNone',
      type: 'style',
      style: {},
    }
    const newAtom2: Atom = {
      propKey: 'outlineNone',
      propValue: true,
      style: { outline: 'none' },
      key: 'outlineNone',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3: Atom = {
      propKey: 'outlineOffset',
      propValue: true,
      key: 'outlineOffset',
      type: 'style',
      style: {},
    }
    const newAtom3: Atom = {
      propKey: 'outlineOffset',
      propValue: true,
      style: { outlineOffset: '1px' },
      key: 'outlineOffset',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4: Atom = {
      propKey: 'outlineOffset',
      propValue: '10px',
      key: 'outlineOffset',
      type: 'style',
      style: {},
    }
    const newAtom4: Atom = {
      key: 'outlineOffset',
      type: 'style',
      propKey: 'outlineOffset',
      propValue: '10px',
      style: { outlineOffset: '10px' },
    }
    expect(onAtomStyleCreate!(atom4, sheet)).toMatchObject(newAtom4)
  })
})
