import { Theme, StyliPlugin } from '@styli/types'

const isPlainDirective = (key: string) => /^\w+(--?\w+)?$/.test(key)

export const corePlugin: StyliPlugin = {
  name: 'styli-plugin-core',
  middleware(plugin, atom, sheet, theme: Theme) {
    const { propKey, propValue } = atom

    if (!plugin.isMatch!(propKey)) return atom

    /**
     * ignore media queries
     * example: <View w={[1, 2, 3, 4]}></View>
     */
    if (Array.isArray(propValue)) return atom

    /**
     * ignore not plain directive
     * TODO: 注释
     */
    if (!isPlainDirective(propKey)) return atom

    /**
     * propValue is false, collect propKey and ignore it
     * example <View w={false}></View>
     */
    if (propValue === false) {
      atom.type = 'invalid'
      return atom
    }

    /**
     * handle theme
     * example <View c={theme => theme.colors.green20}></View>
     */
    if (typeof atom.propValue === 'function') {
      atom.propValue = atom.propValue(theme)
    }

    return plugin.onVisitProp!(atom, sheet)
  },
}
