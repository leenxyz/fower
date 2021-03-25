import { CSSObject } from '@styli/types'
import { toRules } from '@styli/css-object-processor'
import { styleManager } from '@styli/core'

export function injectGlobalStyle(cssObj: CSSObject) {
  const rules = toRules(cssObj)
  styleManager.insertStyles(rules)
}
