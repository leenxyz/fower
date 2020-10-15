import { positionKeys } from '../src/constants'
import { isPositionKey } from '../src/utils/propKey'
import { positionPropToStyle } from '../src/utils/propToStyle'

describe('position', () => {
  it('isPositionKey', () => {
    for (let i = 0; i < positionKeys.length; i++) {
      expect(isPositionKey(positionKeys[i])).toEqual(true)
    }
    expect(isPositionKey('T')).toEqual(true)
    expect(isPositionKey('L')).toEqual(true)
    expect(isPositionKey('R')).toEqual(true)
    expect(isPositionKey('B')).toEqual(true)
    expect(isPositionKey('B-10')).toEqual(true)
    expect(isPositionKey('B-10rem')).toEqual(true)
  })

  it('positionPropToStyle', () => {
    for (let i = 0; i < positionKeys.length; i++) {
      expect(positionPropToStyle(positionKeys[i], true)).toMatchObject({
        position: positionKeys[i],
      })
    }
    expect(positionPropToStyle('T', '10')).toMatchObject({ top: '10' })
    expect(positionPropToStyle('T', '10rem')).toMatchObject({ top: '10rem' })
  })
})
