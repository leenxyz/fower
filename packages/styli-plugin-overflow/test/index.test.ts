import { Atom } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-overflow', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('overflow')).toEqual(true)
    expect(isMatch!('overflowX')).toEqual(true)
    expect(isMatch!('oHidden')).toEqual(true)
    expect(isMatch!('oxVisible')).toEqual(true)
    expect(isMatch!('oyScroll')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'overflow', propValue: 'scroll' } as Atom
    const newAtom1 = { propKey: 'overflow', propValue: 'scroll', style: { overflow: 'scroll' } }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'oxVisible', propValue: true } as Atom
    const newAtom2 = { propKey: 'oxVisible', propValue: true, style: { overflowX: 'visible' } }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)
  })
})
