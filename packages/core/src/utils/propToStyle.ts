import { isNumber, kebab, upFirst, getValue, isValidPropValue } from './'

import { ColorType } from '../constants/colors'
import { ModifierType } from '../types/Modifiers'
import { weights, fontSizes, leadings, headings } from '../constants/typo'
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
} from '../constants'
import { Styli } from '../styli'

const Colors = Styli.Colors

export function sizePropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, value] = prop.split('-')

  sizeMaps[key].forEach((k) => {
    const sizeValue = isValidPropValue(propValue) ? propValue : value
    style[k] = getValue(sizeValue, ModifierType.size)
  })

  return style
}

export function paddingPropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, value] = prop.split('-')

  paddingMaps[key].forEach((k) => {
    const paddingValue = isValidPropValue(propValue) ? propValue : value
    style[k] = getValue(paddingValue, ModifierType.padding)
  })

  return style
}

export function marginPropToStyle(prop: string, propValue: any) {
  const style: any = {}
  const [key, symbol = '', value] = prop.split(/\b-*?/)
  const [, minus = ''] = symbol.split('')

  marginMaps[key].forEach((k) => {
    const marginValue = isValidPropValue(propValue) ? propValue : minus + value
    style[k] = getValue(marginValue, ModifierType.margin)
  })

  return style
}

export function bgPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { backgroundColor: Colors[propValue] || propValue }
  const [, color = ''] = prop.match(/^bg(\w+)/) || []
  const lowerColor = color.toLocaleLowerCase()
  return { backgroundColor: Colors[lowerColor] }
}

export function roundedPropToStyle(prop: string, propValue: any) {
  let style: any = {}
  const [key, value] = prop.split('-')
  for (const p of roundedMaps[key]) {
    const roundedValue = isValidPropValue(propValue) ? propValue : value
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
  if (isValidPropValue(propValue)) return { flex: propValue }
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
  if (positionKeys.includes(prop)) return { position: prop }
  const [key = '', value = ''] = prop.split('-')
  const lowerKey = key.toLocaleLowerCase()
  if (isValidPropValue(propValue)) return { [positionMaps[lowerKey]]: propValue }
  return { [positionMaps[lowerKey]]: getValue(value, ModifierType.position) }
}

export function zIndexPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { zIndex: propValue }
  const [, value] = prop.split('-')
  return { zIndex: value }
}

export function textAlignPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { textAlign: propValue }
  return { textAlign: prop.replace('text', '').toLowerCase() as any }
}

export function textHeadingPropToStyle(prop: string) {
  return { display: 'block', fontWeight: 'bold', fontSize: headings[prop] + 'em' }
}

export function colorPropToStyle(prop: string, propValue: any) {
  return { color: Colors[prop] || propValue }
}

export function textSizePropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { fontSize: getValue(propValue) }
  const [, value] = prop.split('-')
  return { fontSize: fontSizes[value] || getValue(value, ModifierType.text) }
}

export function textWeightPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { fontWeight: '' + propValue }
  const [, value = ''] = prop.match(/font(\w+)?/) || []
  const lowerValue = value.toLocaleLowerCase()
  return { fontWeight: '' + weights[lowerValue] || getValue(value) }
}

export function textLineHeightPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { lineHeight: getValue(propValue) }
  const [, value = ''] = prop.match(/leading-?(\w+)?/) || []
  const lowerValue = value.toLocaleLowerCase()
  return {
    lineHeight: !!leadings[lowerValue] ? `calc(${leadings[lowerValue]} * 1em)` : getValue(value),
  }
}

export function shadowPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { boxShadow: propValue }
  const [, value] = prop.split('-')
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
  if (isValidPropValue(propValue)) return { opacity: Number(propValue) / 100 }
  const [, value = 50] = prop.split('-')
  return { opacity: Number(value) / 100 }
}
