import { isNumber, kebab, upFirst, getValue, isValidPropValue, downFirst, hexToRgba } from './'

import { ColorType, IColors } from '../constants/colors'
import { ModifierType } from '../types/Modifiers'
import { weights, leadings, headings, fontSizes } from '../constants/typo'
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
import { CSSProperties } from 'react'

const getMediaList = () => Styli.getConfig<number[]>('breakpoints')

export function sizePropToStyle(prop: string, propValue: any): StyliUnit[] {
  const units: StyliUnit[] = []
  const [key, value] = prop.split('-')

  sizeMaps[key].forEach((k) => {
    if (Array.isArray(propValue)) {
      propValue.forEach((value, idx) => {
        units.push({
          attr: k,
          value: getValue(value, ModifierType.size),
          media: '' + getMediaList()[idx],
        })
      })
    } else {
      const attrValue = isValidPropValue(propValue) ? propValue : value
      units.push({
        attr: k,
        value: getValue(attrValue, ModifierType.size),
      })
    }
  })

  return units
}

export function paddingPropToStyle(prop: string, propValue: any): StyliUnit[] {
  const units: StyliUnit[] = []
  const [key, value] = prop.split('-')

  paddingMaps[key].forEach((k) => {
    if (Array.isArray(propValue)) {
      propValue.forEach((value, idx) => {
        units.push({
          attr: k,
          value: getValue(value, ModifierType.padding),
          media: '' + getMediaList()[idx],
        })
      })
    } else {
      const attrValue = isValidPropValue(propValue) ? propValue : value
      units.push({
        attr: k,
        value: getValue(attrValue, ModifierType.padding),
      })
    }
  })

  return units
}

export function marginPropToStyle(prop: string, propValue: any) {
  const units: StyliUnit[] = []
  const [key, symbol = '', value] = prop.split(/\b-*?/)
  const [, minus = ''] = symbol.split('')

  marginMaps[key].forEach((k) => {
    if (Array.isArray(propValue)) {
      propValue.forEach((value, idx) => {
        units.push({
          attr: k,
          value: getValue(value, ModifierType.margin),
          media: '' + getMediaList()[idx],
        })
      })
    } else {
      const attrValue = isValidPropValue(propValue) ? propValue : minus + value
      units.push({
        attr: k,
        value: getValue(attrValue, ModifierType.margin),
      })
    }
  })

  return units
}

export function bgPropToStyle(prop: string, propValue: any) {
  const Colors = Styli.getConfig<IColors>('colors')
  const units: StyliUnit[] = []
  if (Array.isArray(propValue)) {
    propValue.forEach((value, idx) => {
      units.push({
        attr: 'backgroundColor',
        value,
        media: '' + getMediaList()[idx],
      })
    })
  } else {
    const [, color = ''] = prop.match(/^bg(\w+)$/) || []
    const value = isValidPropValue(propValue) ? propValue : downFirst(color)
    units.push({
      attr: 'backgroundColor',
      value: Colors[value] || value,
    })
  }
  return units
}

export function roundedPropToStyle(prop: string, propValue: any) {
  const units: StyliUnit[] = []
  const [key, value] = prop.split('-')

  roundedMaps[key].forEach((k: string) => {
    if (Array.isArray(propValue)) {
      propValue.forEach((value, idx) => {
        units.push({
          attr: `border${k}Radius`,
          value: getValue(value),
          media: '' + getMediaList()[idx],
        })
      })
    } else {
      const attrValue = isValidPropValue(propValue) ? propValue : value
      units.push({
        attr: `border${k}Radius`,
        value: getValue(attrValue),
      })
    }
  })
  return units
}

// TODO: refactor
export function borderPropToStyle(prop: string) {
  const units: StyliUnit[] = []

  let [, second, third] = kebab(prop).split('-')
  const Colors = Styli.getConfig<IColors>('colors')
  const isBorderColor = (val: string) => !!Colors[val as ColorType]
  const isBorderStyle = (val: string) => borderStyles.includes(val)
  const isBorderPosition = (val: string) => !!positionMaps[val]
  const isBorderWidth = (val: string) => isNumber(val)

  if (isBorderWidth(second) || isBorderWidth(third)) {
    const position = isBorderPosition(second) ? upFirst(positionMaps[second]) : ''
    units.push(
      ...[
        {
          attr: `border${position}Width`,
          value: getValue(third || second, ModifierType.border),
        },
        {
          attr: `border${position}Style`,
          value: 'solid',
        },
      ],
    )
  }
  if (isBorderColor(second)) {
    units.push({
      attr: 'borderColor',
      value: Colors[second as ColorType],
    })
  }
  if (isBorderStyle(second)) {
    units.push({
      attr: 'borderStyle',
      value: second,
    })
  }
  return units
}

