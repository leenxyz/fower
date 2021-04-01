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
  styli.configure(config)

  it('getTheme', () => {
    expect(styli.getTheme()).toMatchObject({ colors: { gray30: '#333' } })
    expect(styli.getTheme().colors).toMatchObject({ gray30: '#333' })
  })

  it('getColors', () => {
    expect(styli.getColors()).toMatchObject({ gray30: '#333' })
  })

  it('use', () => {
    const plugin: StyliPlugin = {
      isMatch(key: string) {
        return key === 'test'
      },
      handleAtom(atom = {} as any) {
        return atom
      },
    }
    styli.use(plugin)
    expect(styli.config.plugins).toMatchObject([plugin])
  })
})
