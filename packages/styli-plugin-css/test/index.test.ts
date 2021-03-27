import plugin from '../src'

describe('styli-plugin-css', () => {
  const { isMatch } = plugin()

  it('isMatch', () => {
    expect(isMatch!('css')).toEqual(true)
    expect(isMatch!('acss')).toEqual(false)
    expect(isMatch!('cssb')).toEqual(false)
  })
})
