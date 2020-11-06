import {
  isEqual,
  upFirst,
  downFirst,
  kebab,
  isNumber,
  isValidPropValue,
  isEmptyObj,
  hexToRgba,
  isPercentNumber,
  cssKeyToStyleKey,
  isPlainType,
  getCssObjectPaths,
  mergeCssObjectPaths,
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

  it('hexToRgba', () => {
    expect(hexToRgba('#FFF')).toEqual('rgba(255,255,255,1)')
    expect(hexToRgba('#000', '78')).toEqual('rgba(0,0,0,.78)')
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

  const css = {
    border: '1px solid',
    color: 'red',
    '.button': {
      fontSize: '12px',
      display: 'block',
    },
  }

  const paths = [
    [{ border: '1px solid' }],
    [{ color: 'red' }],
    ['.button', { 'font-size': '12px' }],
    ['.button', { display: 'block' }],
  ]

  const mergedPaths = [
    {
      key: '',
      value: {
        border: '1px solid',
        color: 'red',
      },
    },
    {
      key: '.button',
      value: {
        'font-size': '12px',
        display: 'block',
      },
    },
  ]

  it('getCssObjectPaths', () => {
    expect(getCssObjectPaths(css)).toEqual(paths)
  })

  it('mergeCssObjectPaths', () => {
    expect(mergeCssObjectPaths(paths)).toEqual(mergedPaths)
  })
})
