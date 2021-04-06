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

export function toStyle(key: string, value: any) {
  const style: any = {}

  if (isFlexProps(key)) {
    style[key] = value
  }

  if (/^flexDirection$/.test(key)) {
    style[key] = value
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
      if (atom.propKey === 'flex' && typeof atom.value === 'boolean') {
        atom.key = 'flex'
        atom.className = 'flex'
        atom.style = { display: 'flex' }
      } else {
        atom.style = toStyle(atom.key, atom.value)
      }

      return atom
    },
  }
}
