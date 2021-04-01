import { StyliPlugin } from '@styli/types'

const maps: Record<string, string> = {
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

export function flexItemPropToStyle(key: string, propValue: any) {
  const style: any = {}

  if (isFlexProps(key)) {
    style[key] = propValue
  }

  if (/^flexDirection$/.test(key)) {
    style[key] = propValue
  }

  if (flexReg.test(key)) {
    const posfix = key.replace(/^flex/, '').toLowerCase()
    style.flex = maps[posfix]
  }

  return style
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      // specail key: flex={true}
      if (atom.propKey === 'flex' && typeof atom.propValue === 'boolean') {
        atom.key = 'flex'
        atom.propKey = 'flex'
        atom.className = 'flex'
        atom.style = { display: 'flex' }
      } else {
        atom.style = flexItemPropToStyle(atom.key, atom.propValue)
      }

      return atom
    },
  }
}
