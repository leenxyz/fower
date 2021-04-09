import {
  isHex,
  isRgb,
  isRgba,
  isRgbOrRgba,
  fade,
  toHex,
  toRgb,
  darken,
  lighten,
  getOpacity,
  getRgbValue,
  getRgbaValue,
  getColorFromRgbValue,
} from './index'

const INVALID_COLOR_REGEXP = /Color: Invalid Input of undefined/

describe('isHex', () => {
  test(`isHex()`, () => {
    // @ts-ignore
    expect(isHex()).toBeFalsy()
  })

  test(`isHex('Not A Color')`, () => {
    expect(isHex('Not A Color')).toBeFalsy()
  })

  test(`isHex('#000')`, () => {
    expect(isHex('#000')).toBeTruthy()
  })

  test(`isHex('#000000')`, () => {
    expect(isHex('#000000')).toBeTruthy()
  })

  test(`isHex('rgb(0,0,0)')`, () => {
    expect(isHex('rgb(0,0,0)')).toBeFalsy()
  })

  test(`isHex('RGB(0,0,0)')`, () => {
    expect(isHex('rgb(0,0,0)')).toBeFalsy()
  })

  test(`isHex('rgba(0,0,0,1)')`, () => {
    expect(isHex('rgba(0,0,0,1)')).toBeFalsy()
  })

  test(`isHex('RGBA(0,0,0,1)')`, () => {
    expect(isHex('RGBA(0,0,0,1)')).toBeFalsy()
  })
})

describe('isRgb', () => {
  test(`isRgb()`, () => {
    // @ts-ignore
    expect(isRgb()).toBeFalsy()
  })

  test(`isRgb('Not A Color')`, () => {
    expect(isRgb('Not A Color')).toBeFalsy()
  })

  test(`isRgb('#000')`, () => {
    expect(isRgb('#000')).toBeFalsy()
  })

  test(`isRgb('#000000')`, () => {
    expect(isRgb('#000000')).toBeFalsy()
  })

  test(`isRgb('rgb(0,0,0)')`, () => {
    expect(isRgb('rgb(0,0,0)')).toBeTruthy()
  })

  test(`isRgb('RGB(0,0,0)')`, () => {
    expect(isRgb('rgb(0,0,0)')).toBeTruthy()
  })

  test(`isRgb('rgba(0,0,0,1)')`, () => {
    expect(isRgb('rgba(0,0,0,1)')).toBeFalsy()
  })

  test(`isRgb('RGBA(0,0,0,1)')`, () => {
    expect(isRgb('RGBA(0,0,0,1)')).toBeFalsy()
  })
})

describe('isRgba', () => {
  test(`isRgba()`, () => {
    // @ts-ignore
    expect(isRgba()).toBeFalsy()
  })

  test(`isRgba('Not A Color')`, () => {
    expect(isRgba('Not A Color')).toBeFalsy()
  })

  test(`isRgba('#000')`, () => {
    expect(isRgba('#000')).toBeFalsy()
  })

  test(`isRgba('#000000')`, () => {
    expect(isRgba('#000000')).toBeFalsy()
  })

  test(`isRgba('rgb(0,0,0)')`, () => {
    expect(isRgba('rgb(0,0,0)')).toBeFalsy()
  })

  test(`isRgba('RGB(0,0,0)')`, () => {
    expect(isRgba('rgb(0,0,0)')).toBeFalsy()
  })

  test(`isRgba('rgba(0,0,0,1)')`, () => {
    expect(isRgba('rgba(0,0,0,1)')).toBeTruthy()
  })

  test(`isRgba('RGBA(0,0,0,1)')`, () => {
    expect(isRgba('RGBA(0,0,0,1)')).toBeTruthy()
  })
})

describe('isRgbOrRgba', () => {
  test(`isRgbOrRgba()`, () => {
    // @ts-ignore
    expect(isRgbOrRgba()).toBeFalsy()
  })

  test(`isRgbOrRgba('Not A Color')`, () => {
    expect(isRgbOrRgba('Not A Color')).toBeFalsy()
  })

  test(`isRgbOrRgba('#000')`, () => {
    expect(isRgbOrRgba('#000')).toBeFalsy()
  })

  test(`isRgbOrRgba('#000000')`, () => {
    expect(isRgbOrRgba('#000000')).toBeFalsy()
  })

  test(`isRgbOrRgba('rgb(0,0,0)')`, () => {
    expect(isRgbOrRgba('rgb(0,0,0)')).toBeTruthy()
  })

  test(`isRgbOrRgba('RGB(0,0,0)')`, () => {
    expect(isRgbOrRgba('rgb(0,0,0)')).toBeTruthy()
  })

  test(`isRgbOrRgba('rgba(0,0,0,1)')`, () => {
    expect(isRgbOrRgba('rgba(0,0,0,1)')).toBeTruthy()
  })

  test(`isRgbOrRgba('RGBA(0,0,0,1)')`, () => {
    expect(isRgbOrRgba('RGBA(0,0,0,1)')).toBeTruthy()
  })
})

