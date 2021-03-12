import { Atom, SheetType } from '@styli/types'
import plugin from '../src'
import './config'

describe('bgImg', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('bgColor')).toEqual(true)
    expect(isMatch!('backgroundImage')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    it('<View bgImg="https://www.baidu.com"></View>', () => {
      const atom = { propKey: 'bgImg', propValue: 'https://www.baidu.com' } as Atom
      const finalAtom = { propKey: 'bgImg', propValue: 'https://www.baidu.com', style: { backgroundImage: 'url("https://www.baidu.com")' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })

    it('<View backgroundImage="https://www.baidu.com"></View>', () => {
      const atom = { propKey: 'backgroundImage', propValue: 'https://www.baidu.com' } as Atom
      const finalAtom = { propKey: 'backgroundImage', propValue: 'https://www.baidu.com', style: { backgroundImage: 'url("https://www.baidu.com")' } } as Atom
      expect(onAtomStyleCreate!(atom, sheet)).toMatchObject(finalAtom)
    })
  })
})
