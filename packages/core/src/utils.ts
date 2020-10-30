import { isNumber, isPercentNumber } from '@styli/utils'
import { styli } from './styli'
import { ModifierType, Props } from './types'

export function getValue(value: string | number, modifierType?: ModifierType | ({} & string)) {
  if (isNumber(value)) {
    const { transformUnit } = styli.getConfig()
    return transformUnit(Number(value), modifierType)
  }
  return isPercentNumber(value) ? ('' + value).replace('p', '%') : value
}

/**
 * modifierToProps
 * @param modifier
 * @example const props = modifierToProps('px-10 m-20')
 */
export function modifierToProps(modifier: string): Props {
  return modifier
    .split(/[\s\t\n]+/)
    .reduce((result, cur) => ({ ...result, [cur]: true }), {} as Props)
}
