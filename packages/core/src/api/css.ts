import { CSSObject, Props } from '@styli/types'
import { modifierToProps } from '@styli/utils'
import { Sheet } from '../Sheet'
import { styleManager } from '../styleManager'
import { styli } from '../styli'

export function css(...args: (string | CSSObject)[]) {

  if(!args.length) return ''

  const props = args.reduce((result: Props, cur: any) => (
    Object.assign(result, typeof cur === 'string' ? { css: cur } : modifierToProps(cur))
  ), {} as Props)

  const sheet = new Sheet(props, styli.getTheme())
  styleManager.insertStyles(sheet.toCss())

  return sheet.getClassNames()
}
