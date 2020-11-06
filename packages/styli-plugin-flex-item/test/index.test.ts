import { Atom, Sheet } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-flex-item', () => {
  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as Sheet

  it('isMatch', () => {
    expect(isMatch!('flex')).toEqual(true)
    expect(isMatch!('flex-1')).toEqual(true)
    expect(isMatch!('flex1')).toEqual(false)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'flex', propValue: true } as Atom
    const newAtom1 = { propKey: 'flex', propValue: true, style: { flex: 1 } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'flex-3', propValue: true } as Atom
    const newAtom2 = { propKey: 'flex-3', propValue: true, style: { flex: 3 } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)
  })
})
