import { StyliPlugin } from '@styli/types'

export const flexMaps: Record<string, string> = {
  auto: '1 1 auto',
  initial: '0 1 auto',
  none: 'none',
}

const flexReg = /^flex(Auto|Initial|None)$/i
const directionReg = /^flexDirection$/i

const isFlexProps = (key: string) => /^order$|^flex(Grow|Shrink|Basis|Wrap)?$/i.test(key)

export function isMatch(key: string) {
  return isFlexProps(key) || flexReg.test(key) || directionReg.test(key)
}

export function toStyle(key: string, value: any) {
  const style: any = {}

  if (isFlexProps(key)) {
    style[key] = value
  }

  if (directionReg.test(key)) {
    style[key] = value
  }

  if (flexReg.test(key)) {
    const posfix = key.replace(/^flex/, '').toLowerCase()
    style.flex = flexMaps[posfix]
  }

  return style
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      // specail key: flex={true} -> display: 'flex'
      if (atom.propKey === 'flex' && atom.isTruePropValue) {
        atom.style = { display: 'flex' }
      } else {
        atom.style = toStyle(atom.key, atom.value)
      }

      return atom
    },
  }
}
