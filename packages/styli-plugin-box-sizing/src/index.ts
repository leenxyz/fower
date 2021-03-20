import { StyliPlugin } from '@styli/types'
import { kebab } from '@styli/utils'

const keys = ['boxSizing', 'contentBox', 'borderBox']

function isMatch(key: string) {
  return keys.includes(key)
}

function boxSizingPropToStyle(propKey: string, propValue: any): any {
  if (propKey === 'boxSizing') return { [propKey]: propValue }
  return { boxSizing: kebab(propKey) }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-box-sizing',
    isMatch,
    onAtomStyleCreate(atom) {
      atom.style = boxSizingPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
