import { PropsParser } from './PropsParser'
import { styleManager } from './styleManager'
import { CssObject, Props } from './types'
import { modifierToProps } from './utils'

export function css(...args: (string | CssObject)[]) {
  const props = args.reduce((result, cur) => {
    if (typeof cur === 'string') {
      return { ...result, ...modifierToProps(cur) }
    } else {
      return { ...result, css: cur }
    }
  }, {} as Props)

  const parser = new PropsParser(props)
  const sheet = parser.sheet
  styleManager.insertStyles(sheet.toCss())

  return sheet.getClassNames()
}
