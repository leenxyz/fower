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
    onStyleCreate(sheet) {
      if (!sheet.atoms || !sheet.atoms.length) return

      const matched = sheet.atoms.find(
        (i) =>
          i.matchedPlugin === 'styli-plugin-flexbox' ||
          i.matchedPlugin === 'styli-plugin-layout-engine',
      )

      if (!matched) return

      const direction = getFlexDirection(sheet.props)

      const prefix = 'flexDirection-'

      const directionAtom = sheet.atoms.find((i) => i.propKey === prefix + direction)

      if (!directionAtom) {
        sheet.atoms.push({
          key: prefix + direction,
          propKey: prefix + direction,
          propValue: '',
          className: prefix + direction,
          type: 'style',
          style: { flexDirection: direction as any },
        })
      }

      const displayAtom = sheet.atoms.find((i) => i.matchedPlugin === 'styli-plugin-display')

      if (!displayAtom) {
        sheet.atoms.push({
          key: 'display-flex',
          propKey: 'display-flex',
          propValue: '',
          className: 'display-flex',
          type: 'style',
          cache: true,
          matchedPlugin: 'styli-plugin-display',
          style: { display: 'flex' },
        })
      }
    },
  }
}