describe('fade', () => {
  test(`fade error`, () => {
    expect(fade).toThrow(INVALID_COLOR_REGEXP)
  })

  test(`fade('black', 50)`, () => {
    expect(fade('black', 50)).toEqual('rgba(0,0,0,0.5)')
  })

  test(`fade('#000', 0)`, () => {
    expect(fade('#000', 0)).toEqual('rgba(0,0,0,0)')
  })

  test(`fade('#000', 50)`, () => {
    expect(fade('#000', 50)).toEqual('rgba(0,0,0,0.5)')
  })

  test(`fade('#000', 100)`, () => {
    expect(fade('#000', 100)).toEqual('rgba(0,0,0,1)')
  })

  test(`fade('#000000', 0)`, () => {
    expect(fade('#000', 0)).toEqual('rgba(0,0,0,0)')
  })

  test(`fade('#000000', 50)`, () => {
    expect(fade('#000', 50)).toEqual('rgba(0,0,0,0.5)')
  })

  test(`fade('#000000', 100)`, () => {
    expect(fade('#000', 100)).toEqual('rgba(0,0,0,1)')
  })

  test(`fade('rgb(0,0,0)', 0)`, () => {
    expect(fade('#000', 0)).toEqual('rgba(0,0,0,0)')
  })

  test(`fade('rgb(0,0,0)', 50)`, () => {
    expect(fade('#000', 50)).toEqual('rgba(0,0,0,0.5)')
  })

  test(`fade('rgb(0,0,0)', 100)`, () => {
    expect(fade('#000', 100)).toEqual('rgba(0,0,0,1)')
  })

  test(`fade('rgba(0,0,0,0)', 0)`, () => {
    expect(fade('#000', 0)).toEqual('rgba(0,0,0,0)')
  })

  test(`fade('rgba(0,0,0,0)', 50)`, () => {
    expect(fade('#000', 50)).toEqual('rgba(0,0,0,0.5)')
  })

  test(`fade('rgba(0,0,0,0)', 100)`, () => {
    expect(fade('#000', 100)).toEqual('rgba(0,0,0,1)')
  })
})

describe('toHex', () => {
  test(`toHex error`, () => {
    expect(toHex).toThrow(INVALID_COLOR_REGEXP)
  })

  test(`toHex('#000')`, () => {
    expect(toHex('#000')).toEqual('#000')
  })

  test(`toHex('rgb(0,0,0)')`, () => {
    expect(toHex('rgb(0,0,0)')).toEqual('#000000')
  })

  test(`toHex('rgba(0,0,0,0)')`, () => {
    expect(toHex('rgb(0,0,0,0)')).toEqual('#000000')
  })

  test(`toHex('black')`, () => {
    expect(toHex('black')).toEqual('#000000')
  })

  test(`toHex('transparent')`, () => {
    expect(toHex('transparent')).toEqual('#000000')
  })
})

describe('toRgb', () => {
  test(`toRgb error`, () => {
    expect(toRgb).toThrow(INVALID_COLOR_REGEXP)
  })

  test(`toRgb('#000')`, () => {
    expect(toRgb('#000')).toEqual('rgb(0,0,0)')
  })

  test(`toRgb('#000', 0.5)`, () => {
    expect(toRgb('#000', 0.5)).toEqual('rgba(0,0,0,0.5)')
  })

  test(`toRgb('rgb(0,0,0)')`, () => {
    expect(toRgb('rgb(0,0,0)')).toEqual('rgb(0,0,0)')
  })

  test(`toRgb('rgb(0,0,0)', 0.5)`, () => {
    expect(toRgb('rgb(0,0,0)', 0.5)).toEqual('rgba(0,0,0,0.5)')
  })

  test(`toRgb('rgba(0,0,0,0)')`, () => {
    expect(toRgb('rgb(0,0,0,0)')).toEqual('rgb(0,0,0)')
  })

  test(`toRgb('rgba(0,0,0,1)', 0.5)`, () => {
    expect(toRgb('rgba(0,0,0,1)', 0.5)).toEqual('rgba(0,0,0,0.5)')
  })

  test(`toRgb('black')`, () => {
    expect(toRgb('black')).toEqual('rgb(0,0,0)')
  })

  test(`toRgb('transparent')`, () => {
    expect(toRgb('transparent')).toEqual('rgb(0,0,0)')
  })

  test(`toRgb('transparent', 0.5)`, () => {
    expect(toRgb('transparent', 0.5)).toEqual('rgba(0,0,0,0.5)')
  })
})

