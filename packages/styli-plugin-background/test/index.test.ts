import { Sheet, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-background', () => {
  styli.setup({
    theme: {
      colors: {
        red: 'blue',
      },
    } as any,
  })

  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as Sheet

  it('isMatch', () => {
    expect(isMatch!('bgImg')).toEqual(true)
    expect(isMatch!('bgPos')).toEqual(true)
    expect(isMatch!('bgSize')).toEqual(true)
    expect(isMatch!('bg')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'bg', propValue: 'red', style: {} }
    const newAtom1 = { propKey: 'bg', propValue: 'red', style: { backgroundColor: 'blue' } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'bgRed', propValue: true, style: {} }
    const newAtom2 = { propKey: 'bgRed', propValue: true, style: { backgroundColor: 'blue' } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'bgImg', propValue: 'imgSrc', style: {} }
    const newAtom3 = {
      propKey: 'bgImg',
      propValue: 'imgSrc',
      style: { backgroundImage: 'url("imgSrc")' },
    }
    expect(onVisitProp!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4 = { propKey: 'bgSize', propValue: '100% 100%', style: {} }
    const newAtom4 = {
      propKey: 'bgSize',
      propValue: '100% 100%',
      style: { backgroundSize: '100% 100%' },
    }
    expect(onVisitProp!(atom4, sheet)).toMatchObject(newAtom4)
  })
})
