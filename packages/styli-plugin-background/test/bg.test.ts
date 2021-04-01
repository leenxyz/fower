import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'
import './config'

describe('bg', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('bg')).toEqual(true)
  })

  describe('handleAtom', () => {
    it('<View bg="gray300"></View>', () => {
      const atom = new Atom({
        propKey: 'bg',
        propValue: 'gray300',
      })
      const finalAtom = new Atom({
        propKey: 'bg',
        propValue: 'gray300',
        style: { backgroundColor: 'gray300' },
      })
      expect(handleAtom!(atom, parser)).toMatchObject(finalAtom)
    })

    it.only('<View bg="gray300--T10"></View>', () => {
      const atom = new Atom({
        propKey: 'bg',
        propValue: 'gray300--T10',
      })
      const finalAtom = new Atom({
        propKey: 'bg',
        propValue: 'gray300--T10',
        style: { backgroundColor: 'gray300--T10' },
      })
      expect(handleAtom!(atom, parser)).toMatchObject(finalAtom)
    })
  })
})
