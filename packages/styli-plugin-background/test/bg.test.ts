import { ParserType } from '@styli/types'
import { Atom } from '@styli/atom'
import plugin from '../src'
import './config'

describe('bg', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as ParserType

  it('isMatch', () => {
    expect(isMatch!('bg')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    it('<View bg="gray30"></View>', () => {
      const atom = { propKey: 'bg', propValue: 'gray30' } as Atom
      const finalAtom = {
        propKey: 'bg',
        propValue: 'gray30',
        style: { backgroundColor: '#333333' },
      } as Atom
      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(finalAtom)
    })

    it('<View bg="gray30-T10"></View>', () => {
      const atom = { propKey: 'bg', propValue: 'gray30-T10' } as Atom
      const finalAtom = {
        propKey: 'bg',
        propValue: 'gray30-T10',
        style: { backgroundColor: 'rgba(51,51,51,0.9)' },
      } as Atom
      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(finalAtom)
    })
  })
})
