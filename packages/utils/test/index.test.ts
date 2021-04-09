import {
  upFirst,
  downFirst,
  kebab,
  isNumber,
  isEmptyObj,
  isPercentNumber,
  jsKeyToCssKey,
} from '../src'

describe('styli-utils', () => {
  test('upFirst', () => {
    expect(upFirst('abc')).toEqual('Abc')
  })

  test('downFirst', () => {
    expect(downFirst('Abc')).toEqual('abc')
  })

  test('kebab', () => {
    expect(kebab('aBc')).toEqual('a-bc')
    expect(kebab('spaceX-1')).toEqual('space-x-1')
    expect(kebab('p0')).toEqual('p0')
  })

  test('isNumber', () => {
    expect(isNumber('123')).toEqual(true)
    expect(isNumber('12.3')).toEqual(true)
  })

  test('isEmptyObj', () => {
    expect(isEmptyObj({})).toEqual(true)
    expect(isEmptyObj(null)).toEqual(true)
  })

  test('isPercentNumber', () => {
    expect(isPercentNumber('10p')).toEqual(true)
  })

  test('jsKeyToCssKey', () => {
    expect(jsKeyToCssKey('WebkitLineClamp')).toEqual('-webkit-line-clamp')
    expect(jsKeyToCssKey('lineHeight')).toEqual('line-height')
  })
})
