import { Atom, SheetType } from '@styli/types'
import plugin from '../src'
import './config'

describe('bgColor', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('bgColor')).toEqual(true)
    expect(isMatch!('backgroundColor')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    it('<View bgColor="gray30"></View>', () => {
      const atom = { propKey: 'bgColor', propValue: 'gray30' } as Atom
      const finalAtom = { propKey: 'bgColor', propValue: 'gray30', style: { backgroundColor: '#333333' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })

    it('<View bgColor="gray30-T10"></View>', () => {
      const atom = { propKey: 'bgColor', propValue: 'gray30-T10' } as Atom
      const finalAtom = { propKey: 'bgColor', propValue: 'gray30-T10', style: { backgroundColor: 'rgba(51,51,51,0.9)' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })

    it('<View backgroundColor="gray30"></View>', () => {
      const atom = { propKey: 'backgroundColor', propValue: 'gray30' } as Atom
      const finalAtom = { propKey: 'backgroundColor', propValue: 'gray30', style: { backgroundColor: '#333333' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })

    it('<View backgroundColor="gray30-T10"></View>', () => {
      const atom = { propKey: 'backgroundColor', propValue: 'gray30-T10' } as Atom
      const finalAtom = { propKey: 'backgroundColor', propValue: 'gray30-T10', style: { backgroundColor: 'rgba(51,51,51,0.9)' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })

    it('<View backgroundColor="#000-T10"></View>', () => {
      const atom = { propKey: 'backgroundColor', propValue: '#000-T10' } as Atom
      const finalAtom = { propKey: 'backgroundColor', propValue: '#000-T10', style: { backgroundColor: 'rgba(0,0,0,0.9)' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })
  })
})
