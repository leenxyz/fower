import {
  isNumber,
  kebab,
  getValue,
  isPaddingKey,
  isValuePaddingKey,
  isSizeKey,
  isValueSizeKey,
  isMarginKey,
  isValueMarginKey,
  isBgColorKey,
  isValueBgColorKey,
  isFlexKey,
  isValueFlexKey,
  isRoundedKey,
  isValueRoundedKey,
  isPositionKey,
  isValuePositionKey,
  isBorderKey,
  isFlexboxKey,
  isAlignmentKey,
} from './utils'
import { presetColors, ColorType } from './colors'
import { weights, fontSizes, leadings } from './typo'
import { ModifierType } from './types'
import {
  G,
  P,
  paddingMaps,
  marginMaps,
  flexMaps,
  sizeMaps,
  roundedMaps,
  centerX,
  centerY,
  positionKeys,
  positionMaps,
} from './constants'

interface Props {
  [key: string]: any
}

interface ParsedModifiers {
  styleKeys: string[]
  style: any
}

const borderStyles = ['solid', 'dashed', 'dotted', 'double', 'none']
const postionMaps: any = {
  t: P.Top,
  r: P.Right,
  b: P.Bottom,
  l: P.Left,
}

export function toStyle(style: any, propStyle: any = {}): any {
  if (Array.isArray(style)) return [style, ...propStyle]
  return { ...style, ...propStyle }
}

export function toFinalProps(props: any) {
  const { styleKeys = [], style } = parseModifiers(props)

  const finalProps = Object.keys(props).reduce((result, key) => {
    if (styleKeys.includes(key)) return result

    return { ...result, [key]: props[key] }
  }, {} as any)

  finalProps.style = toStyle(style, props.style)

  return finalProps
}

export function parseModifiers(props: Props): ParsedModifiers {
  let style: any = {}
  const styleKeys: string[] = []

  for (const [prop, propValue] of Object.entries(props)) {
    /** Get size style */
    if (isSizeKey(prop)) {
      styleKeys.push(prop)
      style = { ...style, ...sizePropToStyle(prop, propValue) }
      continue
    }

    /** Get padding style */
    if (isPaddingKey(prop)) {
      style = { ...style, ...paddingPropToStyle(prop, propValue) }
      styleKeys.push(prop)
      continue
    }

    /** Get margin style */
    if (isMarginKey(prop)) {
      style = { ...style, ...marginPropToStyle(prop, propValue) }
      styleKeys.push(prop)
      continue
    }

    /** Get bg style */
    if (isBgColorKey(prop)) {
      style = { ...style, ...bgPropToStyle(prop, propValue) }
      styleKeys.push(prop)
      continue
    }

    /** Get rounded style */
    if (isRoundedKey(prop)) {
      style = { ...style, ...roundedPropToStyle(prop, propValue) }
      styleKeys.push(prop)
      continue
    }

    /** Get boder style */
    if (isBorderKey(prop)) {
      style = { ...style, ...borderPropToStyle(prop) }
      styleKeys.push(prop)
      continue
    }

    /** Get flexbox style */
    if (isFlexboxKey(prop)) {
      style = { ...style, ...flexPropToStyle(prop, propValue) }
      styleKeys.push(prop)
      continue
    }

    /** Get flexbox style */
    if (isAlignmentKey(prop)) {
      const newProps = props.row || props.column ? props : { ...props, row: true }
      style = {
        ...style,
        ...alignmentPropToStyle(newProps),
      }
      styleKeys.push(prop)
      continue
    }

    /** Get position style */
    if (isPositionKey(prop)) {
      style = { ...style, ...positionPropToStyle(prop, propValue) }
      styleKeys.push(prop)
      continue
    }

    /** Get text style */
    const aligns = ['textLeft', 'textCenter', 'textRight', 'textJustify']

    if (aligns.includes(prop)) {
      style.textAlign = prop.replace('text', '').toLowerCase() as any
      styleKeys.push(prop)
      continue
    }

    if (presetColors[prop as ColorType]) {
      style.color = presetColors[prop as ColorType]
      styleKeys.push(prop)
      continue
    }

    if (/^text-.*/.test(prop)) {
      const [, value] = prop.split('-')
      if (fontSizes[value]) {
        style.fontSize = fontSizes[value]
      } else {
        style.fontSize = getValue(value, ModifierType.text)
      }

      styleKeys.push(prop)
      continue
    }

    if (prop.startsWith('font')) {
      const weightKey = prop.replace(/^font/, '').toLocaleLowerCase()
      if (weights[weightKey]) style.fontWeight = weights[weightKey]

      styleKeys.push(prop)
      continue
    }

    const fontSize = parseInt((style.fontSize || '16px') as any, 10)

    if (prop.startsWith('leading')) {
      if (prop.startsWith('leading-')) {
        const [, value] = prop.split('-')
        style.lineHeight = value + 'px'
      } else {
        const leadingKey = prop.replace(/^leading/, '').toLocaleLowerCase()
        if (leadings[leadingKey]) style.lineHeight = leadings[leadingKey] * fontSize + 'px'
      }

      styleKeys.push(prop)
      continue
    }
  }

  return { styleKeys, style }
}

