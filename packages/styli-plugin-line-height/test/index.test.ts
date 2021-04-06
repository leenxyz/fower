import { styli } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-line-height', () => {
  styli.configure({
    theme: {
      lineHeights: { none: 1 },
    },
  })

  const { isMatch, handleAtom } = plugin()
  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('leading')).toEqual(true)
    expect(isMatch!('leading-10')).toEqual(true)
    expect(isMatch!('leadingNone')).toEqual(true)
    expect(isMatch!('leadingTight')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom3 = new Atom({
      propKey: 'leadingNone',
      propValue: true,
    })
    const newAtom3 = new Atom({
      propKey: 'leadingNone',
      propValue: true,
      style: {
        lineHeight: 1,
      },
    })
    expect(handleAtom!(atom3, parser)).toMatchObject(newAtom3)
  })

  it('handleAtom with leading={value}', () => {
    const atom1 = new Atom({
      propKey: 'leading',
      propValue: 10,
    })
    const newAtom1 = new Atom({
      propKey: 'leading',
      propValue: 10,
      style: { lineHeight: 10 },
    })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)
  })
})
