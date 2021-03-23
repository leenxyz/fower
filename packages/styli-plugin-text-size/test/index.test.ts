import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-text-size', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('f')).toEqual(true)
    expect(isMatch!('text-10')).toEqual(true)
    expect(isMatch!('text-10rem')).toEqual(true)
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

    const atom2: Atom = { propKey: 'textXL', propValue: true, key: 'textXL', type: 'style', style: {} }
    const newAtom2: Atom = {
      propKey: 'textXL',
      propValue: true,
      style: { fontSize: '20px' },
      key: 'textXL',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3: Atom = {
      propKey: 'text-10rem',
      propValue: true,
      key: 'text-10rem',
      type: 'style',
      style: {},
    }
    const newAtom3: Atom = {
      key: 'text-10rem',
      propKey: 'text-10rem',
      propValue: true,
      style: { fontSize: '10rem' },
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
