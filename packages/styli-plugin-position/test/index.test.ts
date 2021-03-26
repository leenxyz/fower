import { styli } from '@styli/core'
import { Atom } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-position', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('top')).toEqual(true)
    expect(isMatch!('bottom-10')).toEqual(true)
    expect(isMatch!('left-10rem')).toEqual(true)
    expect(isMatch!('fixed')).toEqual(true)
    expect(isMatch!('absolute')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1: Atom = { propKey: 'top', propValue: 10, type: 'style', key: 'top', style: {} }
    const newAtom1: Atom = {
      propKey: 'top',
      propValue: 10,
      style: { top: 10 },
      type: 'style',
      key: 'top',
    }
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2: Atom = {
      propKey: 'bottom-20',
      propValue: true,
      type: 'style',
      key: 'top',
      style: {},
    }
    const newAtom2: Atom = {
      propKey: 'bottom-20',
      propValue: true,
      style: { bottom: 20 },
      type: 'style',
      key: 'top',
    }
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)

    const atom3: Atom = {
      propKey: 'left-10rem',
      propValue: true,
      type: 'style',
      key: 'left-10rem',
      style: {},
    }
    const newAtom3: Atom = {
      type: 'style',
      key: 'left-10rem',
      propKey: 'left-10rem',
      propValue: true,
      style: { left: '10rem' },
    }
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)

    const atom4: Atom = {
      propKey: 'absolute',
      propValue: true,
      key: 'absolute',
      type: 'style',
      style: {},
    }
    const newAtom4: Atom = {
      key: 'absolute',
      type: 'style',
      propKey: 'absolute',
      propValue: true,
      style: { position: 'absolute' },
    }
    expect(onAtomStyleCreate!(atom4, parser)).toMatchObject(newAtom4)
  })
})
