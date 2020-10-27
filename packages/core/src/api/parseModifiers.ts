import { Sheet } from '../Sheet'
import { Styli } from '../styli'
import { PlainObject, Plugin } from '../types'
import { isEmptyObj, isFalsyProp } from '../utils'

export function parseModifiers(props: PlainObject = {}): Sheet {
  let sheet = new Sheet(props)

  if (isEmptyObj(props)) {
    return sheet
  }

  const plugins = Styli.getConfig<Plugin[]>('plugins')

  for (const [propKey, propValue] of Object.entries(props)) {
    /** register plugin */
    for (const plugin of plugins) {
      if (plugin.onVisitProp) {
        sheet = plugin.onVisitProp({ key: propKey, value: propValue }, sheet)
      }
    }

    // ignore false value
    if (isFalsyProp(propValue)) continue

    if (['css'].includes(propKey)) {
      sheet.addRule({
        name: 'css',
        style: propValue,
      })

      continue
    }
  }

  return sheet
}
