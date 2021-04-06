import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-outline', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('outline')).toEqual(true)
    expect(isMatch!('outlineNone')).toEqual(true)
    expect(isMatch!('outlinenone')).toEqual(true)
    expect(isMatch!('outlineOffset')).toEqual(true)
    expect(isMatch!('outlineoffset')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = new Atom({
      propKey: 'outline',
      propValue: true,
      key: 'outline',
      style: {},
    })
    const newAtom1 = new Atom({
      propKey: 'outline',
      propValue: true,
      style: { outline: 'none' },
      key: 'outline',
    })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'outlineNone',
      propValue: true,
      key: 'outlineNone',
      style: {},
    })
    const newAtom2 = new Atom({
      propKey: 'outlineNone',
      propValue: true,
      style: { outline: 'none' },
      key: 'outlineNone',
    })
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)

    const atom4 = new Atom({
      propKey: 'outlineOffset',
      propValue: '10px',
      key: 'outlineOffset',
      style: {},
    })
    const newAtom4 = new Atom({
      key: 'outlineOffset',
      propKey: 'outlineOffset',
      propValue: '10px',
      style: { outlineOffset: '10px' },
    })
    expect(handleAtom!(atom4, parser)).toMatchObject(newAtom4)
  })
})
