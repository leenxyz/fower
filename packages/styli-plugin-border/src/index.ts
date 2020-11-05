import { ModifierType, Plugin, styli, getValue } from '@styli/core'
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

export function borderPropToStyle(prop: string, propValue: any) {
  const { color = 'gray' } = styli.getTheme('border') || {}
  // let style: any = { borderColor: color }
  let style: any = { borderColor: color }

  let [, second, third] = kebab(prop).split('-')
  const Colors = styli.getColors()
  const isBorderColor = (val: string) => !!Colors[val as any]
  const isBorderStyle = (val: string) => borderStyles.includes(val)
  const isBorderPosition = (val: string) => !!positionMaps[val]
  const isBorderWidth = (val: string) => isNumber(val)

  /**  default border, eg: <View border></View> */
  if (prop === 'border') {
    if (typeof propValue === 'boolean') {
      style.borderWidth = getValue(1)
      style.borderColor = color
    } else {
      style.border = propValue
    }
  }

  if (isBorderWidth(second) || isBorderWidth(third)) {
    const position = isBorderPosition(second) ? upFirst(positionMaps[second]) : ''
    style[`border${position}Width`] = getValue(third || second, ModifierType.border)
    style[`border${position}Style`] = 'solid'
  }
  if (isBorderColor(second)) {
    style.borderColor = Colors[second as any]
  }

  // borderSolid,borderDashed -> borderStyle
  if (isBorderStyle(second)) {
    style.borderStyle = `${second} !important`
  } else {
    // set default borderStyle
    if (Object.keys(style).length) style.borderStyle = 'solid'
  }

  return style
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-border',
    isMatch: isBorderKey,
    onVisitProp(atom) {
      atom.style = borderPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
