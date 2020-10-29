import { Plugin } from '@styli/core'
import { isValidPropValue, downFirst, kebab } from '@styli/utils'

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

export function displayPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { display: propValue }
  const [, value] = prop.match(/^d(\w+)$/) || []
  return { display: kebab(value) }
}

export default (): Plugin => {
  return {
    onVisitProp({ propKey, propValue }, rule) {
      if (!isDisplayKey(propKey)) return

      rule.style = displayPropToStyle(propKey, propValue)
      return rule
    },
  }
}
