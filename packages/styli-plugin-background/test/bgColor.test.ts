import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'
import './config'

describe('bgColor', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('backgroundColor')).toEqual(true)
  })

  describe('handleAtom', () => {
    it('<View backgroundColor="gray30"></View>', () => {
      const atom = { propKey: 'backgroundColor', propValue: 'gray30' } as Atom
      const finalAtom = {
        propKey: 'backgroundColor',
        propValue: 'gray30',
        style: { backgroundColor: '#333333' },
      } as Atom
      expect(handleAtom!(atom, parser)).toMatchObject(finalAtom)
    })

    it('<View backgroundColor="gray30-T10"></View>', () => {
      const atom = { propKey: 'backgroundColor', propValue: 'gray30-T10' } as Atom
      const finalAtom = {
        propKey: 'backgroundColor',
        propValue: 'gray30-T10',
        style: { backgroundColor: 'rgba(51,51,51,0.9)' },
      } as Atom
      expect(handleAtom!(atom, parser)).toMatchObject(finalAtom)
    })

    it('<View backgroundColor="#000-T10"></View>', () => {
      const atom = { propKey: 'backgroundColor', propValue: '#000-T10' } as Atom
      const finalAtom = {
        propKey: 'backgroundColor',
        propValue: '#000-T10',
        style: { backgroundColor: 'rgba(0,0,0,0.9)' },
      } as Atom
      expect(handleAtom!(atom, parser)).toMatchObject(finalAtom)
    })
  })
})