describe('darken', () => {
  test(`darken error`, () => {
    expect(darken).toThrow(INVALID_COLOR_REGEXP)
  })

  test(`darken('#3080E8', 20)`, () => {
    expect(darken('#3080E8', 20)).toEqual('rgba(0,77,181,1)')
  })

  test(`darken('#000')`, () => {
    expect(darken('#000')).toEqual('rgba(0,0,0,1)')
  })

  test(`darken('#fff', 100)`, () => {
    expect(darken('#fff', 100)).toEqual('rgba(0,0,0,1)')
  })

  test(`darken('rgb(255,255,255)', 100)`, () => {
    expect(darken('rgb(255,255,255)', 100)).toEqual('rgba(0,0,0,1)')
  })

  test(`darken('rgba(255,255,255, 1)', 100)`, () => {
    expect(darken('rgba(255,255,255, 1)', 100)).toEqual('rgba(0,0,0,1)')
  })

  test(`darken('rgba(255,255,255, 0.5)', 100)`, () => {
    expect(darken('rgba(255,255,255, 0.5)', 100)).toEqual('rgba(0,0,0,0.5)')
  })

  test(`darken('black', 100)`, () => {
    expect(darken('black', 100)).toEqual('rgba(0,0,0,1)')
  })
})

describe('lighten', () => {
  test(`lighten error`, () => {
    expect(lighten).toThrow(INVALID_COLOR_REGEXP)
  })

  test(`lighten('#3080E8', 20)`, () => {
    expect(lighten('#3080E8', 20)).toEqual('rgba(99,179,255,1)')
  })

  test(`lighten('#000')`, () => {
    expect(lighten('#000')).toEqual('rgba(0,0,0,1)')
  })

  test(`lighten('#000', 100)`, () => {
    expect(lighten('#000', 100)).toEqual('rgba(255,255,255,1)')
  })

  test(`lighten('rgb(0,0,0)', 100)`, () => {
    expect(lighten('rgb(0,0,0)', 100)).toEqual('rgba(255,255,255,1)')
  })

  test(`lighten('rgba(0,0,0,1)', 100)`, () => {
    expect(lighten('rgba(0,0,0,1)', 100)).toEqual('rgba(255,255,255,1)')
  })

  test(`lighten('rgba(0,0,0,0.5)', 100)`, () => {
    expect(lighten('rgba(0,0,0,0.5)', 100)).toEqual('rgba(255,255,255,0.5)')
  })

  test(`lighten('white', 100)`, () => {
    expect(lighten('white', 100)).toEqual('rgba(255,255,255,1)')
  })
})

describe('getOpacity', () => {
  test(`getOpacity error`, () => {
    expect(getOpacity).toThrow(INVALID_COLOR_REGEXP)
  })

  test(`getOpacity('#000')`, () => {
    expect(getOpacity('#000')).toEqual(1)
  })

  test(`getOpacity('rgb(0,0,0)')`, () => {
    expect(getOpacity('rgb(0,0,0)')).toEqual(1)
  })

  test(`getOpacity('rgb(0, 0,  0)')`, () => {
    expect(getOpacity('rgb(0, 0,  0)')).toEqual(1)
  })

  test(`getOpacity('rgba(0,0,0,1)')`, () => {
    expect(getOpacity('rgba(0,0,0,1)')).toEqual(1)
  })

  test(`getOpacity('rgba(0,0,0,0.5)')`, () => {
    expect(getOpacity('rgba(0,0,0,0.5)')).toEqual(0.5)
  })

  test(`getOpacity('rgba(0, 0, 0, 0.5)')`, () => {
    expect(getOpacity('rgba(0, 0, 0, 0.5)')).toEqual(0.5)
  })

  test(`getOpacity('rgba(1.111, 1.111, 1.111, 0.5)')`, () => {
    expect(getOpacity('rgba(1.111, 1.111, 1.111, 0.5)')).toEqual(0.5)
  })

  test(`getOpacity('black')`, () => {
    expect(getOpacity('black')).toEqual(1)
  })

  test(`getOpacity('transparent')`, () => {
    expect(getOpacity('transparent')).toEqual(0)
  })
})

