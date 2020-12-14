import { darken, lighten, toHex, getRgbaValue } from './libs/color'

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

export function formatColor(value: string): string {
  if (!value.includes('-')) return value
  const result = value.match(/^(.+)-([TOLDtold])?(\d{0,3})?$/)
  if (!result) return value
  const [, color, type, amountStr] = result
  const amount = Number(amountStr)

  if (!type) return type
  if (/^t$/i.test(type)) return transparentize(color, amount)
  if (/^o$/i.test(type)) return opacify(color, amount)
  if (/^d$/i.test(type)) return toHex(darken(color, amount))
  if (/^l$/i.test(type)) return toHex(lighten(color, amount))
  return color
}
