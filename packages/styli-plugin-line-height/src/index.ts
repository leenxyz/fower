import { ModifierType, Plugin, getValue } from '@styli/core'
import { downFirst, isValidPropValue, kebab } from '@styli/utils'

export const leadings: any = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
}

export function isTextLineHeightKey(key: string) {
  return /^lh(None|Tight|Snug|Normal|Relaxed|Loose|-.+)?$/.test(key)
}

export const pluginLineHeight = (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isTextLineHeightKey(propKey)) return

      const key = 'lineHeight'

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${kebab(key)}:${value};`
        })
      } else {
        if (isValidPropValue(propValue)) {
          rule.style = { [key]: getValue(propValue, ModifierType.lineHeight) }
        } else {
          const [, value = ''] = propKey.match(/lh-?(\w+)?/) || []
          const preset = leadings[downFirst(value)]

          rule.style = { [key]: preset ? `${preset}em` : getValue(value) }
          rule.cssFragment = `${kebab(key)}:${preset ? `${preset}em` : getValue(value)}`
        }
      }
      return rule
    },
  }
}