describe('getRgbValue', () => {
  test(`getRgbValue error`, () => {
    expect(getRgbValue).toThrow(INVALID_COLOR_REGEXP)
  })

  test(`getRgbValue('black')`, () => {
    expect(getRgbValue('black')).toMatchObject([0, 0, 0])
    expect(getRgbValue('black')).toMatchObject([0, 0, 0])
  })

  test(`getRgbValue('#000')`, () => {
    expect(getRgbValue('#000')).toMatchObject([0, 0, 0])
  })

  test(`getRgbValue('#000000')`, () => {
    expect(getRgbValue('#000000')).toMatchObject([0, 0, 0])
  })

  test(`getRgbValue('rgb(0,0,0)')`, () => {
    expect(getRgbValue('rgb(0,0,0)')).toMatchObject([0, 0, 0])
  })

  test(`getRgbValue('rgb(1, 12,  12)')`, () => {
    expect(getRgbValue('rgb(1, 12,  123)')).toMatchObject([1, 12, 123])
  })

  test(`getRgbValue('rgba(1,12,123,1)')`, () => {
    expect(getRgbValue('rgba(1,12,123,1)')).toMatchObject([1, 12, 123])
  })

  test(`getRgbValue('rgba(1, 12,  123,   1)')`, () => {
    expect(getRgbValue('rgba(1, 12,  123,   1)')).toMatchObject([1, 12, 123])
  })
})

describe('getRgbaValue', () => {
  test(`getRgbaValue error`, () => {
    expect(getRgbaValue).toThrow(INVALID_COLOR_REGEXP)
  })

  test(`getRgbaValue('black')`, () => {
    expect(getRgbaValue('black')).toMatchObject([0, 0, 0, 1])
  })

  test(`getRgbaValue('#000')`, () => {
    expect(getRgbaValue('#000')).toMatchObject([0, 0, 0, 1])
  })

  test(`getRgbaValue('#000000')`, () => {
    expect(getRgbaValue('#000000')).toMatchObject([0, 0, 0, 1])
  })

  test(`getRgbaValue('rgb(0,0,0)')`, () => {
    expect(getRgbaValue('rgb(0,0,0)')).toMatchObject([0, 0, 0, 1])
  })

  test(`getRgbaValue('rgb(1, 12,  123)')`, () => {
    expect(getRgbaValue('rgb(1, 12,  123)')).toMatchObject([1, 12, 123, 1])
  })

  test(`getRgbaValue('rgba(1,12,123,1)')`, () => {
    expect(getRgbaValue('rgba(1,12,123,1)')).toMatchObject([1, 12, 123, 1])
  })

  test(`getRgbaValue('rgba(1,12,123,0.5)')`, () => {
    expect(getRgbaValue('rgba(1,12,123,0.5)')).toMatchObject([1, 12, 123, 0.5])
  })

  test(`getRgbaValue('rgba(1, 12,  123,   1)')`, () => {
    expect(getRgbaValue('rgba(1, 12,  123,   1)')).toMatchObject([1, 12, 123, 1])
  })
})

describe('getColorFromRgbValue', () => {
  test(`getColorFromRgbValue()`, () => {
    expect(() => {
      // @ts-ignore
      getColorFromRgbValue()
    }).toThrow(/is not an array/)
  })

  test(`getColorFromRgbValue([])`, () => {
    expect(() => {
      // @ts-ignore
      getColorFromRgbValue([])
    }).toThrow(/value length should be 3 or 4/)
  })

  test(`getColorFromRgbValue([0,0,0])`, () => {
    expect(getColorFromRgbValue([0, 0, 0])).toEqual('rgb(0,0,0)')
  })

  test(`getColorFromRgbValue([0,0,0,1])`, () => {
    expect(getColorFromRgbValue([0, 0, 0, 1])).toEqual('rgba(0,0,0,1)')
  })
})
