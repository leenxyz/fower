import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-z-index', () => {
  styli.setup({ unit: 'px' })

  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('zIndex')).toEqual(true)
    expect(isMatch!('zIndex-10')).toEqual(true)
    expect(isMatch!('zIndex--1')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'zIndex', propValue: '10' } as Atom
    const newAtom1 = { propKey: 'zIndex', propValue: '10', style: { zIndex: '10' } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'zIndex-10', propValue: true } as Atom
    const newAtom2 = { propKey: 'zIndex-10', propValue: true, style: { zIndex: '10' } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'zIndex--1', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'zIndex--1',
      propValue: true,
      style: { zIndex: '-1' },
    }
    expect(onVisitProp!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
