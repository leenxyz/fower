import { Sheet, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-background', () => {
  styli.setup({
    theme: {
      typography: {
        colors: {
          red: 'blue',
        },
      },
    },
  })

  const { isMatch, onVisitProp } = plugin()

  it('isMatch', () => {
    expect(isMatch!('bgImg')).toEqual(true)
    expect(isMatch!('bgPos')).toEqual(true)
    expect(isMatch!('bgSize')).toEqual(true)
    expect(isMatch!('bg')).toEqual(true)
  })

  it('onVisitProp', () => {
    expect(
      onVisitProp!({ propKey: 'bg', propValue: 'red', style: {} }, {} as Sheet),
    ).toMatchObject({ propKey: 'bg', propValue: 'red', style: { backgroundColor: 'blue' } })
    expect(
      onVisitProp!({ propKey: 'bgRed', propValue: true, style: {} }, {} as Sheet),
    ).toMatchObject({ propKey: 'bgRed', propValue: true, style: { backgroundColor: 'blue' } })
    expect(
      onVisitProp!({ propKey: 'bgImg', propValue: 'imgSrc', style: {} }, {} as Sheet),
    ).toMatchObject({
      propKey: 'bgImg',
      propValue: 'imgSrc',
      style: { backgroundImage: 'url("imgSrc")' },
    })
    expect(
      onVisitProp!({ propKey: 'bgSize', propValue: '100% 100%', style: {} }, {} as Sheet),
    ).toMatchObject({
      propKey: 'bgSize',
      propValue: '100% 100%',
      style: { backgroundSize: '100% 100%' },
    })
  })
})
