import { FowerPlugin } from '@fower/core'
import { store, Atom } from '@fower/core'
import { downFirst } from '@fower/utils'
import { formatColor } from '@fower/color-helper'

const ringReg = /^ring(.+\d{2,3})?-?(\d+)?$/i

function isMatch(key: string) {
  return ringReg.test(key)
}

function toStyle(atom: Atom): any {
  const { colors } = store.theme
  type ColorKey = keyof typeof colors
  let width: string = '1'
  let color: ColorKey = 'brand500'
  let cssColor: any = colors[color]

  const { colorPostfix } = atom.meta
  const arr = atom.key.match(ringReg) as string[]

  const [, colorName, w] = arr
  if (w) width = w

  if (colorName) {
    color = downFirst(colorName) as any
    if (colors[color]) {
      cssColor = colors[color]
    } else {
      return undefined
    }
  }

  cssColor = colorPostfix ? formatColor(cssColor, colorPostfix) : cssColor

  return {
    boxShadow: `0 0 0 ${width}px ${cssColor}`,
  }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom)

      return atom
    },
  }
}