export function sizePropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, value] = prop.split('-')

  sizeMaps[key].forEach((k) => {
    const sizeValue = isValueSizeKey(prop) ? propValue : value
    style[k] = getValue(sizeValue, ModifierType.size)
  })

  return style
}

export function paddingPropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, value] = prop.split('-')

  paddingMaps[key].forEach((k) => {
    const paddingValue = isValuePaddingKey(prop) ? propValue : value
    style[k] = getValue(paddingValue, ModifierType.padding)
  })

  return style
}

export function marginPropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, value] = prop.split('-')

  marginMaps[key].forEach((k) => {
    const marginValue = isValueMarginKey(prop) ? propValue : value
    style[k] = getValue(marginValue, ModifierType.margin)
  })

  return style
}

export function bgPropToStyle(prop: string, propValue: any) {
  let backgroundColor = ''
  if (isValueBgColorKey(prop)) {
    backgroundColor = propValue
  } else {
    const colorKey = prop.replace(/^bg/, '').replace('-', '').toLowerCase() as ColorType
    backgroundColor = presetColors[colorKey]
  }

  if (!backgroundColor) return {}
  return { backgroundColor }
}

export function roundedPropToStyle(prop: string, propValue: any) {
  let style: any = {}
  const [key, value] = prop.split('-')
  for (const p of roundedMaps[key]) {
    const roundedValue = isValueRoundedKey(prop) ? propValue : value
    style[`border${p}Radius`] = getValue(roundedValue, ModifierType.border)
  }
  return style
}

// TODO: 需要优化
export function borderPropToStyle(prop: string) {
  let style: any = {}

  let [, second, third] = kebab(prop).split('-')

  // is border color
  if (presetColors[second as ColorType]) {
    style.borderColor = presetColors[second as ColorType]
  } else if (borderStyles.includes(second)) {
    style.borderStyle = second
  } else if (postionMaps[second]) {
    if (third) {
      const borderKey = `border${postionMaps[second]}Width`
      style[borderKey] = third + 'px'
    }
  }

  const borderWidth = isNumber(second) ? second : third
  if (borderWidth) style.borderWidth = getValue(borderWidth)

  // 是否存在 border width 属性
  const hasBorderWidth =
    style.borderWidth ||
    style.borderTopWidth ||
    style.borderRightWidth ||
    style.borderBottomWidth ||
    style.borderLeftWidth

  // set border style default to 'solid'
  if (hasBorderWidth && !style.borderStyle) style.borderStyle = 'solid'

  return style
}

export function flexPropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const wraps = [G.nowrap, G.wrap]

  if (prop === G.row) style.flexDirection = G.row
  if (prop === G.column) style.flexDirection = G.column

  // 自动 display: flex
  if (prop === G.row || prop === G.column) style.display = G.flex

  // set flex-wrap
  if (wraps.includes(prop)) style.flexWrap = prop as any

  // set flex-flow、flex-shrink、flex-basic
  if (isFlexKey(prop)) {
    const [, value] = prop.split('-')
    const flexValue = isValueFlexKey(prop) ? propValue : value
    style.flex = getValue(flexValue)
  }

  // justify-content
  if (prop.startsWith('justify')) {
    style.justifyContent = flexMaps[prop.replace('justify', '').toLocaleLowerCase()]
  }

  if (prop.startsWith('align')) {
    style.alignItems = flexMaps[prop.replace('align', '').toLocaleLowerCase()]
  }

  return style
}

export function alignmentPropToStyle(props: any) {
  const { row, center } = props
  const style: any = {}
  const rules: { [key: string]: string[] } = {}

  if (row) {
    style.flexDirection = G.row
    rules.justifyContent = [G.left, G.right, centerX, G.between, G.around, G.evenly]
    rules.alignItems = [G.top, G.bottom, centerY]
  } else {
    rules.justifyContent = [G.top, G.bottom, centerY, G.between, G.around, G.evenly]
    rules.alignItems = [G.left, G.right, centerX]
  }

  for (const [key, positions] of Object.entries(rules)) {
    for (const p of positions) {
      if (!props[p]) continue // need match props key

      // 统一默认值为 row
      if (style.flexDirection) style.flexDirection = G.row

      // 触发 flex
      style.display = G.flex

      if ([G.top, G.left].includes(p)) {
        style[key] = flexMaps.start
      } else if ([G.bottom, G.right].includes(p)) {
        style[key] = flexMaps.end
      } else if ([centerX, centerY].includes(p)) {
        style[key] = G.center
      } else if (p === G.between) {
        style[key] = flexMaps.between
      } else if (p === G.around) {
        style[key] = flexMaps.around
      } else if (p === G.evenly) {
        style[key] = flexMaps.evenly
      }
    }
  }

  if (center) {
    style.display = G.flex
    style.justifyContent = G.center
    style.alignItems = G.center
  }

  return style
}

export function positionPropToStyle(prop: string, propValue: any) {
  let style: any = {}

  if (positionKeys.includes(prop)) style.position = prop

  const [key, value] = prop.split('-')
  const positionValue = isValuePositionKey(prop) ? propValue : value
  style[positionMaps[key]] = getValue(positionValue, ModifierType.position)

  return style
}