export function flexPropToStyle(prop: string) {
  const units: StyliUnit[] = []

  const wraps = [G.nowrap, G.wrap]

  if (prop === G.row) units.push({ attr: 'flexDirection', value: G.row })
  if (prop === G.column) units.push({ attr: 'flexDirection', value: G.row })

  // 自动 display: flex
  if (prop === G.row || prop === G.column) units.push({ attr: 'display', value: G.flex })

  // set flex-wrap
  if (wraps.includes(prop)) units.push({ attr: 'flexWrap', value: prop })

  // justify-content
  if (prop.startsWith('justify')) {
    units.push({
      attr: 'justifyContent',
      value: flexMaps[prop.replace('justify', '').toLocaleLowerCase()],
    })
  }

  if (prop.startsWith('align')) {
    units.push({
      attr: 'alignItems',
      value: flexMaps[prop.replace('align', '').toLocaleLowerCase()],
    })
  }

  return units
}

// set flex-flow、flex-shrink、flex-basic
export function flexItemPropToStyle(prop: any, propValue: any) {
  const units: StyliUnit[] = []

  if (Array.isArray(propValue)) {
    propValue.forEach((value, idx) => {
      units.push({
        attr: 'flex',
        value,
        media: '' + getMediaList()[idx],
      })
    })
  } else {
    if (isValidPropValue(propValue)) {
      units.push({ attr: 'flex', value: propValue })
    } else {
      const [, value] = prop.split('-')
      const flexValue = value || (propValue === true ? 1 : propValue)
      units.push({ attr: 'flex', value: flexValue })
    }
  }
  return units
}

export function alignmentPropToStyle(props: any) {
  let units: StyliUnit[] = []
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

  units = Object.keys(style).map((attr) => ({ attr, value: style[attr] }))
  return units
}

export function positionPropToStyle(prop: string, propValue: any): any {
  if (positionKeys.includes(prop)) return { position: prop }
  const [key = '', value = ''] = prop.split('-')
  const lowerKey = key.toLocaleLowerCase()

  if (Array.isArray(propValue)) {
    propValue.forEach((value, idx) => {
      units.push({
        attr: positionMaps[lowerKey],
        value,
        media: '' + getMediaList()[idx],
      })
    })
  } else {
    const attrValue = isValidPropValue(propValue)
      ? propValue
      : getValue(value, ModifierType.position)

    units.push({
      attr: positionMaps[lowerKey],
      value: attrValue,
    })
  }

  return units
}

export function zIndexPropToStyle(prop: string, propValue: any) {
  const units: StyliUnit[] = []
  const [, symbol = '', value] = prop.split(/\b-*?/)
  const [, minus = ''] = symbol.split('')

  if (Array.isArray(propValue)) {
    propValue.forEach((value, idx) => {
      units.push({
        attr: 'zIndex',
        value,
        media: '' + getMediaList()[idx],
      })
    })
  } else {
    const attrValue = isValidPropValue(propValue) ? propValue : minus + value
    units.push({
      attr: 'zIndex',
      value: attrValue,
    })
  }
  return units
}

export function textAlignPropToStyle(prop: string, propValue: any) {
  const units: StyliUnit[] = []

  if (Array.isArray(propValue)) {
    propValue.forEach((value, idx) => {
      units.push({
        attr: 'textAlign',
        value,
        media: '' + getMediaList()[idx],
      })
    })
  } else {
    const attrValue = isValidPropValue(propValue)
      ? propValue
      : (prop.replace('text', '').toLowerCase() as any)
    units.push({
      attr: 'textAlign',
      value: attrValue,
    })
  }

  return units
}

export function textHeadingPropToStyle(prop: string): any {
  return { display: 'block', fontWeight: 'bold', fontSize: headings[prop] + 'em' }
}

export function colorPropToStyle(prop: string, propValue: any) {
  const Colors = Styli.getConfig<IColors>('colors')
  const units: StyliUnit[] = []

  if (Array.isArray(propValue)) {
    propValue.forEach((value, idx) => {
      units.push({
        attr: 'color',
        value: Colors[value] || value,
        media: '' + getMediaList()[idx],
      })
    })
  } else {
    let color = ''
    if (isValidPropValue(propValue)) {
      const [hex, opacity] = propValue.split('.')
      color = opacity ? hexToRgba(hex, opacity) : hex
    } else {
      color = prop.replace('color', '')
    }
    units.push({ attr: 'color', value: Colors[color] || color })
  }

  return units
}

export function textSizePropToStyle(prop: string, propValue: any) {
  const units: StyliUnit[] = []
  if (Array.isArray(propValue)) {
    propValue.forEach((value, idx) => {
      units.push({
        attr: 'fontSize',
        value: getValue(value, ModifierType.text),
        media: '' + getMediaList()[idx],
      })
    })
  } else {
    const [, value] = prop.split('-')
    const attrValue = isValidPropValue(propValue) ? propValue : value
    units.push({
      attr: 'fontSize',
      value: fontSizes[attrValue] || getValue(attrValue, ModifierType.text),
    })
  }

  return units
}

