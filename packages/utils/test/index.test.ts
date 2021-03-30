import {
  upFirst,
  downFirst,
  kebab,
  isNumber,
  isValueProp,
  isEmptyObj,
  isPercentNumber,
  jsKeyToCssKey,
} from '../src'

describe('styli-utils', () => {
  it('upFirst', () => {
    expect(upFirst('abc')).toEqual('Abc')
  })

  it('downFirst', () => {
    expect(downFirst('Abc')).toEqual('abc')
  })

  it.only('kebab', () => {
    expect(kebab('aBc')).toEqual('a-bc')
    expect(kebab('spaceX-1')).toEqual('space-x-1')
    expect(kebab('p0')).toEqual('p0')
  })

  it('isNumber', () => {
    expect(isNumber('123')).toEqual(true)
    expect(isNumber('12.3')).toEqual(true)
  })

  it('isValueProp', () => {
    expect(isValueProp('aBc')).toEqual(true)
    expect(isValueProp(true)).toEqual(false)
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
})
