import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-opacity', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('opacity')).toEqual(true)
    expect(isMatch!('opacity-20')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = {
      propKey: 'opacity',
      propValue: true,
      key: 'opacity',
      type: 'style',
      style: {},
    }
    const newAtom1: Atom = {
      propKey: 'opacity',
      propValue: true,
      style: { opacity: 0.5 },
      key: 'opacity',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2: Atom = {
      propKey: 'opacity',
      propValue: 80,
      key: 'opacity',
      type: 'style',
      style: {},
    }
    const newAtom2: Atom = {
      propKey: 'opacity',
      propValue: 80,
      style: { opacity: 0.8 },
      key: 'opacity',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)

    const atom3: Atom = {
      propKey: 'opacity-20',
      propValue: true,
      key: 'opacity',
      type: 'style',
      style: {},
    }
    const newAtom3: Atom = {
      propKey: 'opacity-20',
      propValue: true,
      style: { opacity: 0.2 },
      key: 'opacity',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)
  })
})
