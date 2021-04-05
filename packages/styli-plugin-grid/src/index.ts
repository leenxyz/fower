import { StyliPlugin } from '@styli/types'
import { downFirst } from '@styli/utils'

function isMatch(key: string) {
  return /^(row|column)?Gap(-.+)?$|^gridTemplateColumns(-.+)?$/i.test(key)
}

function gridPropToStyle(propKey: string, propValue: any): any {
  const style: any = {}

  if (propKey.startsWith('gridTemplateColumns')) {
    const [, value] = propKey.split('-')
    let columnsValue: number = value ? value : propValue
    style.gridTemplateColumns = `repeat(${columnsValue}, minmax(0px, 1fr))`
  }

  if (/^(row|column)?Gap(-.+)?$/i.test(propKey)) {
    const [key, value] = propKey.split('-')
    const gapValue = value ? value : propValue
    style[downFirst(key)] = gapValue
  }

  return style
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = gridPropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
