import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-display', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('hidden')).toEqual(true)
    expect(isMatch!('inline')).toEqual(true)
    expect(isMatch!('inlineBlock')).toEqual(true)
    expect(isMatch!('block')).toEqual(true)
    expect(isMatch!('grid')).toEqual(true)
    expect(isMatch!('table')).toEqual(true)
    expect(isMatch!('display')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = new Atom({ propKey: 'hidden', propValue: true })
    const newAtom1 = new Atom({ propKey: 'hidden', propValue: true, style: { display: 'none' } })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({ propKey: 'inline', propValue: true })
    const newAtom2 = new Atom({ propKey: 'inline', propValue: true, style: { display: 'inline' } })
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = new Atom({ propKey: 'inlineBlock', propValue: true })
    const newAtom3 = { propKey: 'inlineBlock', propValue: true, style: { display: 'inline-block' } }
    expect(handleAtom!(atom3, parser)).toMatchObject(newAtom3)

    const atom4 = new Atom({ propKey: 'block', propValue: true })
    const newAtom4 = new Atom({ propKey: 'block', propValue: true, style: { display: 'block' } })
    expect(handleAtom!(atom4, parser)).toMatchObject(newAtom4)

    const atom5 = new Atom({ propKey: 'grid', propValue: true })
    const newAtom5 = new Atom({ propKey: 'grid', propValue: true, style: { display: 'grid' } })
    expect(handleAtom!(atom5, parser)).toMatchObject(newAtom5)

    const atom6 = new Atom({ propKey: 'table', propValue: true })
    const newAtom6 = new Atom({ propKey: 'table', propValue: true, style: { display: 'table' } })
    expect(handleAtom!(atom6, parser)).toMatchObject(newAtom6)

    const atom7 = new Atom({ propKey: 'display', propValue: 'block' })
    const newAtom7 = new Atom({
      propKey: 'display',
      propValue: 'block',
      style: { display: 'block' },
    })
    expect(handleAtom!(atom7, parser)).toMatchObject(newAtom7)
  })
})
