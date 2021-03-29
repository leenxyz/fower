import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-opacity', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('opacity')).toEqual(true)
    expect(isMatch!('opacity-20')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = new Atom({
      propKey: 'opacity',
      propValue: true,
      key: 'opacity',
      style: {},
    })
    const newAtom1 = new Atom({
      propKey: 'opacity',
      propValue: true,
      style: { opacity: 0.5 },
      key: 'opacity',
    })
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'opacity',
      propValue: 80,
      key: 'opacity',
      style: {},
    })
    const newAtom2 = new Atom({
      propKey: 'opacity',
      propValue: 80,
      style: { opacity: 0.8 },
      key: 'opacity',
    })
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = new Atom({
      propKey: 'opacity-20',
      propValue: true,
      key: 'opacity',
      style: {},
    })
    const newAtom3 = new Atom({
      propKey: 'opacity-20',
      propValue: true,
      style: { opacity: 0.2 },
      key: 'opacity',
    })
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)
  })
})
