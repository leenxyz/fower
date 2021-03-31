import { styli } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-position', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, handleAtom } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('top')).toEqual(true)
    expect(isMatch!('bottom-10')).toEqual(true)
    expect(isMatch!('left-10rem')).toEqual(true)
    expect(isMatch!('fixed')).toEqual(true)
    expect(isMatch!('absolute')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = new Atom({ propKey: 'top', propValue: 10, key: 'top', style: {} })
    const newAtom1 = new Atom({
      propKey: 'top',
      propValue: 10,
      style: { top: 10 },
      key: 'top',
    })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

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
    expect(handleAtom!(atom4, parser)).toMatchObject(newAtom4)
  })
})
