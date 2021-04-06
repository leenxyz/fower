import { StyliPlugin } from '@styli/types'
import { downFirst } from '@styli/utils'

function isMatch(key: string) {
  return /^(row|column)?Gap(-.+)?$|^gridTemplateColumns(-.+)?$/i.test(key)
}

function toStyle(propKey: string, value: any): any {
  const style: any = {}

  if (propKey.startsWith('gridTemplateColumns')) {
    const [, styleValue] = propKey.split('-')
    let columnsValue: number = styleValue || value
    style.gridTemplateColumns = `repeat(${columnsValue}, minmax(0px, 1fr))`
  }

  if (/^(row|column)?Gap(-.+)?$/i.test(propKey)) {
    const [key, value] = propKey.split('-')
    const gapValue = value ? value : value
    style[downFirst(key)] = gapValue
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
