import { noCase } from 'no-case'
import { Styli } from '../styli'
import { PlainObject } from '../types'
import { ModifierType } from '../types/Modifiers'

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

export function isValidPropValue(v: any) {
  return typeof v !== 'boolean'
}

export function isFalsyProp(propValue: any) {
  return typeof propValue == 'boolean' && !propValue
}

export function getValue(value: string | number, modifierType?: ModifierType) {
  if (isNumber(value)) {
    const { transformUnit } = Styli.getConfigs()
    return transformUnit(Number(value), modifierType)
  }
  return value
}

export function memorize(fn: Function) {
  const cache: any = {}
  const s = (key: string, ...args: any) => {
    cache[key] = cache[key] || fn.apply(fn, args.length ? args : [key])
    return cache[key]
  }
  s.cache = cache
  return s
}

export function elementType(ele: any) {
  const typeStr = Object.prototype.toString.call(ele)
  const reg = /^\[object\s([A-Za-z]+)\]$/
  reg.test(typeStr)
  return RegExp.$1.toLowerCase()
}

export function mergeWithDefaultOptions(options: PlainObject, defaultOptions: PlainObject): any {
  const targetOptions: PlainObject = options
  for (let key in defaultOptions) {
    const defaultOptionsKeyTypeStr = elementType(defaultOptions[key])
    const optionsKeyTypeStr = elementType(options[key])
    const optionsKeyIsUndefined = optionsKeyTypeStr === 'undefined'

    if (defaultOptionsKeyTypeStr === 'object') {
      targetOptions[key] = mergeWithDefaultOptions(
        optionsKeyIsUndefined ? {} : options[key],
        defaultOptions[key],
      )
    } else if (defaultOptionsKeyTypeStr === 'array') {
      targetOptions[key] = defaultOptions[key].concat(options[key] || [])
    } else {
      targetOptions[key] = optionsKeyIsUndefined ? defaultOptions[key] : options[key]
    }
  }
  return targetOptions
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
    return `rgba(${sColorChange.join(',')},${opacity ? `.${opacity}` : '1'})`
  }

  return sColor
}
