import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'
import './config'

describe('bgRepeat', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('backgroundRepeat')).toEqual(true)
  })

  describe('handleAtom', () => {
    it('<View backgroundRepeat="no-repeat"></View>', () => {
      const atom = new Atom({
        propKey: 'backgroundRepeat',
        propValue: 'no-repeat',
      })
      const finalAtom = new Atom({
        propKey: 'backgroundRepeat',
        propValue: 'no-repeat',
        style: { backgroundRepeat: 'no-repeat' },
      })
      expect(handleAtom!(atom, parser)).toMatchObject(finalAtom)
    })
  })
})
