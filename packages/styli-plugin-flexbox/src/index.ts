import { Atom } from '@styli/atom'
import { StyliPlugin } from '@styli/types'
import { getFlexDirection } from '@styli/utils'

const row = 'row'
const column = 'column'

const maps: any = {
  auto: '1 1 auto',
  initial: '0 1 auto',
  none: 'none',
}

const flexReg = /^flex(Auto|Initial|None)$/i

const isFlexProps = (key: string) =>
  /^(flex|order|flexGrow|flexShrink|flexBasis|flexWrap)$/i.test(key)

export function isMatch(key: string) {
  return (
    [row, column].includes(key) ||
    isFlexProps(key) ||
    flexReg.test(key) ||
    /^flexDirection$/i.test(key)
  )
}

export function flexItemPropToStyle(prop: string, propValue: any) {
  const style: any = {}

  if (isFlexProps(prop)) {
    style[prop] = propValue
  }

  if (/^flexDirection$/.test(prop)) {
    // style[prop] = propValue
  }

  if (flexReg.test(prop)) {
    const posfix = prop.replace(/^flex/, '').toLowerCase()
    style.flex = maps[posfix]
  }

  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-flexbox',
    isMatch,
    onAtomStyleCreate(atom) {
      atom.style = flexItemPropToStyle(atom.propKey, atom.propValue)
      return atom
    },

    // TODO: 需要优化
    afterAtomStyleCreate(parser) {
      if (!parser.atoms || !parser.atoms.length) return

      const matched = parser.atoms.find(
        (i) =>
          i.matchedPlugin === 'styli-plugin-flexbox' ||
          i.matchedPlugin === 'styli-plugin-layout-engine',
      )

      if (!matched) return

      const direction = getFlexDirection(parser.props)

      const prefix = 'flexDirection-'

      const directionAtom = parser.atoms.find((i) => i.propKey === prefix + direction)

      if (!directionAtom) {
        parser.atoms.push(
          new Atom({
            key: prefix + direction,
            propKey: prefix + direction,
            propValue: '',
            classNames: [prefix + direction],
            type: 'style',
            style: { flexDirection: direction as any },
          }),
        )
      }

      const displayAtom = parser.atoms.find((i) => i.matchedPlugin === 'styli-plugin-display')

      if (!displayAtom) {
        parser.atoms.push(
          new Atom({
            key: 'display-flex',
            propKey: 'display-flex',
            propValue: '',
            classNames: ['display-flex'],
            type: 'style',
            matchedPlugin: 'styli-plugin-display',
            style: { display: 'flex' },
          }),
        )
      }
    },
  }
}
