import { Middleware, styli } from '@styli/core'

const designKeyList = [
  's',
  'w',
  'h',
  'maxH',
  'maxW',
  'minH',
  'minW',
  'm',
  'mx',
  'my',
  'p',
  'px',
  'py',
]

export default (): Middleware => {
  return (plugin, atom, sheet) => {
    const { propKey } = atom

    const [, key, value] = propKey.match(/^([a-zA-Z]+)(\d+)$/) || []

    if (!key || !value || !designKeyList.includes(key) || !plugin.isMatch(key)) return atom

    const spacing = styli.getTheme<string[]>('spacing')

    if (!spacing.length) {
      console.warn('theme spacing is not provide')
    }

    const newAtom = plugin.onVisitProp(
      { ...atom, propKey: key, propValue: spacing[Number(value)] },
      sheet,
    )

    newAtom.propKey = propKey

    return newAtom
  }
}
