import { styli } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-line-height', () => {
  styli.configure({
    theme: {
      lineHeight: { none: 1 },
    },
  })

  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('leading')).toEqual(true)
    expect(isMatch!('leading-10')).toEqual(true)
    expect(isMatch!('leadingNone')).toEqual(true)
    expect(isMatch!('leadingTight')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'leading', propValue: 10 } as Atom
    const newAtom1 = { propKey: 'leading', propValue: 10, style: { lineHeight: '10px' } }
    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'leading-20', propValue: true } as Atom
    const newAtom2 = { propKey: 'leading-20', propValue: true, style: { lineHeight: '20px' } }
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'leadingNone', propValue: true } as Atom
    const newAtom3 = { propKey: 'leadingNone', propValue: true, style: { lineHeight: 1 } }
    expect(onAtomStyleCreate!(atom3, parser)).toMatchObject(newAtom3)
  })
})
