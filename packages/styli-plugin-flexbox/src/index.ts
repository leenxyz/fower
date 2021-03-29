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
  }
}
