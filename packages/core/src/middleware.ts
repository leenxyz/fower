import { Theme } from '@styli/types'
import { StyliPlugin } from '@styli/types'

const isPlainDirective = (key: string) => /^\w+(--?\w+)?$/.test(key)

export const coreMiddleware: StyliPlugin = {
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
