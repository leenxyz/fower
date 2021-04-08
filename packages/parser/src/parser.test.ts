import { configure } from '@styli/core'
import { presetWeb } from '@styli/preset-web'
import { Parser } from './parser'

beforeAll(() => {
  configure(presetWeb)
})

test('test props: {p4: true}', () => {
  const props = { p4: true }
  const parser = new Parser(props)

  expect(parser.atoms.length).toBe(1)
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
