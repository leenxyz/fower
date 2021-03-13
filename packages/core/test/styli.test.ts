import { styli } from '../src'
import { StyliPlugin } from '@styli/types'

const config = {
  unit: 'px',
  plugins: [],
  theme: {
    colors: {
      gray30: '#333',
    },
  } as any,
}

describe('styli-core', () => {
  styli.configure(() => config)

  it('getTheme', () => {
    expect(styli.getTheme()).toMatchObject({ colors: { gray30: '#333' } })
    expect(styli.getTheme('colors')).toMatchObject({ gray30: '#333' })
  })

  it('getColors', () => {
    expect(styli.getColors()).toMatchObject({ gray30: '#333' })
  })

  it('getConfig', () => {
    expect(styli.getConfig()).toMatchObject(config)
    expect(styli.getConfig('unit')).toEqual('px')
  })

  it('getValue', () => {
    expect(styli.getValue('100')).toEqual('100px')
  })

  it('isStyliColor', () => {
    expect(styli.isStyliColor('gray30')).toBeTruthy()
    expect(styli.isStyliColor('gray30-T10')).toBeTruthy()
  })

  it('getStyliColorValue', () => {
    expect(styli.getStyliColorValue('gray30')).toEqual('#333333')
    expect(styli.getStyliColorValue('gray30-T10')).toEqual('rgba(51,51,51,0.9)')
    expect(styli.getStyliColorValue('gray30-O10')).toEqual('#333333')
    expect(styli.getStyliColorValue('gray30-D10')).toEqual('#191919')
    expect(styli.getStyliColorValue('gray30-L10')).toEqual('#4d4d4d')
  })

  it('use', () => {
    const plugin: StyliPlugin = {
      name: 'styli-plugin-test',
      isMatch(key: string) {
        return key === 'test'
      },
      onAtomStyleCreate(atom = {} as any) {
        return atom
      },
    }
    styli.use(plugin)
    expect(styli.getConfig('plugins')).toMatchObject([plugin])
  })
})
