import { styli } from '@styli/core'
import { Parser } from '@styli/parser'
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
  const parser = {} as Parser

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
      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(newAtom)
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
      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(newAtom)
    })
  })
})
