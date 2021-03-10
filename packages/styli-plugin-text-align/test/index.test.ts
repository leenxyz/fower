import { styli } from '@styli/core'
import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-text-align', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('textAlign')).toEqual(true)
    expect(isMatch!('textCenter')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = {
      propKey: 'textAlign',
      propValue: 'center',
      key: 'textAlign',
      type: 'style',
      style: {},
    }
    const newAtom1: Atom = {
      propKey: 'textAlign',
      propValue: 'center',
      style: { textAlign: 'center' },
      key: 'textAlign',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2: Atom = {
      propKey: 'textCenter',
      propValue: true,
      key: 'textCenter',
      type: 'style',
      style: {},
    }
    const newAtom2: Atom = {
      propKey: 'textCenter',
      propValue: true,
      style: { textAlign: 'center' },
      key: 'textCenter',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)
  })
})
