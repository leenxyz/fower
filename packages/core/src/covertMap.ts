import { CSSProperties } from "react"
import { alignmentPropToStyle, bgPropToStyle, borderPropToStyle, colorPropToStyle, flexPropToStyle, marginPropToStyle, paddingPropToStyle, positionPropToStyle, roundedPropToStyle, sizePropToStyle, textAlignPropToStyle, textHeadingPropToStyle, textLineWeightPropToStyle, textSizePropToStyle, textWeightPropToStyle, zIndexPropToStyle } from './modifier'
import { isAlignmentKey, isBgColorKey, isBorderKey, isColorKey, isFlexboxKey, isMarginKey, isPaddingKey, isPositionKey, isRoundedKey, isSizeKey, isTextAlign, isTextHeading, isTextLineHeightKey, isTextSizeKey, isTextWeightKey, isZIndexKey } from './utils'

export interface CovertMap {
  name?: string
  isKey: (prop: string, propValue: any, props: any) => boolean,
  propToStyle: (prop: string, propValue: any, props: any) => CSSProperties
}

export const covertMap: CovertMap[] = [
  {
    name: 'width-height',
    isKey: isSizeKey,
    propToStyle: sizePropToStyle
  },
  {
    name: 'padding',
    isKey: isPaddingKey,
    propToStyle: paddingPropToStyle
  },
  {
    name: 'margin',
    isKey: isMarginKey,
    propToStyle: marginPropToStyle
  },
  {
    name: 'bgColor',
    isKey: isBgColorKey,
    propToStyle: bgPropToStyle
  },
  {
    name: 'rounded',
    isKey: isRoundedKey,
    propToStyle: roundedPropToStyle,
  },
  {
    name: 'border',
    isKey: isBorderKey,
    propToStyle: borderPropToStyle
  },
  {
    name: 'flexbox',
    isKey: isFlexboxKey,
    propToStyle: flexPropToStyle
  },
  {
    name: 'flexbox-align',
    isKey: isAlignmentKey,
    propToStyle: (prop, propValue, props) => {
      const newProps = props.row || props.column ? props : { ...props, row: true }
      return alignmentPropToStyle(newProps)
    },
  },
  {
    name: 'position',
    isKey: isPositionKey,
    propToStyle: positionPropToStyle
  },
  {
    name: 'zIndex',
    isKey: isZIndexKey,
    propToStyle: zIndexPropToStyle
  },
  {
    name: 'text-align',
    isKey: isTextAlign,
    propToStyle: textAlignPropToStyle
  },
  {
    name: 'text-heading',
    isKey: isTextHeading,
    propToStyle: textHeadingPropToStyle
  },
  {
    name: 'color',
    isKey: isColorKey,
    propToStyle: colorPropToStyle,
  },
  {
    name: 'text-size',
    isKey: isTextSizeKey,
    propToStyle: textSizePropToStyle
  },
  {
    name: 'text-weight',
    isKey: isTextWeightKey,
    propToStyle: textWeightPropToStyle
  },
  {
    name: 'text-line-height',
    isKey: isTextLineHeightKey,
    propToStyle: textLineWeightPropToStyle
  }
]