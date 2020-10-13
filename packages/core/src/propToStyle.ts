import { isNumber, kebab, upFirst, getValue } from './utils'
import { ColorType } from './colors'
import {
  isValuePaddingKey,
  isValueSizeKey,
  isValueMarginKey,
  isValueBgColorKey,
  isValueRoundedKey,
  isValuePositionKey,
  isValueZIndexKey,
} from './propKey'
import { ModifierType } from './types/Modifiers'
import { weights, fontSizes, leadings, headings } from './typo'
import {
  G,
  paddingMaps,
  marginMaps,
  flexMaps,
  sizeMaps,
  roundedMaps,
  centerX,
  centerY,
  positionKeys,
  positionMaps,
  borderStyles,
} from './constants'
import { Styli } from './styli'

const Colors = Styli.Colors

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
  const [key, symbol = '', value] = prop.split(/\b-*?/)
  const [, minus = ''] = symbol.split('')

  marginMaps[key].forEach((k) => {
    const marginValue = isValueMarginKey(prop) ? propValue : minus + value
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
    backgroundColor = Colors[colorKey]
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

export function borderPropToStyle(prop: string) {
  let style: any = {}

  let [, second, third] = kebab(prop).split('-')

  const isBorderColor = (val: string) => !!Colors[val as ColorType]
  const isBorderStyle = (val: string) => borderStyles.includes(val)
  const isBorderPosition = (val: string) => !!positionMaps[val]
  const isBorderWidth = (val: string) => isNumber(val)

  if (isBorderWidth(second) || isBorderWidth(third)) {
    const position = isBorderPosition(second) ? upFirst(positionMaps[second]) : ''
    style[`border${position}Width`] = getValue(third || second)
    style[`border${position}Style`] = 'solid'
  }
  if (isBorderColor(second)) {
    style.borderColor = Colors[second as ColorType]
  }
  if (isBorderStyle(second)) {
    style.borderStyle = second
  }

  return style
}

export function flexPropToStyle(prop: string) {
  const style: any = {}
  const wraps = [G.nowrap, G.wrap]

  if (prop === G.row) style.flexDirection = G.row
  if (prop === G.column) style.flexDirection = G.column

  // 自动 display: flex
  if (prop === G.row || prop === G.column) style.display = G.flex

  // set flex-wrap
  if (wraps.includes(prop)) style.flexWrap = prop as any

  // justify-content
  if (prop.startsWith('justify')) {
    style.justifyContent = flexMaps[prop.replace('justify', '').toLocaleLowerCase()]
  }

  if (prop.startsWith('align')) {
    style.alignItems = flexMaps[prop.replace('align', '').toLocaleLowerCase()]
  }

  return style
}

// set flex-flow、flex-shrink、flex-basic
export function flexItemPropToStyle(prop: any, propValue: any) {
  const [, value] = prop.split('-')
  const flexValue = value || (propValue === true ? 1 : propValue)
  return { flex: getValue(flexValue) }
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
  style[positionMaps[key.toLocaleLowerCase()]] = getValue(positionValue, ModifierType.position)

  return style
}

export function zIndexPropToStyle(prop: string, propValue: any) {
  let style: any = {}
  const [, value] = prop.split('-')
  const zIndexValue = isValueZIndexKey(prop) ? propValue : value
  style.zIndex = zIndexValue
  return style
}

export function textAlignPropToStyle(prop: string) {
  return { textAlign: prop.replace('text', '').toLowerCase() as any }
}

export function textHeadingPropToStyle(prop: string) {
  return { display: 'block', fontWeight: 'bold', fontSize: headings[prop] + 'em' }
}

export function colorPropToStyle(prop: string, propValue: any) {
  return { color: Colors[prop] || propValue }
}

export function textSizePropToStyle(prop: string) {
  const [, value] = prop.split('-')
  return { fontSize: fontSizes[value] || getValue(value, ModifierType.text) }
}

export function textWeightPropToStyle(prop: string) {
  const weightKey = prop.replace(/^font/, '').toLocaleLowerCase()
  return { fontWeight: weights[weightKey] }
}

export function textLineHeightPropToStyle(prop: string, propValue: any) {
  if (prop.startsWith('leading-')) {
    const [, value] = prop.split('-')
    return { lineHeight: getValue(value || propValue) }
  } else {
    const leadingKey = prop.replace(/^leading/, '').toLocaleLowerCase()
    if (leadings[leadingKey]) return { lineHeight: `calc(${leadings[leadingKey]} * 1em)` }
  }
  return {}
}

export function shadowPropToStyle(prop: string, propValue: any) {
  const [, value] = prop.split('-')

  if (typeof propValue === 'string' && propValue) return { boxShadow: propValue }

  const gv = getValue
  switch (value) {
    case 'xs':
      return { boxShadow: `0 0 0 ${gv(1)} rgba(0, 0, 0, 0.05)` }
    case 'sm':
      return { boxShadow: `0 ${gv(1)} ${gv(2)} 0 rgba(0, 0, 0, 0.05)` }
    case 'md':
      return {
        boxShadow: `0 ${gv(4)} ${gv(6)} -${gv(1)} rgba(0, 0, 0, 0.1), 0 ${gv(2)} ${gv(4)} -${gv(
          1,
        )} rgba(0, 0, 0, 0.06)`,
      }
    case 'lg':
      return {
        boxShadow: `0 ${gv(10)} ${gv(14)} -${gv(3)} rgba(0, 0, 0, 0.1), 0 ${gv(4)} ${gv(6)} -${gv(
          2,
        )} rgba(0, 0, 0, 0.05)`,
      }
    case 'xl':
      return {
        boxShadow: `0 ${gv(20)} ${gv(25)} -${gv(5)} rgba(0, 0, 0, 0.1), 0 ${gv(10)} ${gv(10)} -${gv(
          5,
        )} rgba(0, 0, 0, 0.04)`,
      }
    case '2xl':
      return { boxShadow: `0 ${gv(25)} ${gv(50)} -${gv(12)} rgba(0, 0, 0, 0.25)` }
    case 'inner':
      return { boxShadow: `inset 0 ${gv(2)} ${gv(4)} 0 rgba(0, 0, 0, 0.06)` }
    case 'outline':
      return { boxShadow: `0 0 0 ${gv(3)} rgba(66, 153, 225, 0.5)` }
    case 'none':
      return { boxShadow: 'none' }
    case 'base':
      return {
        boxShadow: `0 ${gv(1)} ${gv(3)} 0 rgba(0, 0, 0, 0.1), 0 ${gv(1)} ${gv(
          2,
        )} 0 rgba(0, 0, 0, 0.06)`,
      }
    default:
      return {
        boxShadow: `0 ${gv(1)} ${gv(3)} 0 rgba(0, 0, 0, 0.1), 0 ${gv(1)} ${gv(
          2,
        )} 0 rgba(0, 0, 0, 0.06)`,
      }
  }
}

export function opacityPropToStyle(prop: string, propValue: any) {
  const [, value = 50] = prop.split('-')
  if (typeof propValue !== 'boolean' && propValue) return { opacity: Number(propValue) / 100 }
  return { opacity: Number(value) / 100 }
}
