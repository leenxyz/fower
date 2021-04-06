import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-box-sizing', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('boxSizing')).toEqual(true)
    expect(isMatch!('borderBox')).toEqual(true)
    expect(isMatch!('contentBox')).toEqual(true)
  })

  describe('handleAtom', () => {
    // <View boxSizing="border-box"></View>
    it('boxSizing', () => {
      const atom = new Atom({
        propKey: 'boxSizing',
        propValue: 'border-box',
        style: {},
      })

      const newAtom = new Atom({
        propKey: 'boxSizing',
        propValue: 'border-box',
        style: { boxSizing: 'border-box' },
      })
      expect(handleAtom!(atom, parser)).toMatchObject(newAtom)
    })

    // <View borderBox></View>
    it('borderBox', () => {
      const atom = new Atom({
        propKey: 'borderBox',
        propValue: true,
        style: {},
      })

      const newAtom = new Atom({
        propKey: 'borderBox',
        propValue: true,
        style: { boxSizing: 'border-box' },
      })
      expect(handleAtom!(atom, parser)).toMatchObject(newAtom)
    })

    // <View contentBox></View>
    it('contentBox', () => {
      const atom = new Atom({
        propKey: 'contentBox',
        propValue: true,
        style: {},
      })

      const newAtom = new Atom({
        propKey: 'contentBox',
        propValue: true,
        style: { boxSizing: 'content-box' },
      })
      expect(handleAtom!(atom, parser)).toMatchObject(newAtom)
    })
  })
})
