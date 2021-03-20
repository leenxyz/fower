import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-visibility', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('visibility')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    // <View boxSizing="border-box"></View>
    it('visibility', () => {
      const atom = {
        propKey: 'visibility',
        propValue: 'hidden',
        style: {},
        type: 'style',
      } as Atom

      const newAtom = {
        propKey: 'visibility',
        propValue: 'hidden',
        type: 'style',
        style: { visibility: 'hidden' },
      }
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(newAtom)
    })
  })
})
