import { styli } from '@styli/core'
import { SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-space', () => {
  styli.configure({
    theme: {
      colors: {
        red: 'blue',
      },
    } as any,
  })

  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('space')).toEqual(true)
    expect(isMatch!('spaceX')).toEqual(true)
    expect(isMatch!('spaceX-10')).toEqual(true)
    expect(isMatch!('spaceY-20')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'space', propValue: 10, style: {} }
    const newAtom1 = {
      propKey: 'space',
      propValue: 10,
      style: {
        '>div': {
          'margin-top': '10px',
          'margin-left': '10px',
          'margin-bottom': '10px',
          'margin-right': '10px',
        },
      },
    }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)
  })
})
