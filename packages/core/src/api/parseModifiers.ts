import { isEmptyObj, isFalsyProp } from '@styli/utils'
import { Sheet } from '../Sheet'
import { styli } from '../styli'
import { Plugin, Props, Atom } from '../types'

export function parseModifiers(props: Props = {}): Sheet {
  let sheet = new Sheet(props)

  if (isEmptyObj(props)) return sheet

  const plugins = styli.getConfig<Plugin[]>('plugins')

  for (const [propKey, propValue] of Object.entries(props)) {
    if (isFalsyProp(propValue)) continue

    /** register plugin */
    for (const plugin of plugins) {
      if (plugin.onVisitProp) {
        const initialAtom: Atom = { propKey, propValue, style: {} }

        const newAtom = plugin.onVisitProp(initialAtom, sheet)

        if (newAtom) {
          sheet.addAtom(newAtom)
          break
        }
      }
    }
  }

  return sheet
}
