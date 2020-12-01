import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-text-transform', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('normalcase')).toEqual(true)
    expect(isMatch!('lowercase')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'normalcase', propValue: true } as Atom
    const newAtom1 = { propKey: 'normalcase', propValue: true, style: { textTransform: 'none' } }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'lowercase', propValue: true } as Atom
    const newAtom2 = {
      propKey: 'lowercase',
      propValue: true,
      style: { textTransform: 'lowercase' },
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)
  })
})
