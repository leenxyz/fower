import { toCss } from '../utils/toCss'
import { toStyle } from '../utils/toStyle'
import { Props } from '../types'
import { isEmptyObj } from '../utils'
import { parseModifiers } from './parseModifiers'
import { Styli } from '../styli'

/**
 * Go get finanl props with style
 * @param props component props
 */
export function toFinalProps(props: any) {
  if (isEmptyObj(props)) return {}

  const sheet = parseModifiers(props)

  const keys = sheet.rules.map((i) => i.name)

  const finalProps: Props = {}
  for (let i in props) {
    if (!keys.includes(i)) {
      finalProps[i] = props[i]
    }
  }

  const canUseDom = Styli.getConfig<boolean>('canUseDom')

  return canUseDom ? toCss(finalProps, sheet) : toStyle(finalProps, sheet)
}
