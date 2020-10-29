import { isNumber } from '@styli/utils'
import { styli } from '../styli'
import { ModifierType } from '../types/Modifiers'

export function getValue(value: string | number, modifierType?: ModifierType | ({} & string)) {
  if (isNumber(value)) {
    const { transformUnit } = styli.getConfig()
    return transformUnit(Number(value), modifierType)
  }
  return value
}
