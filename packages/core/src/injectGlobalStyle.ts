import { CSSObject } from '@styli/types'
import { toRules } from '@styli/css-object-processor'
import { styleSheet } from '@styli/sheet'

export function injectGlobalStyle(cssObj: CSSObject) {
  const rules = toRules(cssObj as any)
  styleSheet.insertStyles(rules)
}
