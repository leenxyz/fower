import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-size', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('w')).toEqual(true)
    expect(isMatch!('square-20')).toEqual(true)
    expect(isMatch!('circle-10rem')).toEqual(true)
    expect(isMatch!('maxH-10')).toEqual(true)
    expect(isMatch!('square-10px')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = new Atom({ propKey: 'w', propValue: 10, key: 'w', style: {} })
    const newAtom1 = new Atom({
      propKey: 'w',
      propValue: 10,
      style: { width: 10 },
      key: 'w',
    })
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'square-20',
      propValue: true,
      key: 'square-20',
      style: {},
    })
    const newAtom2 = new Atom({
      propKey: 'square-20',
      propValue: true,
      style: { width: '20', height: '20' },
      key: 'square-20',
    })
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = new Atom({
      propKey: 'circle-10rem',
      propValue: true,
      key: 'circle-10rem',
      style: {},
    })
    const newAtom3 = new Atom({
      key: 'circle-10rem',
      propKey: 'circle-10rem',
      propValue: true,
      style: { width: '10rem', height: '10rem', borderRadius: '10rem' },
    })
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)

    const atom4 = new Atom({
      propKey: 'maxH-10',
      propValue: true,
      key: 'maxH-10',
      style: {},
    })
    const newAtom4 = new Atom({
      key: 'maxH-10',
      propKey: 'maxH-10',
      propValue: true,
      style: { maxHeight: '10' },
    })
    expect(onAtomStyleCreate!(atom4, parser)).toMatchObject(newAtom4)

    const atom5 = new Atom({
      propKey: 'square-10px',
      propValue: true,
      key: 'square-10px',
      style: {},
    })
    const newAtom5 = new Atom({
      key: 'square-10px',
      propKey: 'square-10px',
      propValue: true,
      style: { width: '10px', height: '10px' },
    })
    expect(onAtomStyleCreate!(atom5, parser)).toMatchObject(newAtom5)
  })
})
