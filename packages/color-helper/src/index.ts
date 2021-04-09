import { darken, lighten, toHex, getRgbaValue } from './libs'

export * from './libs'

export function opacityFn(color: string, amount: number = 0) {
  const [r, g, b, oldOpacity = 0] = getRgbaValue(color)
  const opacity = oldOpacity + amount / 100
  const rgbValue = [r, g, b]

  if (opacity >= 1) return toHex(`rgb(${rgbValue.join(',')})`)

  return typeof opacity === 'number'
    ? `rgba(${rgbValue.join(',')},${opacity})`
    : `rgb(${rgbValue.join(',')})`
}

export function opacify(color: string, amount: number = 0) {
  return opacityFn(color, amount)
}

export function transparentize(color: string, amount: number = 0) {
  return opacityFn(color, -amount)
}

function getColorParam(value: string, postFix: string) {
  let color = value
  let type = ''
  let amount = ''

  const result = postFix.match(/^([TOLD])?(\d{0,3})?$/i) || []
  type = result[1]
  amount = result[2]

  return { color, type, amount: Number(amount) }
}

/**
 * @example
 * ```
 * formatColor('#000', 'T10')
 * ```
 */
export function formatColor(value: string, postFix: string): string {
  // TODO: need improve
  const canFormat = /^rgba?\(.*\)|^#([A-F0-9]{3}){1,2}$/i.test(value)

  if (!canFormat) return value

  const param = getColorParam(value, postFix)
  const { color, type, amount } = param

  if (/^t$/i.test(type)) return transparentize(color, amount)
  if (/^o$/i.test(type)) return opacify(color, amount)
  if (/^d$/i.test(type)) return toHex(darken(color, amount))
  if (/^l$/i.test(type)) return toHex(lighten(color, amount))
  return color
}
