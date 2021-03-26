import { styli } from '@styli/core'
import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-text-transform', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('normalcase')).toEqual(true)
    expect(isMatch!('lowercase')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = {
      propKey: 'normalcase',
      propValue: true,
      key: 'normalcase',
      type: 'style',
      style: {},
    }
    const newAtom1: Atom = {
      propKey: 'normalcase',
      key: 'normalcase',
      propValue: true,
      style: { textTransform: 'none' },
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2: Atom = {
      key: 'lowercase',
      propKey: 'lowercase',
      propValue: true,
      type: 'style',
      style: {},
    }
    const newAtom2: Atom = {
      key: 'lowercase',
      propKey: 'lowercase',
      propValue: true,
      style: { textTransform: 'lowercase' },
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)
  })
})
