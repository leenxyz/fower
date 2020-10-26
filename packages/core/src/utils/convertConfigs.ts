import {
  alignmentPropToStyle,
  bgPropToStyle,
  borderPropToStyle,
  colorPropToStyle,
  flexPropToStyle,
  marginPropToStyle,
  paddingPropToStyle,
  positionPropToStyle,
  roundedPropToStyle,
  sizePropToStyle,
  textAlignPropToStyle,
  textHeadingPropToStyle,
  textLineHeightPropToStyle,
  textSizePropToStyle,
  textWeightPropToStyle,
  zIndexPropToStyle,
  flexItemPropToStyle,
  shadowPropToStyle,
  opacityPropToStyle,
  displayPropToStyle,
  overFlowPropToStyle,
} from './propToStyle'
import {
  isAlignmentKey,
  isBgColorKey,
  isBorderKey,
  isColorKey,
  isFlexBoxKey,
  isFlexItemKey,
  isMarginKey,
  isOpacityKey,
  isPaddingKey,
  isPositionKey,
  isRoundedKey,
  isShadowKey,
  isSizeKey,
  isTextAlign,
  isTextHeadingKey,
  isTextLineHeightKey,
  isTextSizeKey,
  isTextWeightKey,
  isZIndexKey,
  isDisplayKey,
  isOverFlowKey,
} from './propKey'
import { StyliStyle } from '../types'

export interface ConvertConfig {
  name?: string
  isMatch: (prop: string, propValue: any, props?: any) => boolean
  toStyle: (prop: string, propValue: any, props: any) => StyliStyle
}

export const convertConfigs: ConvertConfig[] = [
  {
    name: 'size',
    isMatch: isSizeKey,
    toStyle: sizePropToStyle,
  },
  {
    name: 'padding',
    isMatch: isPaddingKey,
    toStyle: paddingPropToStyle,
  },
  {
    name: 'margin',
    isMatch: isMarginKey,
    toStyle: marginPropToStyle,
  },
  {
    name: 'bgColor',
    isMatch: isBgColorKey,
    toStyle: bgPropToStyle,
  },
  {
    name: 'rounded',
    isMatch: isRoundedKey,
    toStyle: roundedPropToStyle,
  },
  {
    name: 'border',
    isMatch: isBorderKey,
    toStyle: borderPropToStyle,
  },
  {
    name: 'flex-box',
    isMatch: isFlexBoxKey,
    toStyle: flexPropToStyle,
  },
  {
    name: 'flex-item',
    isMatch: isFlexItemKey,
    toStyle: flexItemPropToStyle,
  },
  {
    name: 'flex-box-align',
    isMatch: isAlignmentKey,
    toStyle: (_, __, props) => {
      const newProps = props.row || props.column ? props : { ...props, row: true }
      return alignmentPropToStyle(newProps)
    },
  },
  {
    name: 'position',
    isMatch: isPositionKey,
    toStyle: positionPropToStyle,
  },
  {
    name: 'zIndex',
    isMatch: isZIndexKey,
    toStyle: zIndexPropToStyle,
  },
  {
    name: 'text-align',
    isMatch: isTextAlign,
    toStyle: textAlignPropToStyle,
  },
  {
    name: 'text-heading',
    isMatch: isTextHeadingKey,
    toStyle: textHeadingPropToStyle,
  },
  {
    name: 'text-weight',
    isMatch: isTextWeightKey,
    toStyle: textWeightPropToStyle,
  },
  {
    name: 'color',
    isMatch: isColorKey,
    toStyle: colorPropToStyle,
  },
  {
    name: 'text-size',
    isMatch: isTextSizeKey,
    toStyle: textSizePropToStyle,
  },
  {
    name: 'text-line-height',
    isMatch: isTextLineHeightKey,
    toStyle: textLineHeightPropToStyle,
  },
  {
    name: 'shadow',
    isMatch: isShadowKey,
    toStyle: shadowPropToStyle,
  },
  {
    name: 'opacity',
    isMatch: isOpacityKey,
    toStyle: opacityPropToStyle,
  },
  {
    name: 'display',
    isMatch: isDisplayKey,
    toStyle: displayPropToStyle,
  },
  {
    name: 'overflow',
    isMatch: isOverFlowKey,
    toStyle: overFlowPropToStyle,
  },
]
