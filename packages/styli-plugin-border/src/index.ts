import { Plugin, styli, getValue } from '@styli/core'
import { kebab, isNumber, upFirst } from '@styli/utils'

export const G = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
}

export const positionMaps: any = {
  t: G.top,
  l: G.left,
  r: G.right,
  b: G.bottom,
}

export const borderStyles = ['solid', 'dashed', 'dotted', 'double', 'none']

// TODO: need refactor
export function isBorderKey(key: string) {
  return key.startsWith('border')
}

export function borderPropToStyle(prop: string) {
  let style: any = {}

  let [, second, third] = kebab(prop).split('-')
  const Colors = styli.getColors()
  const isBorderColor = (val: string) => !!Colors[val as any]
  const isBorderStyle = (val: string) => borderStyles.includes(val)
  const isBorderPosition = (val: string) => !!positionMaps[val]
  const isBorderWidth = (val: string) => isNumber(val)

  if (isBorderWidth(second) || isBorderWidth(third)) {
    const position = isBorderPosition(second) ? upFirst(positionMaps[second]) : ''
    style[`border${position}Width`] = getValue(third || second, 'border')
    style[`border${position}Style`] = 'solid'
  }
  if (isBorderColor(second)) {
    style.borderColor = Colors[second as any]
  }
  if (isBorderStyle(second)) {
    style.borderStyle = second
  }

  return style
}

export default (): Plugin => {
  return {
    onVisitProp(prop, sheet) {
      if (!isBorderKey(prop.key)) return { sheet }

      const style = borderPropToStyle(prop.key)

      sheet.addRule({ name: prop.key, style })
      return { sheet, matched: true }
    },
  }
}
