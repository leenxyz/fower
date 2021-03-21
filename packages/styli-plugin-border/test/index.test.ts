import { styli } from '@styli/core'
// import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-border', () => {
  styli.configure(() => ({
    theme: {
      colors: {
        red: 'blue',
      },
    } as any,
  }))

  const { isMatch } = plugin()
  // const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('border')).toEqual(true)
    expect(isMatch!('borderT')).toEqual(true)
    expect(isMatch!('borderT-1')).toEqual(true)
    expect(isMatch!('borderRed-1')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {})
})
