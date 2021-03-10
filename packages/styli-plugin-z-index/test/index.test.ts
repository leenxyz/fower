import { styli } from '@styli/core'
import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-z-index', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('zIndex')).toEqual(true)
    expect(isMatch!('zIndex-10')).toEqual(true)
    expect(isMatch!('zIndex--1')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'zIndex', propValue: '10' } as Atom
    const newAtom1 = { propKey: 'zIndex', propValue: '10', style: { zIndex: '10' } }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'zIndex-10', propValue: true } as Atom
    const newAtom2 = { propKey: 'zIndex-10', propValue: true, style: { zIndex: '10' } }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'zIndex--1', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'zIndex--1',
      propValue: true,
      style: { zIndex: '-1' },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
