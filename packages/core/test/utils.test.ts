import { styli } from '../src/styli'
import {
  isNumber,
  upFirst,
  downFirst,
  kebab,
  isValidPropValue,
  getValue,
  elementType,
} from '../src/utils'

describe('utils', () => {
  it('isNumber', () => {
    expect(isNumber('10')).toEqual(true)
    expect(isNumber('0')).toEqual(true)
    expect(isNumber(10)).toEqual(true)
    expect(isNumber(0)).toEqual(true)
  })
  it('upFirst', () => {
    expect(upFirst('aaabbb')).toEqual('Aaabbb')
    expect(upFirst('AAAbbb')).toEqual('AAAbbb')
  })
  it('downFirst', () => {
    expect(downFirst('Aaabbb')).toEqual('aaabbb')
    expect(downFirst('aaabbb')).toEqual('aaabbb')
  })
  it('kebab', () => {
    expect(kebab('fontWeight')).toEqual('font-weight')
  })
  it('isValidPropValue', () => {
    expect(isValidPropValue(true)).toEqual(false)
    expect(isValidPropValue('1')).toEqual(true)
    expect(isValidPropValue(1)).toEqual(true)
  })
  it('getValue', () => {
    styli.config({
      transformUnit(value) {
        if (typeof value === 'string') return value
        return '' + value * 2
      },
    })
    expect(getValue('1px')).toEqual('1px')
    expect(getValue('2')).toEqual('4')
  })
  it('elementType', () => {
    expect(elementType(1)).toEqual('number')
    expect(elementType(NaN)).toEqual('number')
    expect(elementType('1')).toEqual('string')
    expect(elementType(true)).toEqual('boolean')
    expect(elementType([])).toEqual('array')
    expect(elementType({})).toEqual('object')
    expect(elementType(Symbol('a'))).toEqual('symbol')
    expect(elementType(new Date())).toEqual('date')
    expect(elementType(new RegExp(''))).toEqual('regexp')
    expect(elementType(new Set())).toEqual('set')
    expect(elementType(new WeakSet())).toEqual('weakset')
    expect(elementType(new Map())).toEqual('map')
    expect(elementType(new WeakMap())).toEqual('weakmap')
  })
})
