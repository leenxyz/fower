import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-cursor', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('cursor')).toEqual(true)
    expect(isMatch!('cursorNone')).toEqual(true)
    expect(isMatch!('cursornone')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = { propKey: 'cursor', propValue: 'pointer', key: 'cursor' } as Atom
    const newAtom1 = { propKey: 'cursor', propValue: 'pointer', style: { cursor: 'pointer' } }
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'cursorNone',
      propValue: true,
    })
    const newAtom2 = new Atom({
      propKey: 'cursorNone',
      propValue: true,
      style: { cursor: 'none' },
    })
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'cursornone', propValue: true } as Atom
    const newAtom3 = { propKey: 'cursornone', propValue: true, style: { cursor: 'none' } }
    expect(handleAtom!(atom3, parser)).toMatchObject(newAtom3)
  })
})
