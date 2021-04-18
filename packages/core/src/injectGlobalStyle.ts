import { CSSObject } from '@fower/types'
import { toRules } from '@fower/css-object-processor'
import { styleSheet } from '@fower/sheet'

export function injectGlobalStyle(cssObj: CSSObject) {
  const rules = toRules(cssObj as any)
  styleSheet.insertStyles(rules)
}
