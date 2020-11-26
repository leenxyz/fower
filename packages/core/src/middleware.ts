import { Theme, StyliPlugin } from '@styli/types'

const isPlainDirective = (key: string) => /^[\dA-Za-z]+(--?([\dA-Za-z])+)*$/.test(key)

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
     * example: <View p1></View>
     */
    if (!isPlainDirective(propKey)) return atom

    /**
     * propValue is false, collect propKey and ignore it
     * example <View w={false}></View>
     */
    let value = propValue
    if (typeof propValue === 'function') {
      value = propValue(theme, sheet.props)
    }

    if (!value && value !== 0) {
      atom.type = 'invalid'
      return atom
    }

    /**
     * handle theme
     * example <View c={theme => theme.colors.green20}></View>
     */
    if (typeof atom.propValue === 'function') {
      atom.propValue = atom.propValue(theme, sheet.props)
    }

    return plugin.onVisitProp!(atom, sheet)
  },
}
