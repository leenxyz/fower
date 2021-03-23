import { Atom, SheetType } from '@styli/types'
import plugin from '../src'
import './config'

describe('bgSize', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('backgroundSize')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    it('<View backgroundSize="100% 100%"></View>', () => {
      const atom = { propKey: 'backgroundSize', propValue: '100% 100%' } as Atom
      const finalAtom = {
        propKey: 'backgroundSize',
        propValue: '100% 100%',
        style: { backgroundSize: '100% 100%' },
      } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })
  })
})
