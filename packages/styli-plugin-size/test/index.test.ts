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
    const atom1 = new Atom({ propKey: 'w', propValue: 10, key: 'w', type: 'style', style: {} })
    const newAtom1 = new Atom({
      propKey: 'w',
      propValue: 10,
      style: { width: '10px' },
      key: 'w',
      type: 'style',
    })
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'square-20',
      propValue: true,
      key: 'square-20',
      type: 'style',
      style: {},
    })
    const newAtom2 = new Atom({
      propKey: 'square-20',
      propValue: true,
      style: { width: '20px', height: '20px' },
      key: 'square-20',
      type: 'style',
    })
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = new Atom({
      propKey: 'circle-10rem',
      propValue: true,
      key: 'circle-10rem',
      type: 'style',
      style: {},
    })
    const newAtom3 = new Atom({
      key: 'circle-10rem',
      type: 'style',
      propKey: 'circle-10rem',
      propValue: true,
      style: { width: '10rem', height: '10rem', borderRadius: '10rem' },
    })
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)

    const atom4 = new Atom({
      propKey: 'maxH-10',
      propValue: true,
      key: 'maxH-10',
      type: 'style',
      style: {},
    })
    const newAtom4 = new Atom({
      key: 'maxH-10',
      type: 'style',
      propKey: 'maxH-10',
      propValue: true,
      style: { maxHeight: '10px' },
    })
    expect(onAtomStyleCreate!(atom4, parser)).toMatchObject(newAtom4)

    const atom5 = new Atom({
      propKey: 'square-10px',
      propValue: true,
      key: 'square-10px',
      type: 'style',
      style: {},
    })
    const newAtom5 = new Atom({
      key: 'square-10px',
      type: 'style',
      propKey: 'square-10px',
      propValue: true,
      style: { width: '10px', height: '10px' },
    })
    expect(onAtomStyleCreate!(atom5, parser)).toMatchObject(newAtom5)
  })
})
