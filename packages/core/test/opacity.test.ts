import { isOpacityKey } from '../src/propKey'
import { opacityPropToStyle } from '../src/propToStyle'

describe('opacity', () => {
  it('isOpacityKey', () => {
    expect(isOpacityKey('opacity')).toEqual(true)
    expect(isOpacityKey('opacity-50')).toEqual(true)
  })

  it('opacityPropToStyle', () => {
    expect(opacityPropToStyle('opacity', true)).toMatchObject({ opacity: 0.5 })
    expect(opacityPropToStyle('opacity', '50')).toMatchObject({ opacity: 0.5 })
    expect(opacityPropToStyle('opacity-10', true)).toMatchObject({ opacity: 0.1 })
  })
})
