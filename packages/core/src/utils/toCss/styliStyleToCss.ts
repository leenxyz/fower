import { Sheet } from '../../Sheet'
import { isEmptyObj, kebab } from '../../utils'

export function styliStyleToCss(style: any, breakpoints: number[], sheet: Sheet) {
  if (isEmptyObj(style)) return {}

  let className = sheet.getClassNames()

  let cssMediaFragmentList: string[] = []

  for (let [key, value] of Object.entries(style)) {
    const cssKeyName = kebab(key)
    // media queries
    if (Array.isArray(value)) {
      if (!breakpoints.length) {
        throw new Error('breakpoints is not provide, array value is not support')
      }
      for (let i = 0; i < breakpoints.length; i++) {
        cssMediaFragmentList[i] = `${cssMediaFragmentList[i] || ''} ${cssKeyName}: ${value[i]};`
      }
    }
  }

  cssMediaFragmentList = cssMediaFragmentList.map((fragment) => `.${className} { ${fragment} }`)

  return { cssMediaFragmentList }
}
