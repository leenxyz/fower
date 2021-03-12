import { Atom, SheetType } from '@styli/types'
import plugin from '../src'
import './config'

describe('bgPos', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('bgPos')).toEqual(true)
    expect(isMatch!('backgroundPosition')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    it('<View bgPos="bottom right"></View>', () => {
      const atom = { propKey: 'bgPos', propValue: 'bottom right' } as Atom
      const finalAtom = { propKey: 'bgPos', propValue: 'bottom right', style: { backgroundPosition: 'bottom right' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })

    it('<View backgroundPosition="bottom right"></View>', () => {
      const atom = { propKey: 'backgroundPosition', propValue: 'bottom right' } as Atom
      const finalAtom = { propKey: 'backgroundPosition', propValue: 'bottom right', style: { backgroundPosition: 'bottom right' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })
  })
})
