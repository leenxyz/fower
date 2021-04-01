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

  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('red')).toEqual(true)
    expect(isMatch!('blue')).toEqual(false)
    expect(isMatch!('color')).toEqual(true)
  })

  describe('handleAtom', () => {
    // <View red></View>
    it('red', () => {
      const atom = new Atom({
        propKey: 'red',
        propValue: true,
      })

      expect(handleAtom!(atom, parser).style).toMatchObject({
        color: 'red',
      })
    })

    // <View color="red"></View>
    it('color', () => {
      const atom = new Atom({
        propKey: 'color',
        propValue: 'red',
      })
      const newAtom = new Atom({
        propKey: 'color',
        propValue: 'red',
        key: 'color',
        style: { color: 'red' },
      })
      expect(handleAtom!(atom, parser)).toMatchObject(newAtom)
    })
  })
})
