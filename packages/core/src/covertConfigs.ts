import { CSSProperties } from 'react'
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
  textLineWeightPropToStyle,
  textSizePropToStyle,
  textWeightPropToStyle,
  zIndexPropToStyle,
  flexItemPropToStyle,
} from './propToStyle'
import {
  isAlignmentKey,
  isBgColorKey,
  isBorderKey,
  isColorKey,
  isFlexboxKey,
  isFlexItemKey,
  isMarginKey,
  isPaddingKey,
  isPositionKey,
  isRoundedKey,
  isSizeKey,
  isTextAlign,
  isTextHeadingKey,
  isTextLineHeightKey,
  isTextSizeKey,
  isTextWeightKey,
  isZIndexKey,
} from './propKey'

export interface CovertConfig {
  name?: string
  key: string | ((prop: string, propValue: any, props: any) => boolean)
  style: CSSProperties | ((prop: string, propValue: any, props: any) => CSSProperties)
}

export const covertConfigs: CovertConfig[] = [
  {
    name: 'size',
    key: isSizeKey,
    style: sizePropToStyle,
  },
  {
    name: 'padding',
    key: isPaddingKey,
    style: paddingPropToStyle,
  },
  {
    name: 'margin',
    key: isMarginKey,
    style: marginPropToStyle,
  },
  {
    name: 'bgColor',
    key: isBgColorKey,
    style: bgPropToStyle,
  },
  {
    name: 'rounded',
    key: isRoundedKey,
    style: roundedPropToStyle,
  },
  {
    name: 'border',
    key: isBorderKey,
    style: borderPropToStyle,
  },
  {
    name: 'flexbox',
    key: isFlexboxKey,
    style: flexPropToStyle,
  },
  {
    name: 'flex-item',
    key: isFlexItemKey,
    style: flexItemPropToStyle,
  },
  {
    name: 'flexbox-align',
    key: isAlignmentKey,
    style: (prop, propValue, props) => {
      const newProps = props.row || props.column ? props : { ...props, row: true }
      return alignmentPropToStyle(newProps)
    },
  },
  {
    name: 'position',
    key: isPositionKey,
    style: positionPropToStyle,
  },
  {
    name: 'zIndex',
    key: isZIndexKey,
    style: zIndexPropToStyle,
  },
  {
    name: 'text-align',
    key: isTextAlign,
    style: textAlignPropToStyle,
  },
  {
    name: 'text-heading',
    key: isTextHeadingKey,
    style: textHeadingPropToStyle,
  },
  {
    name: 'color',
    key: isColorKey,
    style: colorPropToStyle,
  },
  {
    name: 'text-size',
    key: isTextSizeKey,
    style: textSizePropToStyle,
  },
  {
    name: 'text-weight',
    key: isTextWeightKey,
    style: textWeightPropToStyle,
  },
  {
    name: 'text-line-height',
    key: isTextLineHeightKey,
    style: textLineWeightPropToStyle,
  },
]
