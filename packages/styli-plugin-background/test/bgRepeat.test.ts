import { Atom, SheetType } from '@styli/types'
import plugin from '../src'
import './config'

describe('bgRepeat', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('backgroundRepeat')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    it('<View backgroundRepeat="no-repeat"></View>', () => {
      const atom = { propKey: 'backgroundRepeat', propValue: 'no-repeat' } as Atom
      const finalAtom = {
        propKey: 'backgroundRepeat',
        propValue: 'no-repeat',
        style: { backgroundRepeat: 'no-repeat' },
      } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })
  })
})
