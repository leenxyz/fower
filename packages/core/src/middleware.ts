import { Theme } from '@styli/theming'
import { Plugin } from './types'

export const coreMiddleware: Plugin = {
  name: 'styli-plugin-core',
  middleware(plugin, atom, sheet, theme: Theme) {
    const { propKey } = atom

    if (!plugin.isMatch!(propKey)) return atom

    // handle theme
    if (typeof atom.propValue === 'function') {
      atom.propValue = atom.propValue(theme)
    }

    return plugin.onVisitProp!(atom, sheet)
  },
}
