import { configure } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-text-transform', () => {
  configure({ unit: 'px' })

  const { isMatch, handleAtom } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('normalcase')).toEqual(true)
    expect(isMatch!('lowercase')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = new Atom({
      propKey: 'normalcase',
      propValue: true,
      key: 'normalcase',
      style: {},
    })

    const newAtom1 = new Atom({
      propKey: 'normalcase',
      key: 'normalcase',
      propValue: true,
      style: { textTransform: 'none' },
    })

    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      key: 'lowercase',
      propKey: 'lowercase',
      propValue: true,
      style: {},
    })
    const newAtom2 = new Atom({
      key: 'lowercase',
      propKey: 'lowercase',
      propValue: true,
      style: { textTransform: 'lowercase' },
    })
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)
  })
})
