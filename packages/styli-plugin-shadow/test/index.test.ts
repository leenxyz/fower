import { styli } from '@styli/core'
import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-shadow', () => {
  styli.configure({
    theme: {
      shadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      },
    } as any,
  })

  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('shadow')).toEqual(true)
    expect(isMatch!('shadowXS')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = {
      propKey: 'shadow',
      propValue: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      key: 'shadow',
      type: 'style',
      style: {},
    }
    const newAtom1: Atom = {
      key: 'shadow',
      type: 'style',
      propKey: 'shadow',
      propValue: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      style: { boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)' },
    }
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2: Atom = {
      propKey: 'shadowXS',
      propValue: true,
      key: 'shadowXS',
      type: 'style',
      style: {},
    }
    const newAtom2 = {
      propKey: 'shadowXS',
      propValue: true,
      style: { boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)' },
      key: 'shadowXS',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)
  })
})
