import { ParserType } from '@styli/types'
import { Atom } from '@styli/atom'
import plugin from '../src'
import './config'

describe('bgSize', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as ParserType

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
      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(finalAtom)
    })
  })
})
