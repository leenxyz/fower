import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-position', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('T')).toEqual(true)
    expect(isMatch!('B-10')).toEqual(true)
    expect(isMatch!('L-10rem')).toEqual(true)
    expect(isMatch!('fixed')).toEqual(true)
    expect(isMatch!('absolute')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'T', propValue: 10 } as Atom
    const newAtom1 = { propKey: 'T', propValue: 10, style: { top: '10px' } }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'B-20', propValue: true } as Atom
    const newAtom2 = { propKey: 'B-20', propValue: true, style: { bottom: '20px' } }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'L-10rem', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'L-10rem',
      propValue: true,
      style: { left: '10rem' },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4 = { propKey: 'absolute', propValue: true } as Atom
    const newAtom4 = {
      propKey: 'absolute',
      propValue: true,
      style: { position: 'absolute' },
    }
    expect(onAtomStyleCreate!(atom4, sheet)).toMatchObject(newAtom4)
  })
})
