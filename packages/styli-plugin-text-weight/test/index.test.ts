import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-text-weight', () => {
  styli.setup({
    theme: {
      fontWeight: {
        medium: "500"
      }
    } as any
  })

  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('fontWeight')).toEqual(true)
    expect(isMatch!('fontMedium')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'fontWeight', propValue: '600' } as Atom
    const newAtom1 = { propKey: 'fontWeight', propValue: '600', style: { fontWeight: "600" } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'fontMedium', propValue: true } as Atom
    const newAtom2 = { propKey: 'fontMedium', propValue: true, style: { fontWeight: "500" } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)
  })
})
