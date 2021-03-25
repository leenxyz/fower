import {
  isEqual,
  upFirst,
  downFirst,
  kebab,
  isNumber,
  isValidPropValue,
  isEmptyObj,
  isPercentNumber,
  cssKeyToStyleKey,
  isPlainType,
  formatColor,
} from '../src'

describe('styli-utils', () => {
  it('isEqual', () => {
    expect(isEqual({ a: 1 }, { a: 1 })).toEqual(true)
    expect(isEqual({ a: 1 }, { b: 1 })).toEqual(false)
  })

  it('upFirst', () => {
    expect(upFirst('abc')).toEqual('Abc')
  })

  it('downFirst', () => {
    expect(downFirst('Abc')).toEqual('abc')
  })

  it('kebab', () => {
    expect(kebab('aBc')).toEqual('a-bc')
  })

  it('isNumber', () => {
    expect(isNumber('123')).toEqual(true)
    expect(isNumber('12.3')).toEqual(true)
  })

  it('isValidPropValue', () => {
    expect(isValidPropValue('aBc')).toEqual(true)
    expect(isValidPropValue(true)).toEqual(false)
  })

  it('isEmptyObj', () => {
    expect(isEmptyObj({})).toEqual(true)
    expect(isEmptyObj(null)).toEqual(true)
  })

  it('formatColor', () => {
    expect(formatColor('#000-T10')).toEqual('rgba(0,0,0,0.9)')
    expect(formatColor('#000000-T10')).toEqual('rgba(0,0,0,0.9)')
    expect(formatColor('#000', 'T10')).toEqual('rgba(0,0,0,0.9)')
    expect(formatColor('#000000', 'T10')).toEqual('rgba(0,0,0,0.9)')
    expect(formatColor('url(https://www.baidu.com)')).toEqual('url(https://www.baidu.com)')
  })

  it('isPercentNumber', () => {
    expect(isPercentNumber('10p')).toEqual(true)
  })

  it('cssKeyToStyleKey', () => {
    expect(cssKeyToStyleKey('WebkitLineClamp')).toEqual('-webkit-line-clamp')
    expect(cssKeyToStyleKey('lineHeight')).toEqual('line-height')
  })

  it('isPlainType', () => {
    expect(isPlainType(1)).toEqual(true)
    expect(isPlainType(true)).toEqual(true)
    expect(isPlainType('10p')).toEqual(true)
    expect(isPlainType(null)).toEqual(false)
    expect(isPlainType(new Date())).toEqual(false)
  })
})
