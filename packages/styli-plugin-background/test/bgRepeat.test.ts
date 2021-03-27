import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'
import './config'

describe('bgRepeat', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as Parser

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
      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(finalAtom)
    })
  })
})
