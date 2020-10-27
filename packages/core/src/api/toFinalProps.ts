import { toCss } from '../utils/toCss'
import { toStyle } from '../utils/toStyle'
import { Props } from '../types'
import { canUseDom, isEmptyObj } from '../utils'
import { parseModifiers } from './parseModifiers'

/**
 * Go get finanl props with style
 * @param props component props
 */
export function toFinalProps(props: any) {
  if (isEmptyObj(props)) return {}

  const sheet = parseModifiers(props)

  const keys = sheet.rules.map((i) => i.name)

  const finalProps = Object.keys(props).reduce((result, key) => {
    if (keys.includes(key)) return result
    return { ...result, [key]: props[key] }
  }, {} as Props)

  let style = sheet.toStyles()

  if (canUseDom) {
    return toCss()(finalProps, style, sheet)
  }
  return toStyle()(finalProps, style)
}
