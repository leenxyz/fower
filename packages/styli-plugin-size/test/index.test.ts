import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-position', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('w')).toEqual(true)
    expect(isMatch!('square-20')).toEqual(true)
    expect(isMatch!('circle-10rem')).toEqual(true)
    expect(isMatch!('maxH-10')).toEqual(true)
    expect(isMatch!('square-10px')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = { propKey: 'w', propValue: 10, key: 'w', type: 'style', style: {} }
    const newAtom1: Atom = {
      propKey: 'w',
      propValue: 10,
      style: { width: '10px' },
      key: 'w',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2: Atom = {
      propKey: 'square-20',
      propValue: true,
      key: 'square-20',
      type: 'style',
      style: {},
    }
    const newAtom2: Atom = {
      propKey: 'square-20',
      propValue: true,
      style: { width: '20px', height: '20px' },
      key: 'square-20',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3: Atom = {
      propKey: 'circle-10rem',
      propValue: true,
      key: 'circle-10rem',
      type: 'style',
      style: {},
    }
    const newAtom3: Atom = {
      key: 'circle-10rem',
      type: 'style',
      propKey: 'circle-10rem',
      propValue: true,
      style: { width: '10rem', height: '10rem', borderRadius: '10rem' },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4: Atom = {
      propKey: 'maxH-10',
      propValue: true,
      key: 'maxH-10',
      type: 'style',
      style: {},
    }
    const newAtom4: Atom = {
      key: 'maxH-10',
      type: 'style',
      propKey: 'maxH-10',
      propValue: true,
      style: { maxHeight: '10px' },
    }
    expect(onAtomStyleCreate!(atom4, sheet)).toMatchObject(newAtom4)

    const atom5: Atom = {
      propKey: 'square-10px',
      propValue: true,
      key: 'square-10px',
      type: 'style',
      style: {},
    }
    const newAtom5: Atom = {
      key: 'square-10px',
      type: 'style',
      propKey: 'square-10px',
      propValue: true,
      style: { width: '10px', height: '10px' },
    }
    expect(onAtomStyleCreate!(atom5, sheet)).toMatchObject(newAtom5)
  })
})
