import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-margin', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('m')).toEqual(true)
    expect(isMatch!('ml')).toEqual(true)
    expect(isMatch!('my')).toEqual(true)
    expect(isMatch!('mx-10')).toEqual(true)
    expect(isMatch!('mx-10rem')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = new Atom({
      propKey: 'm',
      propValue: 10,
      key: 'm',
      style: {},
    })
    const newAtom1 = new Atom({
      propKey: 'm',
      propValue: 10,
      style: { margin: 10 },
      key: 'm',
    })
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'ml-20',
      propValue: true,
      key: 'ml-20',
      style: {},
    })
    const newAtom2 = new Atom({
      propKey: 'ml-20',
      propValue: true,
      style: { marginLeft: '20' },
      key: 'ml-20',
    })
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = new Atom({
      propKey: 'mx-10rem',
      propValue: true,
      key: 'mx-10rem',
      style: {},
    })
    const newAtom3 = new Atom({
      key: 'mx-10rem',
      propKey: 'mx-10rem',
      propValue: true,
      style: { marginLeft: '10rem', marginRight: '10rem' },
    })
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)

    const atom4 = new Atom({
      propKey: 'mx--10rem',
      propValue: true,
      key: 'mx--10rem',
      style: {},
    })
    const newAtom4 = new Atom({
      key: 'mx--10rem',
      propKey: 'mx--10rem',
      propValue: true,
      style: { marginLeft: '-10rem', marginRight: '-10rem' },
    })
    expect(onAtomStyleCreate!(atom4, parser)).toMatchObject(newAtom4)
  })
})
