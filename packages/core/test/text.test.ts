import {
  isTextSizeKey,
  isTextAlign,
  isTextWeightKey,
  isTextLineHeightKey,
  isTextHeadingKey,
} from '../src/propKey'
import {
  textSizePropToStyle,
  textAlignPropToStyle,
  textHeadingPropToStyle,
  textLineHeightPropToStyle,
  textWeightPropToStyle,
} from '../src/propToStyle'
import { headings, leadings } from '../src/typo'
import { upFirst } from '../src/utils'

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

describe('text-align', () => {
  it('isTextAlign', () => {
    expect(isTextAlign('textCenter')).toEqual(true)
    expect(isTextAlign('textcenter')).toEqual(false)
    expect(isTextAlign('textLeft')).toEqual(true)
    expect(isTextAlign('textJustify')).toEqual(true)
    expect(isTextAlign('textRight')).toEqual(true)
  })

  it('textAlignPropToStyle', () => {
    expect(textAlignPropToStyle('textAlign', 'center')).toMatchObject({ textAlign: 'center' })
    expect(textAlignPropToStyle('textCenter', true)).toMatchObject({ textAlign: 'center' })
    expect(textAlignPropToStyle('textLeft', true)).toMatchObject({ textAlign: 'left' })
    expect(textAlignPropToStyle('textRight', true)).toMatchObject({ textAlign: 'right' })
    expect(textAlignPropToStyle('textJustify', true)).toMatchObject({ textAlign: 'justify' })
  })
})

describe('text-align', () => {
  it('isTextWeightKey', () => {
    expect(isTextWeightKey('fontWeight')).toEqual(true)
    expect(isTextWeightKey('fontHairline')).toEqual(true)
    expect(isTextWeightKey('fontThin')).toEqual(true)
    expect(isTextWeightKey('fontLight')).toEqual(true)
    expect(isTextWeightKey('fontNormal')).toEqual(true)
    expect(isTextWeightKey('fontMedium')).toEqual(true)
    expect(isTextWeightKey('fontSemibold')).toEqual(true)
    expect(isTextWeightKey('fontBold')).toEqual(true)
    expect(isTextWeightKey('fontExtrabold')).toEqual(true)
    expect(isTextWeightKey('fontBlack')).toEqual(true)
    expect(isTextWeightKey('fontAAA')).toEqual(false)
  })

  it('textWeightPropToStyle', () => {
    expect(textWeightPropToStyle('fontWeight', '400')).toMatchObject({ fontWeight: '400' })
    expect(textWeightPropToStyle('fontHairline', true)).toMatchObject({ fontWeight: '100' })
    expect(textWeightPropToStyle('fontThin', true)).toMatchObject({ fontWeight: '200' })
    expect(textWeightPropToStyle('fontLight', true)).toMatchObject({ fontWeight: '300' })
    expect(textWeightPropToStyle('fontNormal', true)).toMatchObject({ fontWeight: '400' })
    expect(textWeightPropToStyle('fontMedium', true)).toMatchObject({ fontWeight: '500' })
    expect(textWeightPropToStyle('fontSemibold', true)).toMatchObject({ fontWeight: '600' })
    expect(textWeightPropToStyle('fontBold', true)).toMatchObject({ fontWeight: 'bold' })
    expect(textWeightPropToStyle('fontExtrabold', true)).toMatchObject({ fontWeight: '800' })
    expect(textWeightPropToStyle('fontBlack', true)).toMatchObject({ fontWeight: '900' })
  })
})

describe('text-heading', () => {
  it('isTextHeadingKey', () => {
    for (let i = 0; i < headings.length; i++) {
      expect(isTextHeadingKey(headings[i])).toEqual(true)
    }
    expect(isTextHeadingKey('h7')).toEqual(false)
  })

  it('textHeadingPropToStyle', () => {
    for (let i = 0; i < headings.length; i++) {
      expect(textHeadingPropToStyle('h1')).toMatchObject({
        display: 'block',
        fontWeight: 'bold',
        fontSize: headings[i] + 'em',
      })
    }
  })
})

describe('text-heading', () => {
  it('isTextHeadingKey', () => {
    for (let i = 0; i < headings.length; i++) {
      expect(isTextHeadingKey(headings[i])).toEqual(true)
    }
    expect(isTextHeadingKey('h7')).toEqual(false)
  })

  it('textHeadingPropToStyle', () => {
    for (let i = 0; i < headings.length; i++) {
      expect(textHeadingPropToStyle('h1')).toMatchObject({
        display: 'block',
        fontWeight: 'bold',
        fontSize: headings[i] + 'em',
      })
    }
  })
})

describe('text-line-height', () => {
  it('isTextLineHeightKey', () => {
    for (let i in leadings) {
      const name = `leading${upFirst(i)}`
      expect(isTextLineHeightKey(name)).toEqual(true)
    }
    expect(isTextLineHeightKey('leading')).toEqual(true)
    expect(isTextLineHeightKey('leading-10')).toEqual(true)
    expect(isTextLineHeightKey('leading-10rem')).toEqual(true)
  })

  it('textLineHeightPropToStyle', () => {
    for (let i in leadings) {
      const name = `leading${upFirst(i)}`
      expect(textLineHeightPropToStyle(name, true)).toMatchObject({
        lineHeight: `calc(${leadings[i]} * 1em)`,
      })
    }
    expect(textLineHeightPropToStyle('leading', '10')).toMatchObject({ lineHeight: '10' })
    expect(textLineHeightPropToStyle('leading-10', true)).toMatchObject({ lineHeight: '10' })
    expect(textLineHeightPropToStyle('leading-10rem', true)).toMatchObject({ lineHeight: '10rem' })
  })
})
