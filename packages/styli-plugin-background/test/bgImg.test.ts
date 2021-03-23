import plugin from '../src'
import './config'

describe('bgImg', () => {
  const { isMatch } = plugin()

  it('isMatch', () => {
    expect(isMatch!('backgroundImage')).toEqual(true)
  })
})
