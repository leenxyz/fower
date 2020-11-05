import { Plugin, styli } from '@styli/core'

const designKeyList = [
  's',
  'c',
  'w',
  'h',
  'maxH',
  'maxW',
  'minH',
  'minW',
  'm',
  'mx',
  'my',
  'mt',
  'mr',
  'mb',
  'ml',
  'p',
  'px',
  'py',
  'pt',
  'pr',
  'pb',
  'pl',
]

export default (): Plugin => {
  return {
    name: 'styli-plugin-design-system',
    middleware(plugin, atom, sheet) {
      const { propKey } = atom

      const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []

      if (!key || !value || !designKeyList.includes(key) || !plugin.isMatch!(key)) return atom

      const spacing = styli.getTheme<string[]>('spacing') || []

      if (!spacing.length) {
        console.error('theme spacing is not provide')
      }

      const newAtom = plugin.onVisitProp!(
        { ...atom, propKey: key, propValue: spacing[Number(value)], className: propKey },
        sheet,
      )

      newAtom.propKey = propKey

      return newAtom
    },
  }
}
