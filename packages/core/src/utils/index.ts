import { noCase } from 'no-case'
import { Styli } from '../styli'
import { ModifierType } from '../types/Modifiers'

export function upFirst(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function downFirst(s: string) {
  return s.charAt(0).toLowerCase() + s.slice(1)
}

export function kebab(s: string) {
  return noCase(s).replace(/\s/g, '-')
}

export function isNumber(s: string | number) {
  return /^-?\d+$/.test('' + s)
}

export function isValidPropValue(v: any) {
  const type = typeof v
  return (type !== 'boolean' && type == 'string') || type === 'number'
}

export function getValue(value: string | number, modifierType?: ModifierType) {
  if (isNumber(value)) {
    const { transformUnit, unit } = Styli.getConfigs()
    return transformUnit ? transformUnit(Number(value), modifierType) : value + unit
  }
  return value
}

export function memorize(fn: Function) {
  const cache: any = {}
  const s = (key: string, ...args: any) => {
    cache[key] = cache[key] || fn.apply(fn, args)
    return cache[key]
  }
  s.cache = cache
  return s
}
