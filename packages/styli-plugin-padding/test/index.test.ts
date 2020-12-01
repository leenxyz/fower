import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-padding', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('p')).toEqual(true)
    expect(isMatch!('pl')).toEqual(true)
    expect(isMatch!('py')).toEqual(true)
    expect(isMatch!('px-10')).toEqual(true)
    expect(isMatch!('px-10rem')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'p', propValue: 10 } as Atom
    const newAtom1 = { propKey: 'p', propValue: 10, style: { padding: '10px' } }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'pl-20', propValue: true } as Atom
    const newAtom2 = { propKey: 'pl-20', propValue: true, style: { paddingLeft: '20px' } }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'px-10rem', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'px-10rem',
      propValue: true,
      style: { paddingLeft: '10rem', paddingRight: '10rem' },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
