import isBrowser from 'is-in-browser'
import { Props } from '../types'
import { isEmptyObj } from '../utils'
import { parseModifiers } from './parseModifiers'
import { styleManager } from '../styleManager'

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

  /** inline css */
  if (!isBrowser) return sheet.toStyles()

  /**
   * insert css to <style></style>
   */
  let className = sheet.getClassNames()
  let propClassName = finalProps.className

  styleManager.insertStyles(sheet.toCss())
  finalProps.className = propClassName ? `${propClassName} ${className}` : className

  return finalProps
}
