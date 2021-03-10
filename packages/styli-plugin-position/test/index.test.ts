import { styli } from '@styli/core'
import { Atom } from '@styli/types'
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
    const atom1: Atom = { propKey: 'T', propValue: 10, type: 'style', key: 'T', style: {} }
    const newAtom1: Atom = {
      propKey: 'T',
      propValue: 10,
      style: { top: 10 },
      type: 'style',
      key: 'T',
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2: Atom = { propKey: 'B-20', propValue: true, type: 'style', key: 'T', style: {} }
    const newAtom2: Atom = {
      propKey: 'B-20',
      propValue: true,
      style: { bottom: 20 },
      type: 'style',
      key: 'T',
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3: Atom = {
      propKey: 'L-10rem',
      propValue: true,
      type: 'style',
      key: 'L-10rem',
      style: {},
    }
    const newAtom3: Atom = {
      type: 'style',
      key: 'L-10rem',
      propKey: 'L-10rem',
      propValue: true,
      style: { left: '10rem' },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4: Atom = {
      propKey: 'absolute',
      propValue: true,
      key: 'absolute',
      type: 'style',
      style: {},
    }
    const newAtom4: Atom = {
      key: 'absolute',
      type: 'style',
      propKey: 'absolute',
      propValue: true,
      style: { position: 'absolute' },
    }
    expect(onAtomStyleCreate!(atom4, sheet)).toMatchObject(newAtom4)
  })
})
