import { Sheet } from './Sheet'
import { styleManager } from './styleManager'
import { styli } from './styli'
import { CssObject, Props } from './types'
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
  const sheet = new Sheet(props, styli.config.theme)
  styleManager.insertStyles(sheet.toCss())

  return sheet.getClassNames()
}
