import { setConfig } from '../src'
import { store } from '../src/store'
import { Atom } from '../src/atom'
import { presetWeb } from '@fower/preset-web'
import { Parser } from '../src/parser'

const atomCache = store.atomCache

beforeAll(() => {
  setConfig(presetWeb)
  setConfig({
    mode: {
      autoDarkMode: {
        enabled: true,
        mappings: {
          red800: '#fc0',
        },
      },
    },
  })
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

test('test props with className', () => {
  const props = { className: 'p4' }
  const parser = new Parser(props)

  expect(parser.atoms.length).toBe(1)
  expect(parser.atoms[0].id).toEqual('p-16')
})

test('test props with with pseudo like _hover, _focus', () => {
  const props = { _hover: { p: 4 } }
  const parser = new Parser(props)
  const [atom] = parser.atoms
  expect(parser.atoms.length).toBe(1)
  expect(atom.id).toEqual('p-4--hover')
  expect(atom.style.padding).toEqual(4)
  expect(atom.meta.pseudo).toEqual('hover')
  expect(atom.meta.pseudoPrefix).toEqual(':')
})

test('test props with with mode like _dark', () => {
  const props = { _dark: ['red300'] }
  const parser = new Parser(props)
  const [atom] = parser.atoms
  expect(parser.atoms.length).toBe(1)
  expect(atom.id).toEqual('red300--dark')
  expect(atom.style.color).toEqual('red300')
  expect(atom.meta.mode).toEqual('dark')
})

test('test props with with responsive key like _md', () => {
  const props = { _md: ['w-100', 'h-100'] }
  const parser = new Parser(props)
  expect(parser.atoms.length).toBe(2)
  const [atom1, atom2] = parser.atoms

  expect(atom1.id).toEqual('w-100--768px')
  expect(atom1.style.width).toEqual('100')
  expect(atom1.meta.breakpoint).toEqual('768px')

  expect(atom2.id).toEqual('h-100--768px')
  expect(atom2.style.height).toEqual('100')
  expect(atom2.meta.breakpoint).toEqual('768px')
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
  expect(parser.isValidProp('p', [])).toBeTruthy()
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

  // setConfig({
  //   transformUnit(value: any) {
  //     return value + 'rem'
  //   },
  // })
  // expect(parser.formatCssValue('width', 10)).toBe('10rem')

  // setConfig({
  //   unit: 'none',
  // })
  // expect(parser.formatCssValue('width', 10)).toBe(10)
})

test('composition props', () => {
  store.composeAtom('formInput', {
    p: 10,
  })
  const { atoms } = new Parser({
    formInput: true,
  })

  expect(atoms.length).toEqual(2)
  expect(atoms[0].id).toEqual('p-10')
  expect(atoms[0].style.padding).toEqual(10)
  expect(atoms[1].id).toEqual('formInput')
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

  const style = parser.makeResponsiveStyle('sm', 'width: 10px;')
  const result = `@media (min-width: 640px) {width: 10px;}`

  expect(style).toBe(result)
})

test('mutateAtom(), cachedAtom should throw', () => {
  const parser = new Parser({})
  const atom = new Atom({ propKey: 'p1', propValue: true })
  atomCache.set(atom.id, atom)

  expect(atom.id).toEqual('p-4')
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
  expect(atom.id).toEqual('p-50')
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
  expect(atom.id).toEqual('p-50')
  expect(atom.style.padding).toEqual('50')
  expect(parser.atoms.length).toEqual(0)
})

describe('getClassNames()', () => {
  test('normal', () => {
    const parser = new Parser({ p1: true, m1: true })
    const classNames = parser.getClassNames()
    expect(classNames).toMatchObject(['p-4', 'm-4'])
  })

  test('with override style', () => {
    const parser = new Parser({ p1: true, p2: true, m1: true, m2: true })
    const classNames = parser.getClassNames()
    expect(classNames).toMatchObject(['p-8', 'm-8'])
  })

  test('with pseudo', () => {
    const parser = new Parser({ p1: true, 'p2--hover': true })
    const classNames = parser.getClassNames()
    expect(classNames).toMatchObject(['p-4', 'p-8--hover'])
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
    expect(rules).toMatchObject(['.p-4 { padding: 4px; }', '.m-4 { margin: 4px; }'])
  })

  test('with pseudo', () => {
    const parser = new Parser({ 'p1--hover': true })
    const rules = parser.toRules()
    expect(parser.atoms.length).toEqual(1)
    expect(rules).toMatchObject(['.p-4--hover:hover { padding: 4px; }'])
  })

  test('with group pseudo', () => {
    const parser = new Parser({ 'p1--$group--hover': true })
    const rules = parser.toRules()
    expect(parser.atoms.length).toEqual(1)
    expect(rules).toMatchObject(['.group:hover .p-4--group--hover { padding: 4px; }'])
  })
})

describe('css prop', () => {
  test('parseCSSProp() with atomic prop', () => {
    const value = { p1: true }
    const parser = new Parser({ css: value })
    expect(parser.atoms[0]).toMatchObject({
      value: 4,
      id: 'p-4',
      propKey: 'p1',
      propValue: true,
      key: 'p',
      style: { padding: 4 },
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
    expect(atom.id).toEqual('backgroundColor-red')
  })

  test('parseCSSProp() with pseudo', () => {
    const parser = new Parser({
      css: { ':hover': { backgroundColor: '#fff' } },
    })
    const [atom] = parser.atoms
    expect(parser.atoms.length).toEqual(1)
    expect(atom.meta.pseudo).toEqual('hover')
    expect(atom.meta.pseudoPrefix).toEqual(':')
  })

  test('parseCSSProp() with child selector', () => {
    const parser = new Parser({
      css: { '.foo': { backgroundColor: '#fff' } },
    })
    const [atom] = parser.atoms
    expect(parser.atoms.length).toEqual(1)
    expect(atom.meta.childSelector).toEqual('.foo') // TODO:
  })

  test('parseCSSProp() with cached atom', () => {
    const atom = new Atom({ propKey: 'p1', propValue: true })
    atomCache.set('p1', new Atom({ propKey: 'p1', propValue: true }))
    const value = { p1: true }
    const parser = new Parser({ css: value })

    expect(() => parser.mutateAtom(new Atom({ propKey: 'p1', propValue: true }))).toThrow()
    expect(parser.atoms[0].id).toEqual(atom.id)
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
  parser.insertRules()
  expect(1).toBeTruthy() // TODO:
})

describe('Auto dark mode', () => {
  test('color', () => {
    const props = { green200: true }
    const parser = new Parser(props)
    const [atom1, atom2] = parser.atoms

    expect(parser.atoms.length).toBe(2)

    expect(atom1.id).toEqual('green200')
    expect(atom1.style.color).toEqual('green200')
    expect(atom1.meta.mode).toBeFalsy()

    expect(atom2.id).toEqual('green700--dark')
    expect(atom2.style.color).toEqual('green700')
    expect(atom2.meta.mode).toEqual('dark')
  })

  test('background color', () => {
    const props = { bgGreen200: true }
    const parser = new Parser(props)
    const [atom1, atom2] = parser.atoms

    expect(parser.atoms.length).toBe(2)

    expect(atom1.id).toEqual('bgGreen200')
    expect(atom1.style.backgroundColor).toEqual('green200')
    expect(atom1.meta.mode).toBeFalsy()

    expect(atom2.id).toEqual('bgGreen700--dark')
    expect(atom2.style.backgroundColor).toEqual('green700')
    expect(atom2.meta.mode).toEqual('dark')
  })

  test('border color', () => {
    const props = { borderGreen200: true }
    const parser = new Parser(props)
    const [atom1, atom2] = parser.atoms

    expect(parser.atoms.length).toBe(2)

    expect(atom1.id).toEqual('borderGreen200')
    expect(atom1.style.borderColor).toEqual('green200')
    expect(atom1.meta.mode).toBeFalsy()

    expect(atom2.id).toEqual('borderGreen700--dark')
    expect(atom2.style.borderColor).toEqual('green700')
    expect(atom2.meta.mode).toEqual('dark')
  })

  test('color with custo mapping', () => {
    const props = { red800: true }
    const parser = new Parser(props)
    const [atom1, atom2] = parser.atoms

    expect(parser.atoms.length).toBe(2)

    expect(atom1.id).toEqual('red800')
    expect(atom1.style.color).toEqual('red800')
    expect(atom1.meta.mode).toBeFalsy()

    expect(atom2.id).toEqual('color-fc0--dark')
    expect(atom2.propKey).toEqual('color')
    expect(atom2.propValue).toEqual('#fc0')
    expect(atom2.style.color).toEqual('#fc0')
    expect(atom2.meta.mode).toEqual('dark')
  })

  test('background color with custo mapping', () => {
    const props = { bgRed800: true }
    const parser = new Parser(props)
    const [atom1, atom2] = parser.atoms

    expect(parser.atoms.length).toBe(2)

    expect(atom1.id).toEqual('bgRed800')
    expect(atom1.style.backgroundColor).toEqual('red800')
    expect(atom1.meta.mode).toBeFalsy()

    expect(atom2.id).toEqual('bg-fc0--dark')
    expect(atom2.propKey).toEqual('bg')
    expect(atom2.propValue).toEqual('#fc0')
    expect(atom2.style.backgroundColor).toEqual('#fc0')
    expect(atom2.meta.mode).toEqual('dark')
  })

  test('border color with custo mapping', () => {
    const props = { borderRed800: true }
    const parser = new Parser(props)
    const [atom1, atom2] = parser.atoms

    expect(parser.atoms.length).toBe(2)

    expect(atom1.id).toEqual('borderRed800')
    expect(atom1.style.borderColor).toEqual('red800')
    expect(atom1.meta.mode).toBeFalsy()

    expect(atom2.id).toEqual('borderColor-fc0--dark')
    expect(atom2.propKey).toEqual('borderColor')
    expect(atom2.propValue).toEqual('#fc0')
    expect(atom2.style.borderColor).toEqual('#fc0')
    expect(atom2.meta.mode).toEqual('dark')
  })
})
