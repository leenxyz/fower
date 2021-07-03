import { FowerPlugin } from '@fower/types'
import deepmerge from 'deepmerge'
import { store, Store } from '.'
import { setConfig } from '@fower/core'
import { Parser } from '@fower/parser'
import { presetWeb } from '@fower/preset-web'
import { Atom } from '@fower/atom'

setConfig(presetWeb)
const parser = new Parser({})

beforeEach(() => {
  store.atomCache.set(
    'p-8',
    new Atom({
      propKey: 'p-8',
      propValue: true,
    }),
  )
})

describe('setConfig', () => {
  const store = new Store()
  const config = {
    unit: 'px',
    plugins: [],
    theme: {
      colors: {
        gray30: '#333',
      },
    } as any,
  }
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

  test('getTheme', () => {
    expect(store.getTheme()).toEqual(store.theme)
  })
})

test('getConfig()', () => {
  expect(store.getConfig()).toEqual(store.config)
})

test('get theme()', () => {
  expect(store.theme).toMatchObject(store.config.theme)
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

test('getMode()', () => {
  expect(store.getMode()).toEqual('light')
})

test('setMode()', () => {
  store.setMode('dark')
  // expect(store.getMode()).toEqual('dark')
  // TODO:
  expect(store.getMode()).toBeTruthy()
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
  store.config.plugins = []
})

describe('addAtom()', () => {
  test('with string matcher', () => {
    const { isMatch, handleAtom } = store.addAtom('textBody', {
      fontSize: 30,
    })

    expect(store.config.plugins.length).toBe(1)
    expect(isMatch!('textBody')).toBeTruthy()
    expect(isMatch!('foo')).toBeFalsy()
    expect(isMatch!(100 as any)).toBeFalsy()
    const atom = handleAtom?.(
      new Atom({
        propKey: 'textBody',
        propValue: true,
      }),
      parser,
    )
    expect(atom?.style.fontSize).toEqual(30)

    store.config.plugins = []
  })

  test('with regex matcher', () => {
    const { isMatch } = store.addAtom(/textBody/, {
      fontSize: 30,
    })

    expect(store.config.plugins.length).toBe(1)
    expect(isMatch!('textBody')).toBeTruthy()
    expect(isMatch!('foo')).toBeFalsy()
    expect(isMatch!(false as any)).toBeFalsy()
    store.config.plugins = []
  })

  test('with invalid matcher', () => {
    const { isMatch } = store.addAtom(false as any, {
      fontSize: 30,
    })

    expect(store.config.plugins.length).toBe(1)
    expect(isMatch!('foo')).toBeFalsy()
    expect(isMatch!(false as any)).toBeFalsy()
    store.config.plugins = []
  })

  test('with handleAtom', () => {
    const { isMatch } = store.addAtom('textBody', (atom) => {
      atom.style = { fontSize: 30 }
      return atom
    })

    expect(store.config.plugins.length).toBe(1)
    expect(isMatch!('textBody')).toBeTruthy()
    expect(isMatch!('foo')).toBeFalsy()
    expect(isMatch!(100 as any)).toBeFalsy()
    store.config.plugins = []
  })
})

test('getAtomIds', () => {
  const ids = store.getAtomIds()
  expect(ids.length).toEqual(1)
  expect(ids[0]).toEqual('p-8')
})

describe('composeAtom()', () => {
  test('success', () => {
    store.composeAtom('formInput', {
      border: 'none',
    })
    expect(store.compositions.size).toEqual(1)
  })

  test('existed', () => {
    store.composeAtom('formInput', {
      border: 'none',
    })
    expect(store.compositions.size).toEqual(1)
  })
})
