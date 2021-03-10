import { styli } from '@styli/core'
import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-padding', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any
  it('isMatch', () => {
    expect(isMatch!('p')).toEqual(true)
    expect(isMatch!('pl')).toEqual(true)
    expect(isMatch!('py')).toEqual(true)
    expect(isMatch!('px-10')).toEqual(true)
    expect(isMatch!('px-10rem')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = { propKey: 'p', propValue: 10, key: 'p', type: 'style', style: {} }
    const newAtom1: Atom = {
      propKey: 'p',
      propValue: 10,
      style: { padding: 10 },
      key: 'p',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2: Atom = {
      propKey: 'pl-20',
      propValue: true,
      key: 'pl-20',
      type: 'style',
      style: {},
    }
    const newAtom2: Atom = {
      propKey: 'pl-20',
      propValue: true,
      style: { paddingLeft: 20 },
      key: 'pl-20',
      type: 'style',
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3: Atom = {
      propKey: 'px-10rem',
      propValue: true,
      key: 'px-10rem',
      type: 'style',
      style: {},
    }
    const newAtom3: Atom = {
      key: 'px-10rem',
      type: 'style',
      propKey: 'px-10rem',
      propValue: true,
      style: { paddingLeft: '10rem', paddingRight: '10rem' },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
