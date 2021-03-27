import { ParserType } from '@styli/types'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-outline', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as ParserType

  it('isMatch', () => {
    expect(isMatch!('outline')).toEqual(true)
    expect(isMatch!('outlineNone')).toEqual(true)
    expect(isMatch!('outlinenone')).toEqual(true)
    expect(isMatch!('outlineOffset')).toEqual(true)
    expect(isMatch!('outlineoffset')).toEqual(true)
    expect(isMatch!('outlineoffset-10')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = new Atom({
      propKey: 'outline',
      propValue: true,
      key: 'outline',
      type: 'style',
      style: {},
    })
    const newAtom1 = new Atom({
      propKey: 'outline',
      propValue: true,
      style: { outline: 'none' },
      key: 'outline',
      type: 'style',
    })
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'outlineNone',
      propValue: true,
      key: 'outlineNone',
      type: 'style',
      style: {},
    })
    const newAtom2 = new Atom({
      propKey: 'outlineNone',
      propValue: true,
      style: { outline: 'none' },
      key: 'outlineNone',
      type: 'style',
    })
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = new Atom({
      propKey: 'outlineOffset-2px',
      propValue: true,
      key: 'outlineOffset-2px',
      type: 'style',
      style: {},
    })
    const newAtom3 = new Atom({
      propKey: 'outlineOffset-2px',
      propValue: true,
      style: { outlineOffset: '2px' },
      key: 'outlineOffset-2px',
      type: 'style',
    })
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)

    const atom4 = new Atom({
      propKey: 'outlineOffset',
      propValue: '10px',
      key: 'outlineOffset',
      type: 'style',
      style: {},
    })
    const newAtom4 = new Atom({
      key: 'outlineOffset',
      type: 'style',
      propKey: 'outlineOffset',
      propValue: '10px',
      style: { outlineOffset: '10px' },
    })
    expect(onAtomStyleCreate!(atom4, parser)).toMatchObject(newAtom4)
  })
})
