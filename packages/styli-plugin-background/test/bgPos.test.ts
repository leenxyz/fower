import { Atom, SheetType } from '@styli/types'
import plugin from '../src'
import './config'

describe('bgPos', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('backgroundPosition')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    it('<View backgroundPosition="bottom right"></View>', () => {
      const atom = { propKey: 'backgroundPosition', propValue: 'bottom right' } as Atom
      const finalAtom = {
        propKey: 'backgroundPosition',
        propValue: 'bottom right',
        style: { backgroundPosition: 'bottom right' },
      } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })
  })
})
