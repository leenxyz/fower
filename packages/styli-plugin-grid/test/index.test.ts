import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-grid', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('rowGap')).toEqual(true)
    expect(isMatch!('columnGap')).toEqual(true)
    expect(isMatch!('columnGap-10px')).toEqual(true)
    expect(isMatch!('gridTemplateColumns')).toEqual(true)
    expect(isMatch!('gridTemplateColumns-10px')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = { propKey: 'gridTemplateColumns', propValue: 1 } as Atom
    const newAtom1 = {
      propKey: 'gridTemplateColumns',
      propValue: 1,
      style: {
        gridTemplateColumns: 'repeat(1, minmax(0px, 1fr))',
      },
    }
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'rowGap', propValue: 1 } as Atom
    const newAtom2 = { propKey: 'rowGap', propValue: 1, style: { rowGap: 1 } }
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'rowGap-1', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'rowGap-1',
      propValue: true,
      style: { rowGap: '1' },
    }
    expect(handleAtom!(atom3, parser)).toMatchObject(newAtom3)
  })
})
