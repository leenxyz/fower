import { formatColor } from '../src'

describe('styli-utils', () => {
  test('formatColor', () => {
    expect(formatColor('#000', 'T10')).toEqual('rgba(0,0,0,0.9)')
    expect(formatColor('#000000', 'T10')).toEqual('rgba(0,0,0,0.9)')
    expect(formatColor('#xxx', 'T10')).toEqual('#xxx')
  })
})
