import { StyliPlugin } from '@styli/types'
import { downFirst } from '@styli/utils'

function isMatch(key: string) {
  return /^(row|column)?Gap(-.+)?$|^gridTemplateColumns(-.+)?$/i.test(key)
}

function toStyle(key: string, value: any): any {
  const style: any = {}

  if (key.startsWith('gridTemplateColumns')) {
    style.gridTemplateColumns = `repeat(${value}, minmax(0px, 1fr))`
  }

  if (/^(row|column)?Gap(-.+)?$/i.test(key)) {
    style[downFirst(key)] = value
  }

  return style
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
