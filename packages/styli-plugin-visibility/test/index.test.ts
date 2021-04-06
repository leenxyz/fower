import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-visibility', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('visibility')).toEqual(true)
  })

  describe('handleAtom', () => {
    // <View boxSizing="border-box"></View>
    it('visibility', () => {
      const atom = new Atom({
        propKey: 'visibility',
        propValue: 'hidden',
        style: {},
      })

      const newAtom = new Atom({
        propKey: 'visibility',
        propValue: 'hidden',
        style: { visibility: 'hidden' },
      })
      expect(handleAtom!(atom, parser)).toMatchObject(newAtom)
    })
  })
})
