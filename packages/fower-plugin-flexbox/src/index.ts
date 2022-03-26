import { Atom } from '@fower/core'
import { FowerPlugin } from '@fower/core'
import { kebab } from '@fower/utils'

export const flexMaps: Record<string, string> = {
  auto: '1 1 auto',
  initial: '0 1 auto',
  none: 'none',
}

const flexReg = /^flex(Auto|Initial|None)$/i
const wrapReg = /^flex(Wrap(Reverse)?|Nowrap)$/i

const isFlexProps = (key: string) => /^order$|^flex(Grow|Shrink|Basis|Wrap)?$/i.test(key)

export function isMatch(key: string) {
  return isFlexProps(key) || flexReg.test(key) || wrapReg.test(key)
}

export function toStyle(atom: Atom) {
  const { key, value } = atom
  const style: any = {}

  if (key === 'flex' && /^\d+/.test(value)) {
    return { flex: Number(value) }
  }

  if (wrapReg.test(key) && atom.isTruePropValue) {
    const postfix = key.replace(/^flex/, '')
    style.flexWrap = kebab(postfix).toLowerCase()
    return style
  }

  if (isFlexProps(key)) {
    const shouldKebab = /^flex(Grow|Shrink|Basis|Wrap)$/i.test(key)
    const newKey = shouldKebab ? kebab(key.replace(/^flex/, 'flex-')) : key

    style[newKey] = value
  }

  if (flexReg.test(key)) {
    const postfix = key.replace(/^flex/, '').toLowerCase()
    style.flex = flexMaps[postfix]
  }

  return style
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      // special key: flex={true} -> display: 'flex'
      if (atom.propKey === 'flex' && atom.isTruePropValue) {
        atom.style = { display: 'flex' }
      } else {
        atom.style = toStyle(atom)
      }
      console.log('atom:', atom)

      return atom
    },
  }
}
