import { Sheet, styli } from '@styli/core'
import plugin from '../src'

describe('styli-plugin-color', () => {

  styli.setup({
    theme: {
      colors: {
        red: 'blue',
        colorRed: 'yellow',
      }
    } as any
  })

  const { isMatch, onVisitProp } = plugin()
  const sheet = {} as Sheet

  it('isMatch', () => {
    expect(isMatch!('red')).toEqual(true)
    expect(isMatch!('blue')).toEqual(false)
    expect(isMatch!('color')).toEqual(true)
    expect(isMatch!('colorRed')).toEqual(true)
    expect(isMatch!('fontColor')).toEqual(true)
  })

  it('onVisitProp', () => {
    const atom1 = { propKey: 'red', propValue: true, style: {} }
    const newAtom1 = { propKey: 'red', propValue: true, style: { color: 'blue' } }
    expect(onVisitProp!(atom1, sheet)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'color', propValue: 'red', style: {} }
    const newAtom2 = { propKey: 'color', propValue: 'red', style: { color: 'red' } }
    expect(onVisitProp!(atom2, sheet)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'colorRed', propValue: true, style: {} }
    const newAtom3 = { propKey: 'colorRed', propValue: true, style: { color: 'yellow' } }
    expect(onVisitProp!(atom3, sheet)).toMatchObject(newAtom3)

    const atom4 = { propKey: 'fontColor', propValue: 'red', style: {} }
    const newAtom4 = { propKey: 'fontColor', propValue: 'red', style: { color: 'red' } }
    expect(onVisitProp!(atom4, sheet)).toMatchObject(newAtom4)
  })
})
