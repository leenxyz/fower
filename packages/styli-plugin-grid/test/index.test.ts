import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-grid', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('rowGap')).toEqual(true)
    expect(isMatch!('columnGap')).toEqual(true)
    expect(isMatch!('columnGap-10px')).toEqual(true)
    expect(isMatch!('gridTemplateColumns')).toEqual(true)
    expect(isMatch!('gridTemplateColumns-10px')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'gridTemplateColumns', propValue: 1 } as Atom
    const newAtom1 = {
      propKey: 'gridTemplateColumns',
      propValue: 1,
      style: {
        gridTemplateColumns: 'repeat(1, minmax(0px, 1fr))'
      },
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'rowGap', propValue: 1 } as Atom
    const newAtom2 = { propKey: 'rowGap', propValue: 1, style: { rowGap: '1px' } }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'rowGap-1', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'rowGap-1',
      propValue: true,
      style: { rowGap: '1px' },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
