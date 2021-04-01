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

function getColorParm(value: string, postFix?: string) {
  let color = value
  let type = 't'
  let amount = ''

  if (postFix) {
    const result = postFix.match(/^([TOLD])?(\d{0,3})?$/i) || []
    type = result[1]
    amount = result[2]
  }

  if (value.includes('-')) {
    const result = value.match(/^(.+)-([TOLD])?(\d{0,3})?$/i) || []
    color = result[1]
    type = result[2]
    amount = result[3]
  }

  return { color, type, amount: Number(amount) }
}

/**
 * @example
 * ```
 * formatColor('#000--T10')
 * formatColor('#000', 'T10')
 * ```
 */
export function formatColor(value: string, postFix?: string): string {
  // #000, #000--T10, #000000, #000000--T10
  const canFormat = /^#([A-F0-9]{3}){1,2}(-[TODL]\d+)?$/i.test(value)

  if (!canFormat && !postFix) return value

  const { color, type, amount } = getColorParm(value, postFix)

  if (/^t$/i.test(type)) return transparentize(color, amount)
  if (/^o$/i.test(type)) return opacify(color, amount)
  if (/^d$/i.test(type)) return toHex(darken(color, amount))
  if (/^l$/i.test(type)) return toHex(lighten(color, amount))
  return color
}
