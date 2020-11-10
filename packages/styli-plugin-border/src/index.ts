import { Plugin } from '@styli/core'
// import { isBrowser } from '@styli/utils'

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

export function borderPropToStyle(prop: string, propValue: any) {
  let style: any = {}
  const position = prop.replace(/^border/, '')
  if (position) {
    positionMaps[position.toUpperCase()].map((item) => {
      style[`border${item}`] = propValue
    })
  } else {
    style.border = propValue
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
