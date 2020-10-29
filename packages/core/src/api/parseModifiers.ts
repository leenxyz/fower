import { Sheet } from '../Sheet'
import { styli } from '../styli'
import { Plugin, Props } from '../types'
import { isEmptyObj, isFalsyProp } from '../utils'

export function parseModifiers(props: Props = {}): Sheet {
  let sheet = new Sheet(props)

  if (isEmptyObj(props)) return sheet

  const plugins = styli.getConfig<Plugin[]>('plugins')

  for (const [propKey, propValue] of Object.entries(props)) {
    if (isFalsyProp(propValue)) continue

    /** register plugin */
    for (const plugin of plugins) {
      if (plugin.onVisitProp) {
        const { matched, sheet: newSheet } = plugin.onVisitProp({ propKey, propValue }, sheet)
        if (matched) {
          sheet = newSheet
          break
        }
      }
    }
  }

  return sheet
}
