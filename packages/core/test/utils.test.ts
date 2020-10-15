import { Styli } from '../src/styli'
import { isNumber, upFirst, kebab, isValidPropValue, getValue } from '../src/utils'

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
  it('kebab', () => {
    expect(kebab('fontWeight')).toEqual('font-weight')
  })
  it('isValidPropValue', () => {
    expect(isValidPropValue(true)).toEqual(false)
    expect(isValidPropValue('1')).toEqual(true)
    expect(isValidPropValue(1)).toEqual(true)
  })
  it('getValue', () => {
    Styli.config({
      transformUnit(value) {
        if (typeof value === 'string') return value
        return '' + value * 2
      },
    })
    expect(getValue('1px')).toEqual('1px')
    expect(getValue('2')).toEqual('4')
  })
})
