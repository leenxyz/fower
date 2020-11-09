import { Plugin, styli } from '@styli/core'

export default (): Plugin => {
  return {
    name: 'styli-plugin-media-queries',
    middleware(plugin, atom, sheet) {
      const { propKey, propValue } = atom

      if (!Array.isArray(propValue) || !plugin.isMatch!(propKey)) return atom

      const breakpoints = styli.getTheme('breakpoints')

      if (!breakpoints.length) {
        console.error('theme breakpoints not provide')
      }

      atom.type = 'media-queries'
      atom.style = propValue.reduce((result, cur, idx) => {
        const newAtom = plugin.onVisitProp!({ ...atom, propValue: cur }, sheet)
        return {
          ...result,
          [breakpoints[idx]]: newAtom.style,
        }
      }, {})

      return atom
    },
  }
}
