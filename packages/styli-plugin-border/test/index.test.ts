import { styli } from '@styli/core'
import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-border', () => {
  styli.configure(() => ({
    theme: {
      colors: {
        red: 'blue',
      },
    } as any,
  }))

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('border')).toEqual(true)
    expect(isMatch!('borderT')).toEqual(true)
    expect(isMatch!('borderT-1')).toEqual(true)
    expect(isMatch!('borderRed-1')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = { propKey: 'border', propValue: '1px solid red', style: {} } as Atom
    const newAtom1 = {
      propKey: 'border',
      propValue: '1px solid red',
      style: { border: '1px solid blue' },
    }
    expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'borderT', propValue: '1px solid red', style: {} } as Atom
    const newAtom2 = {
      propKey: 'borderT',
      propValue: '1px solid red',
      style: { borderTop: '1px solid blue' },
    }
    expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)
  })
})
