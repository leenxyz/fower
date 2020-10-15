import { isSizeKey } from '../src/propKey'
import { sizePropToStyle } from '../src/propToStyle'

describe('size', () => {
  it('isSizeKey', () => {
    expect(isSizeKey('w')).toEqual(true)
    expect(isSizeKey('h')).toEqual(true)
    expect(isSizeKey('s')).toEqual(true)
    expect(isSizeKey('c')).toEqual(true)
    expect(isSizeKey('minW')).toEqual(true)
    expect(isSizeKey('minH')).toEqual(true)
    expect(isSizeKey('maxW')).toEqual(true)
    expect(isSizeKey('maxH')).toEqual(true)
    expect(isSizeKey('w-10')).toEqual(true)
    expect(isSizeKey('h-10')).toEqual(true)
    expect(isSizeKey('s-10')).toEqual(true)
    expect(isSizeKey('c-10')).toEqual(true)
  })

  it('sizePropToStyle', () => {
    expect(sizePropToStyle('w', '10')).toMatchObject({ width: '10' })
    expect(sizePropToStyle('w-10', true)).toMatchObject({ width: '10' })
    expect(sizePropToStyle('s-10', true)).toMatchObject({ width: '10', height: '10' })
    expect(sizePropToStyle('c-10', true)).toMatchObject({
      width: '10',
      height: '10',
      borderRadius: '10',
    })
  })
})
