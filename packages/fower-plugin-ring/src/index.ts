import { FowerPlugin } from '@fower/types'
import { store } from '@fower/store'
import { downFirst } from '@fower/utils'
import { formatColor } from '@fower/color-helper'

const ringReg = /^ring(.+\d{2,3})?-?(\d+)?$/i

function isMatch(key: string) {
  return ringReg.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const { colors } = store.theme
      type ColorKey = keyof typeof colors
      let width: string = '1'
      let color: ColorKey = 'brand500'
      let cssColor: any = colors[color]

      const { colorPostfix } = atom.meta
      const arr = atom.key.match(ringReg) || []
      const [, colorName, w] = arr

      if (w) width = w
      if (colorName) {
        color = downFirst(colorName) as any
        cssColor = colors[color] || color
      }

      cssColor = colorPostfix ? formatColor(cssColor, colorPostfix) : cssColor

      atom.style = {
        boxShadow: `0 0 0 ${width}px ${cssColor}`,
      }
      return atom
    },
  }
}
