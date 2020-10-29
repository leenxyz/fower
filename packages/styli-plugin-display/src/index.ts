import { Plugin } from '@styli/core'
import { isValidPropValue, downFirst } from '@styli/utils'

export const displayTypes = [
  'block',
  'inline',
  'none',
  'inlineBlock',
  'flow',
  'flowRoot',
  'table',
  'flex',
  'grid',
  'ruby',
  'tableRowGroup',
  'tableHeaderGroup',
  'tableFooterGroup',
  'tableRow',
  'tableCell',
  'tableColumnGroup',
  'tableColumn',
  'tableCaption',
  'inlineTable',
  'inlineFlex',
  'inlineGrid',
  'inherit',
  'initial',
  'unset',
]

export function isDisplayKey(key: string) {
  if (/^display$/.test(key)) return true
  const [, value] = key.match(/^d(\w+)$/) || []
  const dKey = downFirst(value)
  return displayTypes.includes(dKey)
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isDisplayKey(propKey)) return

      const key = 'display'

      if (Array.isArray(propValue)) {
        propValue.forEach((value, idx) => {
          const cssFragment = rule.cssFragmentList![idx] || ''
          rule.cssFragmentList![idx] = `${cssFragment}${key}:${value};`
        })
      } else {
        const [, dValue] = propKey.match(/^d(\w+)$/) || []
        const value = isValidPropValue(propValue) ? propValue : dValue
        rule.style = { ...rule.style, [key]: value }
        rule.cssFragment = `${rule.cssFragment}${key}:${value};`
      }

      return rule
    },
  }
}
