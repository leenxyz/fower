import { Atom, SheetType } from '@styli/types'
import plugin from '../src'
import './config'

describe('bgSize', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('bgSize')).toEqual(true)
    expect(isMatch!('backgroundSize')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    it('<View bgSize="100% 100%"></View>', () => {
      const atom = { propKey: 'bgSize', propValue: '100% 100%' } as Atom
      const finalAtom = { propKey: 'bgSize', propValue: '100% 100%', style: { backgroundSize: '100% 100%' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })

    it('<View backgroundSize="100% 100%"></View>', () => {
      const atom = { propKey: 'backgroundSize', propValue: '100% 100%' } as Atom
      const finalAtom = { propKey: 'backgroundSize', propValue: '100% 100%', style: { backgroundSize: '100% 100%' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })
  })
})
