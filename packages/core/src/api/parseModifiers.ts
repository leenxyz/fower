import { isEmptyObj, isFalsyProp } from '@styli/utils'
import { Sheet } from '../Sheet'
import { styli } from '../styli'
import { Plugin, Props, Rule } from '../types'

export function parseModifiers(props: Props = {}): Sheet {
  let sheet = new Sheet(props)

  if (isEmptyObj(props)) return sheet

  const plugins = styli.getConfig<Plugin[]>('plugins')

  for (const [propKey, propValue] of Object.entries(props)) {
    if (isFalsyProp(propValue)) continue

    /** register plugin */
    for (const plugin of plugins) {
      if (plugin.onVisitProp) {
        const initialRule: Rule = {
          name: propKey,
          style: {},
          cssFragment: '',
          cssFragmentList: [],
        }

        const newRule = plugin.onVisitProp({ propKey, propValue }, initialRule, sheet)

        if (newRule) {
          sheet.addRule(newRule)
          break
        }
      }
    }
  }

  return sheet
}
