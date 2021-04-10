import { configure } from '@styli/core'
import { store } from '@styli/store'
import { Atom } from '@styli/atom'
import { presetWeb } from '@styli/preset-web'
import { Parser } from './parser'
import { atomCache } from './cache'

beforeAll(() => {
  configure(presetWeb)
})

beforeEach(() => {
  atomCache.clear()
})

test('test props: {p4: true}', () => {
  const props = { p4: true }
  const parser = new Parser(props)

  expect(parser.atoms.length).toBe(1)
  expect(parser.config).toMatchObject(store.config)
  expect(parser.plugins.length).toBeGreaterThan(0)
  expect(parser.uniqueClassName).toMatch(/^css-.*/)
  expect(parser.hasResponsive).toStrictEqual(false)
})

test('isValidProp()', () => {
  const parser = new Parser({})
  expect(parser.isValidProp('css', {})).toBeTruthy()
  expect(parser.isValidProp('p', 0)).toBeTruthy()
  expect(parser.isValidProp('p', 10)).toBeTruthy()
  expect(parser.isValidProp('p', '10px')).toBeTruthy()
  expect(parser.isValidProp('p', true)).toBeTruthy()
  expect(parser.isValidProp('p', false)).toBeTruthy()
  expect(parser.isValidProp('p', {})).toBeFalsy()
  expect(parser.isValidProp('p', [])).toBeFalsy()
})

test('formatCssValue()', () => {
  const parser = new Parser({})
  expect(parser.formatCssValue('display', 'block')).toBe('block')

  expect(parser.formatCssValue('width', '80p')).toBe('80%')
  expect(parser.formatCssValue('width', '-80p')).toBe('-80%')
  expect(parser.formatCssValue('width', '10px')).toBe('10px')

  expect(parser.formatCssValue('width', 1 / 2)).toBe('50%')
  expect(parser.formatCssValue('width', 1 / 3)).toBe('33.33333333333333%')

  expect(parser.formatCssValue('width', '10')).toBe('10px')
  expect(parser.formatCssValue('width', 10)).toBe('10px')

  // configure({
  //   transformUnit(value: any) {
  //     return value + 'rem'
  //   },
  // })
  // expect(parser.formatCssValue('width', 10)).toBe('10rem')

  // configure({
  //   unit: 'none',
  // })
  // expect(parser.formatCssValue('width', 10)).toBe(10)
})

test('styleObjectToString()', () => {
  const parser = new Parser({})

  expect(parser.styleToString({ width: 10 }, {})).toBe('width: 10px;')

  expect(parser.styleToString({ paddingTop: 10, paddingBottom: 10 }, {})).toBe(
    'padding-top: 10px;padding-bottom: 10px;',
  )

  expect(parser.styleToString({ width: 10 }, { important: true })).toBe('width: 10px !important;')

  expect(parser.styleToString({ color: '#000' }, { colorPostfix: 'T20' })).toBe(
    'color: rgba(0,0,0,0.8);',
  )
})

test('makeResponsiveStyle()', () => {
  const parser = new Parser({})

  const style = parser.makeResponsiveStyle('640px', 'width: 10px;')
  const result = `@media (min-width: 640px) {width: 10px;}`

  expect(style).toBe(result)
})

test('mutateAtom(), cachedAtom should throw', () => {
  const parser = new Parser({})
  const atom = new Atom({ propKey: 'p1', propValue: true })
  atomCache.set(atom.id, atom)

  expect(atom.id).toEqual('p1')
  expect(() => parser.mutateAtom(atom)).toThrow()
  expect(parser.atoms.length).toEqual(1)
})

test('mutateAtom(), atom.handled should throw', () => {
  const parser = new Parser({})
  const atom = new Atom({
    propKey: 'p-100',
    propValue: true,
    handled: true,
  })

  expect(() => parser.mutateAtom(atom)).toThrow()
  expect(parser.atoms.length).toEqual(1)
})

test('mutateAtom(), atom should match a plugin', () => {
  const parser = new Parser({})
  const atom = new Atom({
    propKey: 'p-50',
    propValue: true,
  })
  parser.mutateAtom(atom)
  expect(atom.handled).toBeTruthy()
  expect(atom.key).toEqual('p')
  expect(atom.value).toEqual('50')
  expect(atom.className).toEqual('p-50')
  expect(atom.style.padding).toEqual('50')
  expect(parser.atoms.length).toEqual(0)
})

