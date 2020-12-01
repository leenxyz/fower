import { Atom, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-line-height', () => {
  styli.configure({
    unit: 'px',
    inline: true,
    theme: {
      lineHeight: { none: '1' },
    } as any,
  })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as any

  it('isMatch', () => {
    expect(isMatch!('lh')).toEqual(true)
    expect(isMatch!('lh-10')).toEqual(true)
    expect(isMatch!('lhNone')).toEqual(true)
    expect(isMatch!('lhTight')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'lh', propValue: 10 } as Atom
    const newAtom1 = { propKey: 'lh', propValue: 10, style: { lineHeight: '10px' } }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'lh-20', propValue: true } as Atom
    const newAtom2 = { propKey: 'lh-20', propValue: true, style: { lineHeight: '20px' } }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'lhNone', propValue: true } as Atom
    const newAtom3 = { propKey: 'lhNone', propValue: true, style: { lineHeight: '1' } }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
  })
})
