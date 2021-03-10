import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-text-size', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('f')).toEqual(true)
    expect(isMatch!('f-10')).toEqual(true)
    expect(isMatch!('f-10rem')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = { propKey: 'f', propValue: 10, key: 'f', type: 'style', style: {} }
    const newAtom1: Atom = {
      propKey: 'f',
      propValue: 10,
      style: { fontSize: '10px' },
      key: 'f',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2: Atom = { propKey: 'f-20', propValue: true, key: 'f-20', type: 'style', style: {} }
    const newAtom2: Atom = {
      propKey: 'f-20',
      propValue: true,
      style: { fontSize: '20px' },
      key: 'f-20',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3: Atom = {
      propKey: 'f-10rem',
      propValue: true,
      key: 'f-10rem',
      type: 'style',
      style: {},
    }
    const newAtom3: Atom = {
      key: 'f-10rem',
      propKey: 'f-10rem',
      propValue: true,
      style: { fontSize: '10rem' },
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
