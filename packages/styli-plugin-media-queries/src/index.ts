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

      let style = {}
      propValue.forEach((value, idx) => {
        const newAtom = plugin.onVisitProp!({ ...atom, propValue: value }, sheet)
        style = {
          ...style,
          [breakpoints[idx]]: newAtom.style,
        }
      })

      atom.type = 'media-queries'
      atom.style = style
      return atom
    },
  }
}
