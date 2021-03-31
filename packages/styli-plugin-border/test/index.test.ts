import { styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-border', () => {
  styli.configure({
    theme: {
      colors: {
        red200: 'blue',
      },
    },
  })

  const { isMatch } = plugin()
  // const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('border')).toEqual(true)
    expect(isMatch!('borderT')).toEqual(true)
    expect(isMatch!('borderT-1')).toEqual(true)
    expect(isMatch!('borderRed-1')).toEqual(true)
  })

  it('handleAtom', () => {})
})
