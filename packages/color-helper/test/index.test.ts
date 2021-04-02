import { formatColor } from '../src'

describe('styli-utils', () => {
  it('formatColor', () => {
    expect(formatColor('#000', 'T10')).toEqual('rgba(0,0,0,0.9)')
    expect(formatColor('#000000', 'T10')).toEqual('rgba(0,0,0,0.9)')
    expect(formatColor('url(https://www.baidu.com)')).toEqual('url(https://www.baidu.com)')
  })
})
