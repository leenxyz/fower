import { ParserType } from '@styli/types'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-box-sizing', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as ParserType

  it('isMatch', () => {
    expect(isMatch!('boxSizing')).toEqual(true)
    expect(isMatch!('borderBox')).toEqual(true)
    expect(isMatch!('contentBox')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    // <View boxSizing="border-box"></View>
    it('boxSizing', () => {
      const atom = {
        propKey: 'boxSizing',
        propValue: 'border-box',
        style: {},
        type: 'style',
      } as Atom

      const newAtom = {
        propKey: 'boxSizing',
        propValue: 'border-box',
        type: 'style',
        style: { boxSizing: 'border-box' },
      }
      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(newAtom)
    })

    // <View borderBox></View>
    it('borderBox', () => {
      const atom = {
        propKey: 'borderBox',
        propValue: true,
        style: {},
        type: 'style',
      } as Atom

      const newAtom = {
        propKey: 'borderBox',
        propValue: true,
        type: 'style',
        style: { boxSizing: 'border-box' },
      }
      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(newAtom)
    })

    // <View contentBox></View>
    it('contentBox', () => {
      const atom = {
        propKey: 'contentBox',
        propValue: true,
        style: {},
        type: 'style',
      } as Atom

      const newAtom = {
        propKey: 'contentBox',
        propValue: true,
        type: 'style',
        style: { boxSizing: 'content-box' },
      }
      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(newAtom)
    })
  })
})
