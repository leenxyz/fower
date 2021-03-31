import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-padding', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('p')).toEqual(true)
    expect(isMatch!('pl')).toEqual(true)
    expect(isMatch!('py')).toEqual(true)
    expect(isMatch!('px-10')).toEqual(true)
    expect(isMatch!('px-10rem')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = new Atom({ propKey: 'p', propValue: 10, key: 'p', style: {} })
    const newAtom1 = new Atom({
      propKey: 'p',
      propValue: 10,
      style: { padding: 10 },
      key: 'p',
    })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'pl',
      propValue: '20',
    })
    const newAtom2 = new Atom({
      propKey: 'pl',
      propValue: '20',
      style: { paddingLeft: '20' },
      key: 'pl',
    })
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = new Atom({
      propKey: 'px',
      propValue: '10rem',
      key: 'px',
      style: {},
    })
    const newAtom3 = new Atom({
      key: 'px',
      propKey: 'px',
      propValue: '10rem',
      style: { paddingLeft: '10rem', paddingRight: '10rem' },
    })
    expect(handleAtom!(atom3, parser)).toMatchObject(newAtom3)
  })
})
