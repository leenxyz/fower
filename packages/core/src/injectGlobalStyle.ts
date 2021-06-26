import * as CSS from 'csstype'
import { Atom } from '@fower/atom'
import { Parser } from '@fower/parser'

/**
 * inject styles to global
 * @param cssObj
 * @exmaple
 * ```js
    injectGlobalStyle({
      '*, ::before, ::after': {
        borderStyle: 'solid',
        borderColor: '#d4d4d4',
        boxSizing: 'border-box',
      },
      body: {
        boxSizing: 'border-box',
      },
    })
 * ```
 */
export function injectGlobalStyle(cssObj: Record<string, CSS.Properties>) {
  const entries = Object.entries(cssObj)
  const parser = new Parser({})

  for (const [key, value] of entries) {
    const atom = new Atom({
      propKey: key,
      propValue: value,
      value,
      meta: { global: key },
      style: value,
    })
    parser.addAtom(atom)
  }

  parser.insertRule()
}
