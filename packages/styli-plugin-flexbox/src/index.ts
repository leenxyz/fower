import { StyliPlugin } from '@styli/types'

const maps: any = {
  auto: '1 1 auto',
  initial: '0 1 auto',
  none: 'none',
}

const flexReg = /^flex(Auto|Initial|None)$/i

const isFlexProps = (key: string) =>
  /^(flex|order|flexGrow|flexShrink|flexBasis|flexWrap)$/i.test(key)

export function isMatch(key: string) {
  return isFlexProps(key) || flexReg.test(key) || /^flexDirection$/i.test(key)
}

export function flexItemPropToStyle(propKey: string, propValue: any) {
  const style: any = {}

  if (isFlexProps(propKey)) {
    style[propKey] = propValue
  }

  if (/^flexDirection$/.test(propKey)) {
    style[propKey] = propValue
  }

  if (flexReg.test(propKey)) {
    const posfix = propKey.replace(/^flex/, '').toLowerCase()
    style.flex = maps[posfix]
  }

  return style
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-flexbox',
    isMatch,
    onAtomStyleCreate(atom) {
      // specail key: flex={true}
      if (atom.propKey === 'flex' && typeof atom.propValue === 'boolean') {
        atom.key = 'flex'
        atom.propKey = 'flex'
        atom.className = 'flex'
        atom.style = { display: 'flex' }
      } else {
        atom.style = flexItemPropToStyle(atom.propKey, atom.propValue)
      }

      return atom
    },
  }
}
