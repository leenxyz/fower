import { styli } from '@styli/core'
import { Atom } from '@styli/atom'
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
    const atom1 = new Atom({ propKey: 'top', propValue: 10, key: 'top', style: {} })
    const newAtom1 = new Atom({
      propKey: 'top',
      propValue: 10,
      style: { top: '10px' },
      key: 'top',
    })
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom3 = new Atom({
      propKey: 'left-10rem',
      propValue: true,
      key: 'left-10rem',
      style: {},
    })
    const newAtom3 = new Atom({
      key: 'left-10rem',
      propKey: 'left-10rem',
      propValue: true,
      style: { left: '10rem' },
    })
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)

    const atom4 = new Atom({
      propKey: 'absolute',
      propValue: true,
      key: 'absolute',
      style: {},
    })
    const newAtom4 = new Atom({
      key: 'absolute',
      propKey: 'absolute',
      propValue: true,
      style: { position: 'absolute' },
    })
    expect(onAtomStyleCreate!(atom4, parser)).toMatchObject(newAtom4)
  })
})
