import { styli } from '@styli/core'
import { SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-background', () => {
  styli.configure({
    theme: {
      colors: {
        gray30: '#333',
      },
    } as any,
  })

  const { isMatch, onAtomStyleCreate } = plugin()
  const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('bgImg')).toEqual(true)
    expect(isMatch!('bgPos')).toEqual(true)
    expect(isMatch!('bgSize')).toEqual(true)
    expect(isMatch!('bgRepeat')).toEqual(true)
    expect(isMatch!('bg')).toEqual(true)
    expect(isMatch!('bgColor')).toEqual(true)
    expect(isMatch!('bgGray30')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    it('bg', () => {
      // <View bg="gray30"></View>
      const atom1 = {
        key: 'bg',
        value: 'gray30',
        propKey: 'bg',
        propValue: 'gray30',
        style: {},
        type: 'style' as any,
      }
      const newAtom1 = {
        key: 'bg',
        value: 'gray30',
        propKey: 'bg',
        propValue: 'gray30',
        style: { background: '#333' },
        type: 'style' as any,
      }
      expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)

      // <View bgGray30></View>
      const atom2 = {
        key: 'bgGray30',
        value: true,
        propKey: 'bgGray30',
        propValue: true,
        style: {},
        type: 'style' as any,
      }
      const newAtom2 = {
        key: 'bgGray30',
        value: true,
        propKey: 'bgGray30',
        propValue: true,
        style: { background: '#333' },
        type: 'style' as any,
      }
      expect(onAtomStyleCreate!(atom2, sheet)).toMatchObject(newAtom2)

      // <View bg="url('https://avatars2.githubusercontent.com/u/2668081') center no-repeat"></View>
      const value = "url('https://avatars2.githubusercontent.com/u/2668081') center no-repeat"
      const atom3 = {
        key: 'bg',
        value,
        propKey: 'bg',
        propValue: value,
        style: {},
        type: 'style' as any,
      }
      const newAtom3 = {
        key: 'bg',
        value,
        propKey: 'bg',
        propValue: value,
        style: { background: value },
        type: 'style' as any,
      }
      expect(onAtomStyleCreate!(atom3, sheet)).toMatchObject(newAtom3)
    })

    it('bgColor', () => {
      // <View bgColor="gray30"></View>
      const atom1 = {
        key: 'bgColor',
        value: 'gray30',
        propKey: 'bgColor',
        propValue: 'gray30',
        style: {},
        type: 'style' as any,
      }
      const newAtom1 = {
        key: 'bgColor',
        value: 'gray30',
        propKey: 'bgColor',
        propValue: 'gray30',
        style: { backgroundColor: '#333' },
        type: 'style' as any,
      }
      expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)
    })

    it('bgImg', () => {
      // <View bgImg="https://avatars2.githubusercontent.com/u/2668081"></View>
      const value = 'https://avatars2.githubusercontent.com/u/2668081'
      const atom1 = {
        key: 'bgImg',
        value,
        propKey: 'bgImg',
        propValue: value,
        style: {},
        type: 'style' as any,
      }
      const newAtom1 = {
        key: 'bgImg',
        value,
        propKey: 'bgImg',
        propValue: value,
        style: { backgroundImage: `url("${value}")` },
        type: 'style' as any,
      }
      expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)
    })

    it('bgSize', () => {
      // <View bgSize="100% 100%"></View>
      const atom1 = {
        key: 'bgSize',
        value: '100% 100%',
        propKey: 'bgSize',
        propValue: '100% 100%',
        style: {},
        type: 'style' as any,
      }
      const newAtom1 = {
        key: 'bgSize',
        value: '100% 100%',
        propKey: 'bgSize',
        propValue: '100% 100%',
        style: { backgroundSize: '100% 100%' },
      }
      expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)
    })

    it('bgRepeat', () => {
      // <View bgRepeat="no-repeat"></View>
      const atom1 = {
        key: 'bgRepeat',
        value: 'no-repeat',
        propKey: 'bgRepeat',
        propValue: 'no-repeat',
        style: {},
        type: 'style' as any,
      }
      const newAtom1 = {
        key: 'bgRepeat',
        value: 'no-repeat',
        propKey: 'bgRepeat',
        propValue: 'no-repeat',
        style: {
          backgroundRepeat: 'no-repeat',
        },
        type: 'style' as any,
      }
      expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)
    })

    it('bgPos', () => {
      // <View bgPos="top right"></View>
      const atom1 = {
        key: 'bgPos',
        value: 'top right',
        propKey: 'bgPos',
        propValue: 'top right',
        style: {},
        type: 'style' as any,
      }
      const newAtom1 = {
        key: 'bgPos',
        value: 'top right',
        propKey: 'bgPos',
        propValue: 'top right',
        style: {
          backgroundPosition: 'top right',
        },
        type: 'style' as any,
      }
      expect(onAtomStyleCreate!(atom1, sheet)).toMatchObject(newAtom1)
    })
  })
})
