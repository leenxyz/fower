import { noCase } from 'no-case'
import { Styli } from '../styli'
import { ModifierType } from '../types/Modifiers'

export function upFirst(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
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
    if (Styli.configs.transformUnit) {
      return Styli.configs.transformUnit(Number(value), modifierType)
    } else {
      return value + Styli.unit
    }
  }
  return value
}
