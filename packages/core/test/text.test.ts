// import { isTextSizeKey, isTextAlign, isTextWeightKey, isTextLineHeightKey, isTextHeadingKey } from '../src/propKey'
// import { textSizePropToStyle, textAlignPropToStyle, textHeadingPropToStyle, textLineHeightPropToStyle, textWeightPropToStyle } from '../src/propToStyle'

import { isTextSizeKey } from '../src/propKey'
import { textSizePropToStyle } from '../src/propToStyle'

describe('text-size', () => {
  it('isTextSizeKey', () => {
    expect(isTextSizeKey('f')).toEqual(true)
    expect(isTextSizeKey('f-10')).toEqual(true)
    expect(isTextSizeKey('f-10rem')).toEqual(true)
  })

  it('textSizePropToStyle', () => {
    expect(textSizePropToStyle('f', '10')).toMatchObject({ fontSize: '10' })
    expect(textSizePropToStyle('f-10', true)).toMatchObject({ fontSize: '10' })
    expect(textSizePropToStyle('f-10rem', true)).toMatchObject({ fontSize: '10rem' })
  })
})
