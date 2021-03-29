import plugin from '../src'

describe('styli-plugin-debug', () => {
  const { isMatch } = plugin()

  it('isMatch', () => {
    expect(isMatch!('debug')).toEqual(true)
    expect(isMatch!('adebug')).toEqual(false)
    expect(isMatch!('deghb')).toEqual(false)
  })
})
