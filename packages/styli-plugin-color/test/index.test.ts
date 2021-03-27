import { styli } from '@styli/core'
import { Atom } from '@styli/atom'
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
      const atom = new Atom({
        propKey: 'red',
        propValue: true,
        style: {},
        type: 'style' as any,
        key: 'red',
      })
      const newAtom = new Atom({
        propKey: 'red',
        propValue: true,
        type: 'style',
        key: 'red',
        style: { color: 'blue' },
      })

      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(newAtom)
    })

    // <View color="red"></View>
    it('color', () => {
      const atom = new Atom({
        propKey: 'color',
        propValue: 'red',
        style: {},
        type: 'style' as any,
        key: 'red',
      })
      const newAtom = new Atom({
        propKey: 'color',
        propValue: 'red',
        style: { color: 'blue' },
        type: 'style' as any,
        key: 'red',
      })
      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(newAtom)
    })
  })
})
