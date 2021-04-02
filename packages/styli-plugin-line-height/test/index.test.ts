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
    const atom1 = { propKey: 'leading', propValue: 10 } as Atom
    const newAtom1 = { propKey: 'leading', propValue: 10, style: { lineHeight: 10 } }
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'leading-20', propValue: true } as Atom
    const newAtom2 = { propKey: 'leading-20', propValue: true, style: { lineHeight: '20' } }
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'leadingNone', propValue: true } as Atom
    const newAtom3 = { propKey: 'leadingNone', propValue: true, style: { lineHeight: 1 } }
    expect(handleAtom!(atom3, parser)).toMatchObject(newAtom3)
  })
})
