import { getValue, styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { formatColor, isNumber } from '@styli/utils'

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
  return key.startsWith('border')
}

// TODO: 这里强制了颜色写在最后
function formatBorderValue(value: string) {
  const colors = styli.getColors()
  const result = value.split(/\s+/)

  // if not like: 1px solid #555
  if (result.length !== 3) return value
  const [prefix, postfix] = result[2].split('-')
  const color = colors[prefix] || prefix

  result[2] = postfix ? formatColor(`${color}-${postfix}`) : color
  return result.join(' ')
}

export function borderPropToStyle(prop: string, propValue: any) {
  if (prop === 'border') {
    if (typeof propValue === 'boolean') {
      return { borderWidth: getValue(1) }
    }
    return { border: formatBorderValue(propValue) }
  }

  const colors = styli.getColors()
  const postfix = prop.replace(/^border/, '')

  /** @example borderSolid,borderDashed-2 */
  if (/^(Solid|Dashed|Dotted|Double|None)$/i.test(postfix)) {
    return { borderStyle: postfix.toLowerCase() }
  }

  /** @example border-0,border-1,border-2 */
  if (/^-\d+$/.test(postfix)) {
    return { borderWidth: getValue(postfix.replace(/^-/, '')) }
  }

  /** @example borderT, borderR */
  if (positionMaps[postfix.toUpperCase()]) {
    let style: any = {}
    positionMaps[postfix.toUpperCase()].map((item) => {
      style[`border${item}`] = formatBorderValue(propValue)
    })
    return style
  }

  /** @example borderGray20,borderRed20-O20,borderBlue-T20 */
  if (styli.isStyliColor(postfix)) {
    console.log('postfix:', postfix)
    return { borderColor: styli.getColorValue(postfix) }
  }

  return {
    [prop]: colors[propValue] || isNumber(propValue) ? getValue(propValue) : propValue,
  }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-border',
    isMatch: isBorderKey,
    onVisitProp(atom) {
      atom.style = borderPropToStyle(atom.propKey, atom.propValue)
      return atom
    },

    // TODO: 不够优雅
    afterVisitProp(sheet) {
      const borderAtom = sheet.atoms.find(({ propKey }) => propKey === 'border-style-solid')

      /** set global border style */
      if (!borderAtom) {
        sheet.atoms.push({
          key: 'styli-border-reset',
          propKey: 'styli-border-reset',
          className: 'styli-border-reset',
          propValue: '',
          type: 'global',
          style: {
            '*': {
              // border: '0 solid #ccc',
              borderWidth: 0,
              borderStyle: 'solid',
              borderColor: '#ccc',
            },
          },
        })
      }
    },
  }
}
