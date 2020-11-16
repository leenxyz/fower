import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-position', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('T')).toEqual(true)
    expect(isMatch!('B-10')).toEqual(true)
    expect(isMatch!('L-10rem')).toEqual(true)
    expect(isMatch!('fixed')).toEqual(true)
    expect(isMatch!('absolute')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'T', propValue: 10 } as Atom
    const newAtom1 = { propKey: 'T', propValue: 10, style: { top: '10px' } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'B-20', propValue: true } as Atom
    const newAtom2 = { propKey: 'B-20', propValue: true, style: { bottom: '20px' } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'L-10rem', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'L-10rem',
      propValue: true,
      style: { left: '10rem' },
    }
    expect(onVisitProp!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4 = { propKey: 'absolute', propValue: true } as Atom
    const newAtom4 = {
      propKey: 'absolute',
      propValue: true,
      style: { position: 'absolute' },
    }
    expect(onVisitProp!(atom4, sheet)).toMatchObject(newAtom4)
  })
})
