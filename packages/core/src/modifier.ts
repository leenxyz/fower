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
  isPositionKey,
  isValuePositionKey,
} from './utils'
import { presetColors, ColorType } from './colors'
import { weights, fontSizes, leadings } from './typo'
import { ModifierType } from './types'
import { G, P, paddingMaps, marginMaps, flexMaps, sizeMaps, roundedMaps } from './constants'

interface Props {
  [key: string]: any
}

const centerX = `${G.center}X`
const centerY = `${G.center}Y`

export function toStyle(props: any): any {
  const attr = modifierToStyle(props)
  if (Array.isArray(props.style)) return [attr, ...props.style]
  return { ...attr, ...(props || {}) }
}

export function toFinalProps(props: any) {
  const finalProps = Object.keys(props).reduce((result, key) => {
    if (/style|.*-.*/.test(key)) return result
    return { ...result, [key]: (props as any)[key] }
  }, {} as any)
  finalProps.style = toStyle(props)
  return finalProps
}

export function modifierToStyle(props: Props) {
  const sizes = toSizes(props)
  const paddings = toPaddings(props)
  const margins = toMargins(props)
  const background = toBackground(props)
  const borders = toBorders(props)
  const flexs = toFlexs(props)
  const alignments = toAlignments(props)
  const positions = toPositions(props)
  const texts = toTexts(props)
  return {
    ...sizes,
    ...paddings,
    ...margins,
    ...background,
    ...borders,
    ...flexs,
    ...alignments,
    ...positions,
    ...texts,
  }
}

/**
 * 尺寸
 * @param props
 */
export function toSizes(props: Props) {
  const keys = Object.keys(props).filter(isSizeKey)

  return keys.reduce((result, cur) => {
    const [key, value] = cur.split('-')
    sizeMaps[key].forEach((k) => {
      const sizeValue = isValueSizeKey(cur) ? props[key] : value
      result[k] = getValue(sizeValue, ModifierType.size)
    })

    return result
  }, {} as Props)
}

/**
 * padding
 * @param props
 */
export function toPaddings(props: Props) {
  const keys = Object.keys(props).filter(isPaddingKey)

  return keys.reduce((result, cur) => {
    const [key, value] = cur.split('-')
    paddingMaps[key].forEach((k) => {
      const paddingValue = isValuePaddingKey(cur) ? props[key] : value
      result[k] = getValue(paddingValue, ModifierType.padding)
    })

    return result
  }, {} as Props)
}

/**
 * margin
 * @param props
 */
export function toMargins(props: Props) {
  const keys = Object.keys(props).filter(isMarginKey)

  return keys.reduce((result, cur) => {
    const [key, value] = cur.split('-')

    marginMaps[key].forEach((k) => {
      const marginValue = isValueMarginKey(cur) ? props[key] : value
      result[k] = getValue(marginValue, ModifierType.margin)
    })

    return result
  }, {} as Props)
}

/**
 *  Background color
 * @param props
 */
export function toBackground(props: Props) {
  const [key] = Object.keys(props).filter(isBgColorKey)
  if (!key) return {}
  let backgroundColor = ''
  if (isValueBgColorKey(key)) {
    backgroundColor = props[key]
  } else {
    const colorKey = key.replace(/^bg/, '').replace('-', '').toLowerCase() as ColorType
    backgroundColor = presetColors[colorKey]
  }

  if (!backgroundColor) return {}
  return { backgroundColor }
}

/**
 * flexbox
 * @param props
 */
export function toFlexs(props: Props) {
  const flexs: any = {}
  const keys = Object.keys(props)
  const wraps = ['nowrap', 'wrap']
  const { row, column } = props

  if (row) flexs.flexDirection = G.row
  if (column) flexs.flexDirection = G.column

  // 自动 display: flex
  if (row || column) flexs.display = G.flex

  for (const key of keys) {
    // set flex-wrap
    if (wraps.includes(key)) flexs.flexWrap = key as any

    // set flex-flow、flex-shrink、flex-basic
    if (isFlexKey(key)) {
      const [, value] = key.split('-')
      const flexValue = isValueFlexKey(key) ? props[key] : value
      flexs.flex = getValue(flexValue)
    }

    // justify-content
    if (key.startsWith('justify')) {
      flexs.justifyContent = flexMaps[key.replace('justify', '').toLocaleLowerCase()]
    }

    if (key.startsWith('align')) {
      flexs.alignItems = flexMaps[key.replace('align', '').toLocaleLowerCase()]
    }
  }

  return flexs
}

/**
 * alignment
 * @param props
 */