export function textWeightPropToStyle(prop: string, propValue: any) {
  const units: StyliUnit[] = []
  if (Array.isArray(propValue)) {
    propValue.forEach((value, idx) => {
      units.push({
        attr: 'fontWeight',
        value,
        media: '' + getMediaList()[idx],
      })
    })
  } else {
    const [, second, third] = kebab(prop).split('-')
    if (isValidPropValue(propValue)) {
      units.push({
        attr: 'fontWeight',
        value: propValue,
      })
    } else {
      units.push({
        attr: 'fontWeight',
        value: second === 'weight' ? third : weights[downFirst(second)] || second,
      })
    }
  }
  return units
}

export function textLineHeightPropToStyle(prop: string, propValue: any): any {
  if (isValidPropValue(propValue)) {
    return {
      lineHeight: Array.isArray(propValue)
        ? propValue.map((v) => getValue(v))
        : getValue(propValue),
    }
  }
  return units
}

export function shadowPropToStyle(prop: string, propValue: any) {
  const units: StyliUnit[] = []
  const attr = 'boxShadow'
  if (Array.isArray(propValue)) {
    propValue.forEach((value, idx) => {
      units.push({
        attr,
        value,
        media: '' + getMediaList()[idx],
      })
    })
  } else {
    if (isValidPropValue(propValue)) {
      units.push({
        attr,
        value: propValue,
      })
    } else {
      const value = prop.replace('shadow', '')
      const gv = (v: number) => getValue(v, ModifierType.shadow)
      const obj: any = { attr }
      switch (value) {
        case 'XXS':
          obj.value = `0 0 0 ${gv(1)} rgba(0, 0, 0, 0.05)`
          break
        case 'XS':
          obj.value = `0 ${gv(1)} ${gv(2)} 0 rgba(0, 0, 0, 0.05)`
          break
        case 'S':
          obj.value = `0 ${gv(1)} ${gv(3)} 0 rgba(0, 0, 0, 0.1), 0 ${gv(1)} ${gv(
            2,
          )} 0 rgba(0, 0, 0, 0.06)`
          break
        case 'M':
          obj.value = `0 ${gv(4)} ${gv(6)} -${gv(1)} rgba(0, 0, 0, 0.1), 0 ${gv(2)} ${gv(4)} -${gv(
            1,
          )} rgba(0, 0, 0, 0.06)`
          break
        case 'L':
          obj.value = `0 ${gv(10)} ${gv(14)} -${gv(3)} rgba(0, 0, 0, 0.1), 0 ${gv(4)} ${gv(
            6,
          )} -${gv(2)} rgba(0, 0, 0, 0.05)`
          break
        case 'XL':
          obj.value = `0 ${gv(20)} ${gv(25)} -${gv(5)} rgba(0, 0, 0, 0.1), 0 ${gv(10)} ${gv(
            10,
          )} -${gv(5)} rgba(0, 0, 0, 0.04)`
          break
        case 'XXL':
          obj.value = `0 ${gv(25)} ${gv(50)} -${gv(12)} rgba(0, 0, 0, 0.25)`
          break
        case 'Inner':
          obj.value = `inset 0 ${gv(2)} ${gv(4)} 0 rgba(0, 0, 0, 0.06)`
          break
        case 'Outline':
          obj.value = `0 0 0 ${gv(3)} rgba(66, 153, 225, 0.5)`
          break
        case 'None':
          obj.value = 'none'
          break
        default:
          obj.value = `0 ${gv(1)} ${gv(3)} 0 rgba(0, 0, 0, 0.1), 0 ${gv(1)} ${gv(
            2,
          )} 0 rgba(0, 0, 0, 0.06)`
      }
      units.push(obj)
    }
  }
  return units
}

export function opacityPropToStyle(prop: string, propValue: any): any {
  if (isValidPropValue(propValue)) {
    return {
      opacity: Array.isArray(propValue)
        ? propValue.map((v) => Number(v) / 100)
        : Number(propValue) / 100,
    }
  }
  return units
}

export function displayPropToStyle(prop: string, propValue: any) {
  const units: StyliUnit[] = []
  if (Array.isArray(propValue)) {
    propValue.forEach((value, idx) => {
      units.push({
        attr: 'display',
        value,
        media: '' + getMediaList()[idx],
      })
    })
  } else {
    const [, value] = prop.match(/^d(\w+)$/) || []
    units.push({
      attr: 'display',
      value: isValidPropValue(propValue) ? propValue : kebab(value),
    })
  }
  return units
}

export function overFlowPropToStyle(prop: string, propValue: any): CSSProperties {
  const [, key, value] = prop.match(/^(o[xy]?)([A-Z]\w+)$/) || []
  if (isValidPropValue(propValue)) return { [prop]: propValue }

  const val: any = downFirst(value)
  switch (key) {
    case 'ox':
      return { overflowX: val }
    case 'oy':
      return { overflowY: val }
    default:
      return { overflow: val }
  }

  return units
}
