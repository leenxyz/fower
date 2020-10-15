import { isPaddingKey } from '../src/utils/propKey'
import { paddingPropToStyle } from '../src/utils/propToStyle'

describe('padding', () => {
  it('isPaddingKey', () => {
    expect(isPaddingKey('p')).toEqual(true)
    expect(isPaddingKey('p-10')).toEqual(true)
    expect(isPaddingKey('p-10rem')).toEqual(true)

    expect(isPaddingKey('pl')).toEqual(true)
    expect(isPaddingKey('pl-10')).toEqual(true)
    expect(isPaddingKey('pl-10rem')).toEqual(true)

    expect(isPaddingKey('pt')).toEqual(true)
    expect(isPaddingKey('pt-10')).toEqual(true)
    expect(isPaddingKey('pt-10rem')).toEqual(true)

    expect(isPaddingKey('pr')).toEqual(true)
    expect(isPaddingKey('pr-10')).toEqual(true)
    expect(isPaddingKey('pr-10rem')).toEqual(true)

    expect(isPaddingKey('pb')).toEqual(true)
    expect(isPaddingKey('pb-10')).toEqual(true)
    expect(isPaddingKey('pb-10rem')).toEqual(true)

    expect(isPaddingKey('px')).toEqual(true)
    expect(isPaddingKey('px-10')).toEqual(true)
    expect(isPaddingKey('px-10rem')).toEqual(true)

    expect(isPaddingKey('py')).toEqual(true)
    expect(isPaddingKey('py-10')).toEqual(true)
    expect(isPaddingKey('py-10rem')).toEqual(true)
  })

  it('paddingPropToStyle', () => {
    expect(paddingPropToStyle('p', '10')).toMatchObject({ padding: '10' })
    expect(paddingPropToStyle('p-10', true)).toMatchObject({ padding: '10' })
    expect(paddingPropToStyle('pl-10rem', true)).toMatchObject({ paddingLeft: '10rem' })
  })
})
