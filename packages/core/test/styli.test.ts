import { StyliPlugin } from '@styli/types'
import { deepmerge } from '@styli/utils'
import { styli } from '../src'

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
  styli.configure(config)
})

describe('configure', () => {
  styli.configure(config, 'replace')

  test('configure() with default strategy', () => {
    styli.configure({ inline: false })
    expect(JSON.stringify(styli.config)).toEqual(
      JSON.stringify(deepmerge(config, { inline: false })),
    )
  })

  test('configure() with merge strategy', () => {
    styli.configure({ inline: false }, 'merge')
    expect(JSON.stringify(styli.config)).toEqual(JSON.stringify({ ...config, inline: false }))
  })

  test('configure() with replace strategy', () => {
    styli.configure({ inline: true }, 'replace')
    expect(styli.config).toMatchObject({ inline: true })
  })
})

test('getTheme', () => {
  expect(styli.getTheme()).toMatchObject({ colors: { gray30: '#333' } })
  expect(styli.getTheme().colors).toMatchObject({ gray30: '#333' })
})

test('setTheme', () => {
  const brand100Value = '#f0c'
  styli.setTheme({
    colors: {
      brand100: brand100Value,
    },
  })
  const brand100 = (styli.getTheme().colors as any)['brand100']
  expect(brand100).toEqual(brand100Value)
})

test('getColors(', () => {
  expect(styli.getColors()).toMatchObject({ gray30: '#333' })
})

test('use()', () => {
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

describe('registerAtomicProps()', () => {
  test('with string matcher', () => {
    const { isMatch } = styli.registerAtomicProps('textBody', {
      fontSize: 30,
    })

    expect(styli.config.plugins.length).toBe(2)
    expect(isMatch!('textBody')).toBeTruthy()
    expect(isMatch!('foo')).toBeFalsy()
    expect(isMatch!(100 as any)).toBeFalsy()
  })

  test('with regex matcher', () => {
    const { isMatch } = styli.registerAtomicProps(/textBody/, {
      fontSize: 30,
    })

    expect(styli.config.plugins.length).toBe(3)
    expect(isMatch!('textBody')).toBeTruthy()
    expect(isMatch!('foo')).toBeFalsy()
    expect(isMatch!(false as any)).toBeFalsy()
  })
})
