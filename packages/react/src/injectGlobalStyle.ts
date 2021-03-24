import { CSSObject } from '@styli/types'
import { parseCSSProp } from '@styli/utils'
import { styleManager } from '@styli/core'

export function injectGlobalStyle(cssObj: CSSObject) {
  styleManager.insertStyles(parseCSSProp(cssObj))
}
