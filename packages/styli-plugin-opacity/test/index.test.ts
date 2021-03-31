import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-opacity', () => {
  const { isMatch, handleAtom } = plugin()

  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('opacity')).toEqual(true)
    expect(isMatch!('opacity-20')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom2 = new Atom({
      propKey: 'opacity',
      propValue: 80,
      key: 'opacity',
      style: {},
    })
    const newAtom2 = new Atom({
      propKey: 'opacity',
      propValue: 80,
      style: { opacity: 0.8 },
      key: 'opacity',
    })
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = new Atom({
      propKey: 'opacity',
      propValue: 20,
    })

    const { style } = handleAtom!(atom3, parser)

    expect(style).toMatchObject({
      opacity: 0.2,
    })
  })
})
