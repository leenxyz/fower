import { Theme } from '@styli/theming'
import { Plugin } from './types'

const isPlainDirective = (key: string) => /^\w+(--?\w+)?$/.test(key)

export const coreMiddleware: Plugin = {
  name: 'styli-plugin-core',
  middleware(plugin, atom, sheet, theme: Theme) {
    const { propKey, propValue } = atom

    if (!plugin.isMatch!(propKey)) return atom

    // propValue is false, just collect propKey and ignore it
    if (propValue === false) return atom

    // ignore media queries
    if (Array.isArray(propValue)) return atom

    // ignore not plain directive
    if (!isPlainDirective(propKey)) return atom

    // handle theme
    if (typeof atom.propValue === 'function') {
      atom.propValue = atom.propValue(theme)
    }

    return plugin.onVisitProp!(atom, sheet)
  },
}
