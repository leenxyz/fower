import {
  isEqual,
  upFirst,
  downFirst,
  kebab,
  isNumber,
  isValidPropValue,
  isEmptyObj,
  isPercentNumber,
  jsKeyToCssKey,
  isPlainType,
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

  it('isPercentNumber', () => {
    expect(isPercentNumber('10p')).toEqual(true)
  })

  it('jsKeyToCssKey', () => {
    expect(jsKeyToCssKey('WebkitLineClamp')).toEqual('-webkit-line-clamp')
    expect(jsKeyToCssKey('lineHeight')).toEqual('line-height')
  })

  it('isPlainType', () => {
    expect(isPlainType(1)).toEqual(true)
    expect(isPlainType(true)).toEqual(true)
    expect(isPlainType('10p')).toEqual(true)
    expect(isPlainType(null)).toEqual(false)
    expect(isPlainType(new Date())).toEqual(false)
  })
})
