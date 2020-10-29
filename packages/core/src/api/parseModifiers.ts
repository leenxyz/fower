import { Sheet } from '../Sheet'
import { Styli } from '../styli'
import { PlainObject, Plugin, Rule } from '../types'
import { isEmptyObj, isFalsyProp } from '../utils'

export function parseModifiers(props: PlainObject = {}): Sheet {
  let sheet = new Sheet(props)

  if (isEmptyObj(props)) return sheet

  const plugins = Styli.getConfig<Plugin[]>('plugins')

  for (const [propKey, propValue] of Object.entries(props)) {
    if (isFalsyProp(propValue)) continue

    /** register plugin */
    for (const plugin of plugins) {
      if (plugin.onVisitProp) {
        const initRule: Rule = {
          name: propKey,
          style: {},
          cssFragment: '',
          cssFragmentList: [],
        }

        const rule = plugin.onVisitProp({ propKey, propValue }, initRule, sheet)

        if (rule) {
          sheet.addRule(rule)
          break
        }
      }
    }
  }

  return sheet
}
