import { Theme } from '@styli/theming'
import { Plugin } from './types'

const isPlainDirective = (key: string) => /^\w+(-\w+)?$/.test(key)

export const coreMiddleware: Plugin = {
  name: 'styli-plugin-core',
  middleware(plugin, atom, sheet, theme: Theme) {
    const { propKey, propValue } = atom

    if (!plugin.isMatch!(propKey) || Array.isArray(propValue) || !isPlainDirective(propKey))
      return atom

    // handle theme
    if (typeof atom.propValue === 'function') {
      atom.propValue = atom.propValue(theme)
    }

    return plugin.onVisitProp!(atom, sheet)
  },
}
