import { isNumber } from '../src/utils'

describe('utils', () => {
  it('isBgColorKey', () => {
    expect(isNumber('10')).toEqual(true)
  })
})
