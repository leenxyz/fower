import { Sheet, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-border', () => {
  styli.configure({
    theme: {
      colors: {
        red: 'blue',
      },
    } as any,
  })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as Sheet

  it('isMatch', () => {
    expect(isMatch!('border')).toEqual(true)
    expect(isMatch!('borderT')).toEqual(true)
    expect(isMatch!('borderT-1')).toEqual(true)
    expect(isMatch!('borderRed-1')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'border', propValue: true, style: {} }
    const newAtom1 = {
      propKey: 'border',
      propValue: true,
      style: { borderColor: 'gray', borderWidth: '1px', borderStyle: 'solid' },
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'borderT', propValue: true, style: {} }
    const newAtom2 = {
      propKey: 'borderT',
      propValue: true,
      style: { borderColor: 'gray', borderStyle: 'solid' },
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'borderT-1', propValue: true, style: {} }
    const newAtom3 = {
      propKey: 'borderT-1',
      propValue: true,
      style: { borderColor: 'gray', borderTopWidth: '1px', borderStyle: 'solid' },
    }
    expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4 = { propKey: 'borderRed-1', propValue: true, style: {} }
    const newAtom4 = {
      propKey: 'borderRed-1',
      propValue: true,
      style: { borderColor: 'blue', borderWidth: '1px', borderStyle: 'solid' },
    }
    expect(onAtomStyleCreate!(atom4, sheet)).toMatchObject(newAtom4)
  })
})
