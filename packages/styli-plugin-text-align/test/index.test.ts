import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-text-align', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('textAlign')).toEqual(true)
    expect(isMatch!('textCenter')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'textAlign', propValue: 'center' } as Atom
    const newAtom1 = { propKey: 'textAlign', propValue: 'center', style: { textAlign: 'center' } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'textCenter', propValue: true } as Atom
    const newAtom2 = { propKey: 'textCenter', propValue: true, style: { textAlign: 'center' } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)
  })
})
