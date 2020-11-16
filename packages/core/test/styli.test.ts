import { styli } from '../src'

describe('styli-core', () => {
  styli.configure({
    unit: 'px',
    plugins: [],
    theme: {
      colors: {
        red: 'blue',
      },
    } as any,
  })

  it('getTheme', () => {
    expect(styli.getTheme()).toMatchObject({ colors: { red: 'blue' } })
    expect(styli.getTheme('colors')).toMatchObject({ red: 'blue' })
  })

  it('getColors', () => {
    expect(styli.getColors()).toMatchObject({ red: 'blue' })
  })

  it('getConfig', () => {
    expect(styli.getConfig()).toMatchObject({
      unit: 'px',
      plugins: [],
      theme: {
        colors: {
          red: 'blue',
        },
      },
    })

    expect(styli.getConfig('unit')).toEqual('px')
  })

  it('use', () => {
    const plugin = {
      name: 'styli-plugin-test',
      isMatch(key: string) {
        return key === 'test'
      },
      onVisitProp(atom = {} as any) {
        return atom
      },
    }
    styli.use(plugin)
    expect(styli.getPlugins()).toEqual([[], [plugin]])
  })
})
