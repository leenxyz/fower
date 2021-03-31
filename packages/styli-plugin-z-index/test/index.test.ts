import { styli } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-z-index', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, handleAtom } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('zIndex')).toEqual(true)
    expect(isMatch!('zIndex-10')).toEqual(true)
    expect(isMatch!('zIndex--1')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = { propKey: 'zIndex', propValue: '10' } as Atom
    const newAtom1 = { propKey: 'zIndex', propValue: '10', style: { zIndex: '10' } }
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom4 = { propKey: 'zIndex', propValue: '-1' } as Atom
    const newAtom4 = {
      propKey: 'zIndex',
      propValue: '-1',
      style: { zIndex: '-1' },
    }
    expect(handleAtom!(atom4, parser)).toMatchObject(newAtom4)
  })
})
