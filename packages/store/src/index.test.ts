import { FowerPlugin } from '@fower/types'
import deepmerge from 'deepmerge'
import { store } from '.'

const config = {
  unit: 'px',
  plugins: [],
  theme: {
    colors: {
      gray30: '#333',
    },
  } as any,
}

beforeEach(() => {
  store.setConfig(config)
})

describe('setConfig', () => {
  store.setConfig(config, 'replace')

  test('setConfig() with default strategy', () => {
    store.setConfig({ inline: false })
    expect(JSON.stringify(store.config)).toEqual(
      JSON.stringify(deepmerge(config, { inline: false })),
    )
  })

  test('setConfig() with merge strategy', () => {
    store.setConfig({ inline: false }, 'merge')
    expect(JSON.stringify(store.config)).toEqual(JSON.stringify({ ...config, inline: false }))
  })

  test('setConfig() with replace strategy', () => {
    store.setConfig({ inline: true }, 'replace')
    expect(store.config).toMatchObject({ inline: true })
  })
})

test('get theme()', () => {
  expect(store.theme).toMatchObject(store.config.theme)
})

test('getTheme', () => {
  expect(store.getTheme()).toMatchObject({ colors: { gray30: '#333' } })
  expect(store.getTheme().colors).toMatchObject({ gray30: '#333' })
})

test('setTheme', () => {
  const brand100Value = '#f0c'
  store.setTheme({
    colors: {
      brand100: brand100Value,
    },
  })
  const brand100 = (store.getTheme().colors as any)['brand100']
  expect(brand100).toEqual(brand100Value)
})

test('use()', () => {
  const plugin: FowerPlugin = {
    isMatch(key: string) {
      return key === 'test'
    },
    handleAtom(atom = {} as any) {
      return atom
    },
  }
  store.use(plugin)
  expect(store.config.plugins).toMatchObject([plugin])
})

describe('addAtom()', () => {
  test('with string matcher', () => {
    const { isMatch } = store.addAtom('textBody', {
      fontSize: 30,
    })

    expect(store.config.plugins.length).toBe(2)
    expect(isMatch!('textBody')).toBeTruthy()
    expect(isMatch!('foo')).toBeFalsy()
    expect(isMatch!(100 as any)).toBeFalsy()
  })

  test('with regex matcher', () => {
    const { isMatch } = store.addAtom(/textBody/, {
      fontSize: 30,
    })

    expect(store.config.plugins.length).toBe(3)
    expect(isMatch!('textBody')).toBeTruthy()
    expect(isMatch!('foo')).toBeFalsy()
    expect(isMatch!(false as any)).toBeFalsy()
  })
})
