import { Sheet } from './Sheet'
import { styleManager } from './styleManager'
import { CssObject, Props, Theme } from './types'
import { modifierToProps } from './utils'

export function css(...args: (string | CssObject)[]) {
  const props = args.reduce((result: Props, cur: any) => {
    if (typeof cur === 'string') {
      return { ...result, ...modifierToProps(cur) }
    } else {
      return { ...result, css: cur }
    }
  }, {} as Props)

  // TODO: handle theme
  const sheet = new Sheet(props, {} as Theme)
  styleManager.insertStyles(sheet.toCss())

  return sheet.getClassNames()
}
