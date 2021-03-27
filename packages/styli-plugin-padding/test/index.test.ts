import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-padding', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('p')).toEqual(true)
    expect(isMatch!('pl')).toEqual(true)
    expect(isMatch!('py')).toEqual(true)
    expect(isMatch!('px-10')).toEqual(true)
    expect(isMatch!('px-10rem')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = new Atom({ propKey: 'p', propValue: 10, key: 'p', type: 'style', style: {} })
    const newAtom1 = new Atom({
      propKey: 'p',
      propValue: 10,
      style: { padding: '10px' },
      key: 'p',
      type: 'style',
    })
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'pl-20',
      propValue: true,
      key: 'pl-20',
      type: 'style',
      style: {},
    })
    const newAtom2 = new Atom({
      propKey: 'pl-20',
      propValue: true,
      style: { paddingLeft: '20px' },
      key: 'pl-20',
      type: 'style',
    })
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = new Atom({
      propKey: 'px-10rem',
      propValue: true,
      key: 'px-10rem',
      type: 'style',
      style: {},
    })
    const newAtom3 = new Atom({
      key: 'px-10rem',
      type: 'style',
      propKey: 'px-10rem',
      propValue: true,
      style: { paddingLeft: '10rem', paddingRight: '10rem' },
    })
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)
  })
})
