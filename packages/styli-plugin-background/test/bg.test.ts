import { Atom, SheetType } from '@styli/types'
import plugin from '../src'
import './config'

describe('bg', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('bg')).toEqual(true)
    expect(isMatch!('background')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    it('<View bg="url(https://www.baidu.com) center no-repeat"></View>', () => {
      const atom = { propKey: 'bg', propValue: 'url(https://www.baidu.com) center no-repeat' } as Atom
      const finalAtom = { propKey: 'bg', propValue: 'url(https://www.baidu.com) center no-repeat', style: { background: 'url(https://www.baidu.com) center no-repeat' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })

    it('<View bg="gray30"></View>', () => {
      const atom = { propKey: 'bg', propValue: 'gray30' } as Atom
      const finalAtom = { propKey: 'bg', propValue: 'gray30', style: { background: '#333333' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })

    it('<View bg="gray30-T10"></View>', () => {
      const atom = { propKey: 'bg', propValue: 'gray30-T10' } as Atom
      const finalAtom = { propKey: 'bg', propValue: 'gray30-T10', style: { background: 'rgba(51,51,51,0.9)' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })

    it('<View background="gray30"></View>', () => {
      const atom = { propKey: 'background', propValue: 'gray30' } as Atom
      const finalAtom = { propKey: 'background', propValue: 'gray30', style: { background: '#333333' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })

    it('<View background="gray30-T10"></View>', () => {
      const atom = { propKey: 'background', propValue: 'gray30-T10' } as Atom
      const finalAtom = { propKey: 'background', propValue: 'gray30-T10', style: { background: 'rgba(51,51,51,0.9)' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })
  })
})
