import { styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-media-queries',
    onAtomModify(plugin, atom, sheet) {
      const { propKey, propValue } = atom

      if (!Array.isArray(propValue) || !plugin.isMatch!(propKey)) return atom

      const breakpoints = styli.getTheme('breakpoints') || {}
      const breakpointKeys = Object.keys(breakpoints)

      if (!breakpointKeys.length) {
        console.error('theme breakpoints not provide')
      }

      atom.type = 'media-queries'
      atom.style = propValue.reduce((result, cur, i) => {
        const newAtom = plugin.onAtomStyleCreate!(
          {
            ...atom,
            propValue: cur,
          },
          sheet,
        )

        return {
          ...result,
          [breakpoints[breakpointKeys[i]]]: newAtom.style,
        }
      }, {})

      return atom
    },
  }
}
