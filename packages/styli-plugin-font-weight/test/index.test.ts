import { styli } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-font-weight', () => {
  styli.configure({
    theme: {
      fontWeights: {
        medium: 500,
      },
    },
  })

  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('fontWeight')).toEqual(true)
    expect(isMatch!('fontMedium')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'fontWeight', propValue: '600' } as Atom
    const newAtom1 = { propKey: 'fontWeight', propValue: '600', style: { fontWeight: '600' } }
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'fontMedium', propValue: true } as Atom
    const newAtom2 = { propKey: 'fontMedium', propValue: true, style: { fontWeight: 500 } }
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)
  })
})