test('mutateAtom(), atom should match a plugin', () => {
  const parser = new Parser({})
  const atom = new Atom({
    propKey: 'p-50',
    propValue: true,
  })
  parser.mutateAtom(atom)
  expect(atom.handled).toBeTruthy()
  expect(atom.key).toEqual('p')
  expect(atom.value).toEqual('50')
  expect(atom.className).toEqual('p-50')
  expect(atom.style.padding).toEqual('50')
  expect(parser.atoms.length).toEqual(0)
})

describe('getClassNames()', () => {
  test('no extraClassName', () => {
    const parser = new Parser({ p1: true, m1: true })
    const classNames = parser.getClassNames()
    expect(classNames).toMatchObject(['p1', 'm1'])
  })

  test('with extraClassName', () => {
    const parser = new Parser({ p1: true, m1: true })
    const classNames = parser.getClassNames('extra')
    expect(classNames).toMatchObject(['p1', 'm1', 'extra'])
  })

  test('with override style', () => {
    const parser = new Parser({ p1: true, p2: true, m1: true, m2: true })
    const classNames = parser.getClassNames()
    expect(classNames).toMatchObject(['p2', 'm2'])
  })

  test('with pseudo', () => {
    const parser = new Parser({ p1: true, 'p2--hover': true })
    const classNames = parser.getClassNames()
    expect(classNames).toMatchObject(['p1', 'p2--hover'])
  })
})

describe('toStyle()', () => {
  test('all valid atom', () => {
    const parser = new Parser({ p1: true, m1: true })
    const style = parser.toStyle()
    expect(parser.atoms.length).toEqual(2)
    expect(style).toMatchObject({ padding: '4px', margin: '4px' })
  })
})

describe('toRules()', () => {
  test('all valid atom', () => {
    const parser = new Parser({ p1: true, m1: true })
    const rules = parser.toRules()
    expect(parser.atoms.length).toEqual(2)
    expect(rules).toMatchObject(['.p1 { padding: 4px; }', '.m1 { margin: 4px; }'])
  })
})

describe('css prop', () => {
  test('parseCSSProp() with atomic prop', () => {
    const value = { p1: true }
    const parser = new Parser({ css: value })
    expect(parser.atoms[0]).toMatchObject({
      value: 4,
      id: 'p1',
      propKey: 'p1',
      propValue: true,
      key: 'p',
      style: { padding: 4 },
      className: 'p1',
      handled: true,
      isValid: true,
      inserted: false,
      meta: {},
    })
  })

  test('parseCSSProp() with normal style', () => {
    const value = { backgroundColor: 'red' }
    const parser = new Parser({ css: value })
    const [atom] = parser.atoms
    expect(parser.atoms.length).toEqual(1)
    expect(atom.className).toMatch(/^css-/)
  })

  test('parseCSSProp() with pseudo', () => {
    const parser = new Parser({
      css: { ':hover': { backgroundColor: '#fff' } },
    })
    const [atom] = parser.atoms
    expect(parser.atoms.length).toEqual(1)
    expect(atom.meta.pseudo).toEqual(':hover')
  })

  test('parseCSSProp() with child selector', () => {
    const parser = new Parser({
      css: { '.foo': { backgroundColor: '#fff' } },
    })
    const [atom] = parser.atoms
    expect(parser.atoms.length).toEqual(1)
    expect(atom.meta.childSelector).toEqual(' .foo') // TODO:
  })

  test('parseCSSProp() with cached atom', () => {
    const atom = new Atom({ propKey: 'p1', propValue: true })
    atomCache.set('p1', new Atom({ propKey: 'p1', propValue: true }))
    const value = { p1: true }
    const parser = new Parser({ css: value })

    expect(() => parser.mutateAtom(new Atom({ propKey: 'p1', propValue: true }))).toThrow()
    expect(parser.atoms[0]).toMatchObject(atom)
  })
})

test('getParsedProps()', () => {
  const parser = new Parser({
    children: 'foo',
    css: {},
    p1: true,
    m1: true,
  })
  const props = parser.getParsedProps()
  expect(props).toMatchObject({
    children: 'foo',
  })
})

test('insertRule()', () => {
  const parser = new Parser({
    children: 'foo',
    css: {},
    p1: true,
    m1: true,
  })
  parser.insertRule()
  expect(1).toBeTruthy() // TODO:
})
