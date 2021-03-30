import plugin from '../src'

describe('styli-plugin-space', () => {
  const { isMatch } = plugin()

  it('isMatch', () => {
    expect(isMatch!('space')).toEqual(true)
    expect(isMatch!('spaceX')).toEqual(true)
    expect(isMatch!('spaceX-10')).toEqual(true)
    expect(isMatch!('spaceY-20')).toEqual(true)
  })
})
