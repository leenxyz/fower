import { noCase } from 'no-case'
import isBrowser from 'is-in-browser'

const regPseudo = /(_a|_c|_d|_e|_f|_h|_l|_v)$/

export { isBrowser }
export function trimPseudo(str: string) {
  return str.replace(regPseudo, '')
}

export function isPseudoKey(str: string) {
  return regPseudo.test(str)
}

export function upFirst(s: string = '') {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function downFirst(s: string = '') {
  return s.charAt(0).toLowerCase() + s.slice(1)
}

export function kebab(s: string) {
  return noCase(s).replace(/\s/g, '-')
}

export function isNumber(s: string | number) {
  return /^-?\d+$/.test('' + s)
}

export function isValidPropValue(value: any) {
  return !!value && typeof value !== 'boolean'
}

export function elementType(ele: any) {
  const typeStr = Object.prototype.toString.call(ele)
  const reg = /^\[object\s([A-Za-z]+)\]$/
  reg.test(typeStr)
  return RegExp.$1.toLowerCase()
}

export function isEmptyObj(props: any) {
  return !props || !Object.keys(props).length
}

// https://www.zhangxinxu.com/wordpress/2010/03/javascript-hex-rgb-hsl-color-convert/
export function hexToRgba(sColor: string, opacity?: string) {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/

  if (reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    let sColorChange = []
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    return `rgba(${sColorChange.join(',')},${opacity ? '.' + opacity : '1'})`
  }

  return sColor
}

export function isPercentNumber(s: string | number) {
  return /^-?\d+p$/.test('' + s)
}

export function cssKeyToStyleKey(key: string) {
  return /^Webkit.+$/.test(key) ? '-' + kebab(key) : kebab(key)
}
