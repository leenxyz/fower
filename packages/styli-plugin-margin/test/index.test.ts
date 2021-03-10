import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-margin', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('m')).toEqual(true)
    expect(isMatch!('ml')).toEqual(true)
    expect(isMatch!('my')).toEqual(true)
    expect(isMatch!('mx-10')).toEqual(true)
    expect(isMatch!('mx-10rem')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = { propKey: 'm', propValue: 10, key: 'm', type: 'style', style: {} }
    const newAtom1: Atom = {
      propKey: 'm',
      propValue: 10,
      style: { margin: '10px' },
      key: 'm',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2: Atom = {
      propKey: 'ml-20',
      propValue: true,
      key: 'ml-20',
      type: 'style',
      style: {},
    }
    const newAtom2: Atom = {
      propKey: 'ml-20',
      propValue: true,
      style: { marginLeft: '20px' },
      key: 'ml-20',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3: Atom = {
      propKey: 'mx-10rem',
      propValue: true,
      key: 'mx-10rem',
      type: 'style',
      style: {},
    }
    const newAtom3: Atom = {
      key: 'mx-10rem',
      propKey: 'mx-10rem',
      propValue: true,
      style: { marginLeft: '10rem', marginRight: '10rem' },
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
