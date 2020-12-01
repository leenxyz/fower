import { Atom, Sheet } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-flex-box', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as Sheet

  it('isMatch', () => {
    expect(isMatch!('row')).toEqual(true)
    expect(isMatch!('column')).toEqual(true)
    expect(isMatch!('wrap')).toEqual(true)
    expect(isMatch!('nowrap')).toEqual(true)
    expect(isMatch!('justifyCenter')).toEqual(true)
    expect(isMatch!('AlignStart')).toEqual(false)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'column', propValue: true } as Atom
    const newAtom1 = {
      propKey: 'column',
      propValue: true,
      style: { display: 'flex', flexDirection: 'column' },
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'nowrap', propValue: true } as Atom
    const newAtom2 = { propKey: 'nowrap', propValue: true, style: { flexWrap: 'nowrap' } }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'justifyCenter', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'justifyCenter',
      propValue: true,
      style: { justifyContent: 'center' },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
