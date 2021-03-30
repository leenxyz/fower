import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-text-size', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('text')).toEqual(true)
    expect(isMatch!('text-10')).toEqual(true)
    expect(isMatch!('text-10rem')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = new Atom({
      propKey: 'text',
      propValue: 10,
      key: 'text',
      style: {},
    })
    const newAtom1 = new Atom({
      propKey: 'text',
      propValue: 10,
      style: { fontSize: 10 },
      key: 'text',
    })
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom3 = new Atom({
      propKey: 'text-10rem',
      propValue: true,
      key: 'text-10rem',
      style: {},
    })
    const newAtom3 = new Atom({
      key: 'text-10rem',
      propKey: 'text-10rem',
      propValue: true,
      style: { fontSize: '10rem' },
    })
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)
  })
})