export function toAlignments(props: Props) {
  const { row, center } = props
  const alignments: any = {}
  const rules: { [key: string]: string[] } = {}

  if (row) {
    alignments.flexDirection = G.row
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
      if (alignments.flexDirection) alignments.flexDirection = G.row

      // 触发 flex
      alignments.display = G.flex

      if ([G.top, G.left].includes(p)) {
        alignments[key] = flexMaps.start
      } else if ([G.bottom, G.right].includes(p)) {
        alignments[key] = flexMaps.start
      } else if ([centerX, centerY].includes(p)) {
        alignments[key] = G.center
      } else if (p === G.between) {
        alignments[key] = flexMaps.between
      } else if (p === G.around) {
        alignments[key] = flexMaps.around
      } else if (p === G.evenly) {
        alignments[key] = flexMaps.evenly
      }
    }
  }

  if (center) {
    alignments.display = G.flex
    alignments.justifyContent = G.center
    alignments.alignItems = G.center
  }

  return alignments
}

/**
 * position
 * @param props
 */
export function toPositions(props: Props) {
  const positionKeys = ['static', 'fixed', 'absolute', 'relative', 'sticky']
  const maps: any = { T: G.top, L: G.left, R: G.right, B: G.bottom }

  let positions: any = {}

  for (const [key] of Object.entries(props)) {
    if (positionKeys.includes(key)) positions.position = key
  }

  const keys = Object.keys(props).filter(isPositionKey)

  return keys.reduce((result, cur) => {
    const [key, value] = cur.split('-')
    const positionValue = isValuePositionKey(cur) ? props[key] : value
    return {
      ...result,
      [maps[key]]: getValue(positionValue, ModifierType.position),
    }
  }, positions as Props)
}

/**
 * text
 * @param props
 */
export function toTexts(props: Props) {
  const aligns = ['textLeft', 'textCenter', 'textRight', 'textJustify']

  const texts: any = {}
  for (const [key] of Object.entries(props)) {
    if (aligns.includes(key)) texts.textAlign = key.replace('text', '').toLowerCase() as any

    if (presetColors[key as ColorType]) texts.color = presetColors[key as ColorType]

    if (/^text-.*/.test(key)) {
      const [, value] = key.split('-')
      if (fontSizes[value]) {
        texts.fontSize = fontSizes[value]
      } else {
        texts.fontSize = getValue(value, ModifierType.text)
      }
    }

    if (key.startsWith('font')) {
      const weightKey = key.replace(/^font/, '').toLocaleLowerCase()
      if (weights[weightKey]) texts.fontWeight = weights[weightKey]
    }

    const fontSize = parseInt((texts.fontSize || '16px') as any, 10)

    if (key.startsWith('leading')) {
      if (key.startsWith('leading-')) {
        const [, value] = key.split('-')
        texts.lineHeight = value + 'px'
      } else {
        const leadingKey = key.replace(/^leading/, '').toLocaleLowerCase()
        if (leadings[leadingKey]) texts.lineHeight = leadings[leadingKey] * fontSize + 'px'
      }
    }
  }
  return texts
}

/**
 * ==========================================
 * Border
 * ==========================================
 */
export function toBorders(props: Props) {
  const borders: any = {}

  const borderStyles = ['solid', 'dashed', 'dotted', 'double', 'none']
  const postionMaps: any = {
    t: P.Top,
    r: P.Right,
    b: P.Bottom,
    l: P.Left,
  }

  for (const [key] of Object.entries(props)) {
    /** 处理圆角 */
    const [roundedKey, radius] = key.split('-')
    if (roundedMaps[roundedKey]) {
      for (const p of roundedMaps[roundedKey]) {
        if (!radius) continue
        borders[`border${p}Radius`] = getValue(radius, ModifierType.border)
      }

      continue
    }

    /** 下面处理 border */
    if (!key.startsWith('border')) continue

    let [, second, third] = kebab(key).split('-')

    // is border color
    if (presetColors[second as ColorType]) {
      borders.borderColor = presetColors[second as ColorType]
    } else if (borderStyles.includes(second)) {
      borders.borderStyle = second
    } else if (postionMaps[second]) {
      if (third) {
        const borderKey = `border${postionMaps[second]}Width`
        borders[borderKey] = third + 'px'
      }
    }

    const borderWidth = isNumber(second) ? second : third
    if (borderWidth) borders.borderWidth = getValue(borderWidth)

    // 是否存在 border width 属性
    const hasBorderWidth =
      borders.borderWidth ||
      borders.borderTopWidth ||
      borders.borderRightWidth ||
      borders.borderBottomWidth ||
      borders.borderLeftWidth

    // set border style default to 'solid'
    if (hasBorderWidth && !borders.borderStyle) borders.borderStyle = 'solid'
  }
  return borders
}
