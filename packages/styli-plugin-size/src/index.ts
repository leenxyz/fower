import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export const sizeMaps: any = {
  w: ['width'],
  h: ['height'],
  s: ['width', 'height'],
  circle: ['width', 'height', 'borderRadius'],
  minw: ['minWidth'],
  maxw: ['maxWidth'],
  minh: ['minHeight'],
  maxh: ['maxHeight'],
}

export function isSizeKey(key: string) {
  return /^([wh]|circle|min[HWhw]|max[HWhw])(-.+)?$/.test(key)
}

export function isSquareKey(key: string) {
  return /^s(-[\dA-Za-z]+){0,2}$/.test(key)
}

export function sizePropToStyle(prop: string, propValue: any) {
  const style: any = {}

  const [key, ...values] = prop.split(/\b/)
  const lowerKey = key.toLowerCase()

  // ['-','10px', '-', '10px] => ['10px', '10px]
  const sizeValues = values.reduce((result, cur, idx) => {
    if (idx % 2) return result
    return [...result, (cur.length === 2 ? '-' : '') + values[idx + 1]]
  }, [] as any)

  // s-10px-5px
  if (sizeValues.length === 2) {
    const [width, height] = sizeValues
    sizeMaps['w'].forEach((k: any) => {
      style[k] = styli.getValue(width)
    })

    sizeMaps['h'].forEach((k: any) => {
      style[k] = styli.getValue(height)
    })
  } else {
    const sizeValue = isValidPropValue(propValue) ? propValue : sizeValues[0]
    sizeMaps[lowerKey].forEach((k: any) => {
      style[k] = styli.getValue(sizeValue)
    })
  }

  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-size',
    isMatch: (propKey) => {
      return isSizeKey(propKey) || isSquareKey(propKey)
    },
    beforeAtomStyleCreate(atom) {
      const { propKey } = atom
      const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []
      if (!key || !value || !sizeMaps[key]) return atom

      const sizes = styli.getTheme<string[]>('spacing') || []

      if (!sizes.length) {
        console.error('theme spacing is not provide')
      }

      return {
        ...atom,
        propKey: key,
        propValue: sizes[Number(value)],
        className: propKey,
      }
    },
    onAtomStyleCreate(atom) {
      atom.style = sizePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
