import { styli } from '@styli/core'
import { SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-color', () => {
  styli.configure({
    theme: {
      colors: {
        red: 'blue',
      },
    } as any,
  })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('red')).toEqual(true)
    expect(isMatch!('blue')).toEqual(false)
    expect(isMatch!('color')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    // <View red></View>
    it('red', () => {
      const atom = {
        propKey: 'red',
        propValue: true,
        style: {},
        type: 'style' as any,
        key: 'red',
        value: true,
      }
      const newAtom = {
        propKey: 'red',
        propValue: true,
        type: 'style',
        key: 'red',
        value: true,
        style: { color: 'blue' },
      }
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(newAtom)
    })

    // <View color="red"></View>
    it('color', () => {
      const atom = {
        propKey: 'color',
        propValue: 'red',
        style: {},
        type: 'style' as any,
        key: 'red',
        value: true,
      }
      const newAtom = {
        propKey: 'color',
        propValue: 'red',
        style: { color: 'blue' },
        type: 'style' as any,
        key: 'red',
        value: true,
      }
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(newAtom)
    })
  })
})
