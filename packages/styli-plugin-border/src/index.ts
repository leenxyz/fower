import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { formatColor } from '@styli/utils'

export const G = {
  top: 'Top',
  left: 'Left',
  right: 'Right',
  bottom: 'Bottom',
}

export const positionMaps: { [key: string]: string[] } = {
  T: [G.top],
  L: [G.left],
  R: [G.right],
  B: [G.bottom],
  X: [G.left, G.right],
  Y: [G.top, G.bottom],
}

export function isBorderKey(key: string) {
  return /^border(T|R|B|L|X|Y|t|r|b|l|x|y)?$/.test(key)
}

// TODO: 这里强制了颜色写在最后
function formatBorderValue(value: string) {
  const Colors = styli.getColors()
  const result = value.split(/\s+/)

  // if not like: 1px solid #555
  if (result.length !== 3) return value
  const [prefix, postfix] = result[2].split('-')
  const color = Colors[prefix] || prefix

  result[2] = postfix ? formatColor(`${color}-${postfix}`) : color
  return result.join(' ')
}

export function borderPropToStyle(prop: string, propValue: any) {
  let style: any = {}
  const position = prop.replace(/^border/, '')
  if (position) {
    positionMaps[position.toUpperCase()].map((item) => {
      style[`border${item}`] = formatBorderValue(propValue)
    })
  } else {
    style.border = formatBorderValue(propValue)
  }

  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-border',
    isMatch: isBorderKey,
    onVisitProp(atom) {
      atom.style = borderPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
