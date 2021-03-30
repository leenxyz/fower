import { StyliPlugin } from '@styli/types'
import { isValueProp } from '@styli/utils'

export function isOpacityKey(key: string) {
  return /^opacity(-\d+)?$/.test(key)
}

export function opacityPropToStyle(prop: string, propValue: any): any {
  const [, value = 50] = prop.split('-')
  const val = isValueProp(propValue) ? propValue : value
  return { opacity: Number(val) / 100 }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-opacity',
    isMatch: isOpacityKey,
    onAtomStyleCreate(atom) {
      atom.style = opacityPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
