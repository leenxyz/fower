import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'
import './config'

describe('bgSize', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('backgroundSize')).toEqual(true)
  })

  describe('handleAtom', () => {
    it('<View backgroundSize="100% 100%"></View>', () => {
      const atom = new Atom({
        propKey: 'backgroundSize',
        propValue: '100% 100%',
      })
      const finalAtom = new Atom({
        propKey: 'backgroundSize',
        propValue: '100% 100%',
        style: { backgroundSize: '100% 100%' },
      })
      expect(handleAtom!(atom, parser)).toMatchObject(finalAtom)
    })
  })
})
