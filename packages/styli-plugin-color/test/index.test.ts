import { styli } from '@styli/core'
import { SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-color', () => {
  styli.configure({
    theme: {
      colors: {
        red: 'blue',
        colorRed: true,
        colorBrand: '#000',
      },
    } as any,
  })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('red')).toEqual(true)
    expect(isMatch!('blue')).toEqual(false)
    expect(isMatch!('color')).toEqual(true)
    expect(isMatch!('colorRed')).toEqual(true)
    expect(isMatch!('colorBrand')).toEqual(true)
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

    // <View colorRed></View>
    it('colorRed', () => {
      const atom = {
        propKey: 'colorRed',
        propValue: true,
        style: {},
        type: 'style' as any,
        key: 'colorRed',
        value: true,
      }
      const newAtom = {
        propKey: 'colorRed',
        propValue: true,
        type: 'style',
        key: 'colorRed',
        value: true,
        style: { color: 'blue' },
      }
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(newAtom)
    })

    // <View colorBrand-T10></View>
    it('colorBrand', () => {
      const atom = {
        propKey: 'colorBrand-T10',
        propValue: true,
        style: {},
        type: 'style' as any,
        key: 'colorBrand-T10',
        value: true,
      }
      const newAtom = {
        propKey: 'colorBrand-T10',
        propValue: true,
        type: 'style',
        key: 'colorBrand-T10',
        value: true,
        style: { color: 'rgba(0,0,0,0.9)' },
      }
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(newAtom)
    })
  })
})
