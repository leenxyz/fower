import { isMarginKey } from '../src/utils/propKey'
import { marginPropToStyle } from '../src/utils/propToStyle'

describe('margin', () => {
  it('isMarginKey', () => {
    expect(isMarginKey('m')).toEqual(true)
    expect(isMarginKey('m-10')).toEqual(true)
    expect(isMarginKey('m-10rem')).toEqual(true)
    expect(isMarginKey('m--10rem')).toEqual(true)

    expect(isMarginKey('ml')).toEqual(true)
    expect(isMarginKey('ml-10')).toEqual(true)
    expect(isMarginKey('ml-10rem')).toEqual(true)
    expect(isMarginKey('ml--10rem')).toEqual(true)

    expect(isMarginKey('mt')).toEqual(true)
    expect(isMarginKey('mt-10')).toEqual(true)
    expect(isMarginKey('mt-10rem')).toEqual(true)
    expect(isMarginKey('mt--10rem')).toEqual(true)

    expect(isMarginKey('mr')).toEqual(true)
    expect(isMarginKey('mr-10')).toEqual(true)
    expect(isMarginKey('mr-10rem')).toEqual(true)
    expect(isMarginKey('mr--10rem')).toEqual(true)

    expect(isMarginKey('mb')).toEqual(true)
    expect(isMarginKey('mb-10')).toEqual(true)
    expect(isMarginKey('mb-10rem')).toEqual(true)
    expect(isMarginKey('mb--10rem')).toEqual(true)

    expect(isMarginKey('mx')).toEqual(true)
    expect(isMarginKey('mx-10')).toEqual(true)
    expect(isMarginKey('mx-10rem')).toEqual(true)
    expect(isMarginKey('mx--10rem')).toEqual(true)

    expect(isMarginKey('my')).toEqual(true)
    expect(isMarginKey('my-10')).toEqual(true)
    expect(isMarginKey('my-10rem')).toEqual(true)
    expect(isMarginKey('my--10rem')).toEqual(true)
  })

  it('marginPropToStyle', () => {
    expect(marginPropToStyle('m', '10')).toMatchObject({ margin: '10' })
    expect(marginPropToStyle('m-10', true)).toMatchObject({ margin: '10' })
    expect(marginPropToStyle('ml--10', true)).toMatchObject({ marginLeft: '-10' })
    expect(marginPropToStyle('ml-10rem', true)).toMatchObject({ marginLeft: '10rem' })
  })
})
