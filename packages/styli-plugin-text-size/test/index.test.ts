import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-text-size', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('f')).toEqual(true)
    expect(isMatch!('f-10')).toEqual(true)
    expect(isMatch!('f-10rem')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'f', propValue: 10 } as Atom
    const newAtom1 = { propKey: 'f', propValue: 10, style: { fontSize: '10px' } }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'f-20', propValue: true } as Atom
    const newAtom2 = { propKey: 'f-20', propValue: true, style: { fontSize: '20px' } }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'f-10rem', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'f-10rem',
      propValue: true,
      style: { fontSize: '10rem' },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
