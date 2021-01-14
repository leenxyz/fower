import { Theme, StyliPlugin } from '@styli/types'
import { isPlainDirective } from '@styli/utils'

export const corePlugin: StyliPlugin = {
  name: 'styli-plugin-core',
  onAtomModify(plugin, atom, sheet, theme: Theme) {
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
     * example <View w={false} p={() => false}></View>
     */
    const value = typeof propValue === 'function' ? propValue(theme, sheet.props) : propValue
    if (!value && value !== 0) {
      atom.type = 'invalid'
      return atom
    }

    /**
     * handle theme
     * example <View c={theme => theme.colors.green20}></View>
     */
    if (typeof propValue === 'function') {
      atom.propValue = propValue(theme, sheet.props)
    }

    if (propKey === 'styliIgnore') {
      atom.type = 'invalid'
      return atom
    }

    return plugin.onAtomStyleCreate!(atom, sheet)
  },
}
