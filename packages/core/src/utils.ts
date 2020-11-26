import { downFirst, formatColor, isNumber, isPercentNumber } from '@styli/utils'
import { ModifierType, Props } from '@styli/types'
import { styli } from './styli'

export function getValue(value: string | number, modifierType?: ModifierType | ({} & string)) {
  if (isNumber(value)) {
    const numValue = Number(value)

    if (numValue < 1 && numValue > 0) {
      return (numValue * 100).toFixed(6) + '%'
    }

    const { transformUnit } = styli.getConfig()
    return transformUnit(numValue, modifierType)
  }
  return isPercentNumber(value) ? ('' + value).replace('p', '%') : value
}

export function getColorValue(value: string = '') {
  const colors = styli.getColors()
  if (!value.includes('-')) return colors[downFirst(value)]
  const [prefix, postfix] = value.split('-')
  let color = colors[prefix] ? colors[prefix] : prefix
  return formatColor(`${color}-${postfix}`)
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
