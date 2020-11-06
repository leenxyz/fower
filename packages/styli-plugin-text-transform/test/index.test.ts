import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-text-transform', () => {
  styli.setup({ unit: 'px' })

  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('normalcase')).toEqual(true)
    expect(isMatch!('lowercase')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'normalcase', propValue: true } as Atom
    const newAtom1 = { propKey: 'normalcase', propValue: true, style: { textTransform: 'none' } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'lowercase', propValue: true } as Atom
    const newAtom2 = {
      propKey: 'lowercase',
      propValue: true,
      style: { textTransform: 'lowercase' },
    }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)
  })
})
