import { isBgColorKey } from '../src/utils'

describe('utils', () => {
  it('isBgColorKey', () => {
    expect(isBgColorKey('bg')).toEqual(true)
  })
})
