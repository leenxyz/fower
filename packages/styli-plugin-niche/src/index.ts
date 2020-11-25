import { StyliPlugin } from '@styli/types'

const keys = [
  'transform',
  'transition',
  'whiteSpace',
  'verticalAlign',
  'appearance',
  'userSelect',
]

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-niche',
    isMatch: (key) => keys.includes(key),
    onVisitProp(atom) {
      const { propKey, propValue } = atom
      atom.style = {
        [propKey]: propValue
      }
      return atom
    },
  }
}
